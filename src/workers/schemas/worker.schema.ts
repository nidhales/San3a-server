import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import  { Document } from "mongoose"

export type WorkerDocument = Worker & Document

@Schema()
export class Worker {
  @Prop({ required: true })
  userId: string

  @Prop({ required: true })
  profession: string

  @Prop()
  description: string

  @Prop({ type: [Number], required: true })
  location: [number, number] // [longitude, latitude]
}

export const WorkerSchema = SchemaFactory.createForClass(Worker)

