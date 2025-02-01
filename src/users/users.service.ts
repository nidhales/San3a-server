import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(username: string, password: string, role: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new this.userModel({ username, password: hashedPassword, role });
    return createdUser.save();
  }

  async findOne(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }).exec();
  }
}