import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey:false})
export class EventEntity{
    @Prop({ type: String })
    title:string

    @Prop({ type: String })
    date:string

    @Prop({ type: String })
    description:string

    @Prop({ type: String })
    location:string

    @Prop({ type: String })
    registrationLink:string
}

export type EventEntityDocument = EventEntity & Document;
export const EventEntitySchema = SchemaFactory.createForClass(EventEntity);