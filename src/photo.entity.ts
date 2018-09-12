import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Photo {

    @ObjectIdColumn()
    id: number;

    @Column({ type: 'text', length: 500 })
    description: string;

    @Column('text')
    captureDate: Date;
}