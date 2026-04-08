import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Param } from '@nestjs/common';
import { User } from './user.entity';


@Controller('/usuarios')
export class UserController {
  
  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  @Get()//obtener
  getHelloController(): Promise<User[]> {
    return this.userService.getHelloService();
  }

  @Post()//agregar
  postHelloController(@Body() newUser: User): Promise<string> {
    return this.userService.postHelloService(newUser);
  }

  @Delete(':id')//eliminar
  deleteHelloController(@Param('id') idUser: number): string {
    return this.userService.deleteHelloService(Number(idUser)); //convierte el parámetro a número antes de pasarlo al servicio
  }

  @Put(':id')//modificar
  putHelloController(@Param('id') idUser: number, @Body() updateUser: User): string {
    return this.userService.putHelloService(updateUser);
  }
}