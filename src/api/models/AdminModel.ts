import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity,PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { IsEmail, IsNotEmpty } from "class-validator";
import { Exclude } from "class-transformer";
import * as bcrypt from 'bcrypt';

@Entity({name:'admin'})
@Unique(['email'])
export class AdminModel extends BaseEntity {

    public static hashPassword(password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    }

    public static comparePassword(user: AdminModel, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                resolve(res === true);
            });
        });
    }

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column({ name: 'title' })
    public title: string;

    @IsNotEmpty()
    @IsEmail()
    @Column({ name: 'email' })
    public email: string;
 
    @IsNotEmpty()
    @Column({ name: 'password' })
    public password: string;

    @IsNotEmpty()
    @Column({ name: 'publishing_year' })
    public publishingYear: string;

    @IsNotEmpty()
    @Column({ name: 'file' })
    public file: string;

    @Exclude()
    @Exclude({ toClassOnly: true })
    @DeleteDateColumn({ name: 'deleted_at' })
    public readonly deletedAt?: Date;

    @Exclude({ toClassOnly: true })
    @CreateDateColumn({ name: 'created_at' })
    public readonly createdAt: Date;

    @Exclude({ toClassOnly: true })
    @UpdateDateColumn({ name: 'updated_at' })
    public readonly updatedAt: Date;

}
