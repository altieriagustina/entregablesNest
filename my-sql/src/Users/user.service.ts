import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  private users: User[] = [
    { id: 1, name: 'Agus Altieri', age: 39 },
    { id: 2, name: 'Juan Pérez', age: 32 },
    { id: 3, name: 'Bob Esponja', age: 18 },
  ];

  constructor(@InjectRepository(User)
  private userRepository: Repository<User>,
) { }

  getUsersService(): Promise<User[]> {
    return this.userRepository.find();
  }

  async postUsersService(newUser: User): Promise<string> {
    console.log("Nuevo usuario:", newUser);

    await this.userRepository.save(newUser);
    console.log("usuarios", await this.userRepository.find());

    return 'Usuario agregado con exito!  ✅';
  }


  // BORRAR

  async deleteUsersService(idUser: number): Promise<string> {
    const user = await this.userRepository.findOne({ where: { id: idUser } });
    if (user) {
      await this.userRepository.remove(user);
      return 'Usuario eliminado con exito! ✅';
    }
    return 'Usuario no encontrado! ❌';
  }

  // MODIFICAR

  async putUsersService(updateUser: User): Promise<string> {
    const user = await this.userRepository.findOne({ where: { id: updateUser.id } });
    if (user) {
      await this.userRepository.save(updateUser);
      return 'Usuario actualizado con exito! ✅';
    }
    return 'Usuario no encontrado! ❌';
  }

}