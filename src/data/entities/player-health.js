import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity
export class PlayerHealth extends BaseEntity {
    @PrimaryGeneratedColumn
    id!: string;
    @Column
    player!: string;
    @Column
    team!: string;
    @Column
    position!: string;
    @Column
    year!: string;
    @Column
    injury!: string;
    @Column
    injurySummary!: string;
    @Column
    medicalTerminology!: string;
    @Column
    playerInjuryScore!: string;
    @Column
    estReturnWeeks!: string;
    @Column
    estReturnMinDate!: string;
    @Column
    estReturnMaxDate!: string;
    @Column
    source!: string;
    @Column
    changeFromLastWeek!: string;
    //outageByDay: { type: new GraphQLList(GraphQLString) }
}