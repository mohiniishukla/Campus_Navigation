import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpInterceptorInterceptor } from './Interceptor/http-interceptor.interceptor';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Mappedin API')
    .setDescription('Api Docs')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  
  // Logger and interceptor setup
  app.useGlobalInterceptors(
    new HttpInterceptorInterceptor(
      WinstonModule.createLogger({
        transports:[
          new transports.Console({
            format: format.combine(
              format.timestamp(),
              format.ms(),
              nestWinstonModuleUtilities.format.nestLike('nest-winston', {
                colors: true,
                prettyPrint: true,
              })
            ),
          })
        ]
      })
    )
  );
  
  // Enable CORS for frontend requests
  app.enableCors();
  
  // Use PORT from environment variables for Vercel, fallback to 3000
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
