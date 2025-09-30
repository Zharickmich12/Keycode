import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from 'src/interfaces';

@Injectable()
export class UsersService {
    
    private users: IUser[] = [
        { id: 1, name: 'Elena', email: 'elena@gmail.com', password: '123' },
        { id: 2, name: 'Jefferson', email: 'pulido@gmail.com', password: 'asd123', age: 23 }
    ]

    findAll(): IUser[] {
        return this.users
    }

    findOne(id: number): IUser {
        const userFind = this.users.find((user) => user.id === id)
        if (!userFind) throw new NotFoundException('Usuario no encontrado')
        return userFind
    }
}
