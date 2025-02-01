import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { WorkersService } from "./workers.service"
import { WorkersController } from "./workers.controller"
import { Worker, WorkerSchema } from "./schemas/worker.schema"

@Module({
  imports: [MongooseModule.forFeature([{ name: Worker.name, schema: WorkerSchema }])],
  providers: [WorkersService],
  controllers: [WorkersController],
  exports: [WorkersService],
})
export class WorkersModule {}

