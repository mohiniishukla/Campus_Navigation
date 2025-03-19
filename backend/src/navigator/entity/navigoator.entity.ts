import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({versionKey:false})
export class Navigation{
    @Prop({ type: String })
    name:string
}

export type NavigationDocument = Navigation & Document;
export const NavigationSchema = SchemaFactory.createForClass(Navigation);