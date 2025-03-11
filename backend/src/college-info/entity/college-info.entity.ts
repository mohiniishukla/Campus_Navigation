import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey:false})
export class CollegeInfo{
    @Prop({ type: String })
    name:string

    @Prop({ type: String })
    affiliation:string

    @Prop({ type: String })
    accredition:string

    @Prop({ type: String })
    isoCertification:string

    @Prop({ type: String })
    contactEmail:string

    @Prop({ type: String })
    logoUrl:string
}

export type CollegeInfoDocument = CollegeInfo & Document;
export const CollegeInfoSchema = SchemaFactory.createForClass(CollegeInfo);