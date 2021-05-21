import { Controller, Post, Get, Body, Res, Req, UnauthorizedException, HttpException, HttpStatus, HttpService, HttpCode } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { exception } from 'node:console';

import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(
    private httpService: HttpService,
    private readonly appService: AppService,
    private jwtService: JwtService
  ) { }

  // check credentials with students db
  // create jwt token and store it withon a cookie
  @Post('api/login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response) {
    const user = await this.appService.findIdByUsernameAndPassword({ username, password });

    if (user) {
      const payload = { id: user['id'], username: user['username'] }
      const jwt = this.jwtService.sign(payload);
      response.cookie('jwt', jwt, { httpOnly: true });
      return {
        message: 'success',
      };
    }
    return null;
  }

  // retrive current loggedin user details
  @Get('api/currentUser')
  async getUser(@Req() request: Request) {
    try {
      const cookie = await request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException('Unauthorized user!!');
      }
      const userId = data['id'];
      // console.log(userId);
      
      const user = await this.appService.findStudentById(userId);
      return user;
    } catch (e) {
      throw new UnauthorizedException('Unauthorized user!!');
    }
  }

  // logging out user
  @Post('api/logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
    return {
      message: 'success',
    };
  }

}
