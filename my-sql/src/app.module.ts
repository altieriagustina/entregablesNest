import { User } from './Users/user.entity';
import { UserModule } from './Users/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'prueba_my_sql',
            entities: [User],
            autoLoadEntities: true,
            synchronize: true,
        }),
        UserModule,
    ],
})
export class AppModule { }