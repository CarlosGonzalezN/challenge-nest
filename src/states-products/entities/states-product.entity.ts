import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'estados' })
export class States {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_estado: string;
}
