import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { WorkersModule } from "./workers/workers.module";
import { JobsModule } from "./jobs/jobs.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/workmanship"),
    AuthModule,
    UsersModule,
    WorkersModule,
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}