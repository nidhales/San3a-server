import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import  { Model } from "mongoose"
import { Worker, type WorkerDocument } from "./schemas/worker.schema"

@Injectable()
export class WorkersService {
  constructor(@InjectModel(Worker.name) private workerModel: Model<WorkerDocument>) {}

  async create(createWorkerDto: any): Promise<Worker> {
    const createdWorker = new this.workerModel(createWorkerDto)
    return createdWorker.save()
  }

  async findAll(): Promise<Worker[]> {
    return this.workerModel.find().exec()
  }

  async findOne(id: string): Promise<Worker | null> {
    return this.workerModel.findById(id).exec()
  }

  async update(id: string, updateWorkerDto: any): Promise<Worker | null> {
    return this.workerModel.findByIdAndUpdate(id, updateWorkerDto, { new: true }).exec()
  }
}

