import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/users.interface';
import { resolve } from 'node:path/win32';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }
  //username/ pass là 2 tham số thư viện passport ném về
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      const isValid = this.usersService.isValidPassword(pass, user.password);
      if (isValid === true) {
        return user;
      }
    }
    return null;
  }


  async login(user: IUser) {
    const {_id, name, email,role} = user;
    const payload = {
      sub: "token login",
      iss: "from server",
      _id,
      name,
      email, 
      role
    }
    return {
      access_token: this.jwtService.sign(payload),
      _id,
      name,
      email, 
      role
    };
  }
}
