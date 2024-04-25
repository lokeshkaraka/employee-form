import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
import { Dynamic1 } from './dynamic.entity';



@Entity('super_annutation')
export class Superannutation {
    @PrimaryGeneratedColumn('increment',{
        name:"super_id"
    })
    superid: number;

    @Column('varchar',{
        name:"name_of_fund"
    })
    nameofFund: string;

    @Column('varchar',{
        name:"name_of_the_Account"

    })
    nameoftheAccount: string;

    @Column('varchar',{
        name:"member_ship_Number"
    })
    membershipNumber: string;

    @Column('varchar',{
        name:"fund_cinspin"

        
    })
    fundCINSPIN: string;

    @Column('varchar',{
name:"fundBsbaccount"
    })
    fundBSBAccountnumber: string;

    @Column('varchar',{
        name:"fund_contact_details"
    })
    fundContactDetails: string;
   
    @ManyToOne(() => Dynamic1, (superannutation)=> superannutation.superannotation)
    @JoinColumn({name:'dynamic_id'})
    dynamic : any;

}