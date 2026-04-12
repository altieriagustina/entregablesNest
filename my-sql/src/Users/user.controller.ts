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
  getUsers(): Promise<User[]> {
    return this.userService.getUsersService();
  }

  @Post()//agregar
  postUsers(@Body() newUser: User): Promise<string> {
    return this.userService.postUsersService(newUser);
  }

  @Delete(':id')//eliminar
  deleteUsers(@Param('id') idUser: number): Promise<string> {
    return this.userService.deleteUsersService(Number(idUser)); //convierte el parámetro a número antes de pasarlo al servicio
  }

  @Put(':id')//modificar
  putUsers(@Param('id') idUser: number, @Body() updateUser: User): Promise<string> {
    updateUser.id = Number(idUser); // Asegura que el ID del usuario a actualizar sea el mismo que el ID proporcionado en la URL
    return this.userService.putUsersService(updateUser);
  }
}