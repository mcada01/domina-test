import { Task } from 'src/task/task.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany(() => Task, task => task.user)
    tasks: Task[];

    async setPassword(password: string): Promise<void> {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
    }

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}
