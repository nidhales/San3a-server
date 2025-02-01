import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import  { Model } from "mongoose"
import { Job, type JobDocument } from "./schemas/job.schema"

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

  async create(createJobDto: any): Promise<Job> {
    const createdJob = new this.jobModel(createJobDto)
    return createdJob.save()
  }

  async findAll(): Promise<Job[]> {
    return this.jobModel.find().exec()
  }

  async findOne(id: string): Promise<Job | null> {
    return this.jobModel.findById(id).exec()
  }

  async update(id: string, updateJobDto: any): Promise<Job | null> {
    return this.jobModel.findByIdAndUpdate(id, updateJobDto, { new: true }).exec()
  }
}

