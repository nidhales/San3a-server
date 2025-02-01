import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import  { Document } from "mongoose"

export type JobDocument = Job & Document

@Schema()
export class Job {
  @Prop({ required: true })
  userId: string

  @Prop({ required: true })
  workerId: string

  @Prop({ required: true })
  description: string

  @Prop({ required: true })
  status: string

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const JobSchema = SchemaFactory.createForClass(Job)

