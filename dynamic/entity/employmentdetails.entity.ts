import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
import { Dynamic1 } from './dynamic.entity';



@Entity('employment_details')
export class EmploymentDetails {
    @PrimaryGeneratedColumn( 'increment',{
        name :"emp_det_id"

    } )
    empdetid: number;

    @Column('varchar',{
        name:"employee_name"
    })
    employeeName: string;

    @Column('varchar',{
        name:"position"
    })
    position: string;

    // @Column('varchar',{
    //     name:"start_date"
    // })
    // startDate: string;

    @Column('varchar',{
        name:"salary_fte"
    })
    salaryFTE: string;

    @Column( 'varchar',{
        name:"fund_bsb_account_number"
    })
    fundBSBAccountnumber: string;

    @Column('varchar',{
        name:"fund_contact_Deatails"
        
    })
    fundContactDetails: string;
   
    @ManyToOne(() => Dynamic1, (employmentdetails)=> employmentdetails.employmentdetails)

    @JoinColumn({name:'dynamic_id'})
    dynamic : any;

}