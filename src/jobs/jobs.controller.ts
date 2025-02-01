import { Controller, Get, Post, Body, Param, Put, UseGuards } from "@nestjs/common"
import  { JobsService } from "./jobs.service"
import { JwtAuthGuard } from "../auth//jwt/jwt-auth.guard"

@Controller("jobs")
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createJobDto: any) {
    return this.jobsService.create(createJobDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.jobsService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.jobsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  async update(@Param('id') id: string, @Body() updateJobDto: any) {
    return this.jobsService.update(id, updateJobDto)
  }
}

