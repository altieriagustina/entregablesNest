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

  getHelloService(): Promise<User[]> {
    return this.userRepository.find();
  }

  async postHelloService(newUser: User): Promise<string> {
    console.log("Nuevo usuario:", newUser);

    await this.userRepository.save(newUser);
    console.log("usuarios", await this.userRepository.find());

    return 'Usuario agregado con exito!  ✅';
  }


  // MODIFICAR

  deleteHelloService(idUser: number): string {
    const index = this.users.findIndex(user => user.id === idUser);
    if (index !== -1) {
      this.users.splice(index, 1);
      return 'Usuario eliminado con exito! ✅';
    }
    return 'Usuario no encontrado! ❌';
  }

  putHelloService(updateUser: User): string {
    const index = this.users.findIndex(user => user.id === updateUser.id);
    if (index !== -1) {
      this.users[index] = updateUser;
      return 'Usuario actualizado con exito! ✅';
    }
    return 'Usuario no encontrado! ❌';
  }

}