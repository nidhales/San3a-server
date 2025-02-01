import { Controller, Get, Post, Body, Param, Put, UseGuards } from "@nestjs/common"
import { WorkersService } from "./workers.service"
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard"

@Controller("workers")
export class WorkersController {
  constructor(private workersService: WorkersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createWorkerDto: any) {
    return this.workersService.create(createWorkerDto);
  }

  @Get()
  async findAll() {
    return this.workersService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.workersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  async update(@Param('id') id: string, @Body() updateWorkerDto: any) {
    return this.workersService.update(id, updateWorkerDto)
  }
}

