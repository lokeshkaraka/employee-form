import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, JoinTable } from 'typeorm';
import { EmployeePayRole } from './employeePayrole.entity';
import { Superannutation } from './superannutation.entity';
import { TaxDetails } from './taxdetails.entity';
import { EmploymentDetails } from './employmentdetails.entity';



@Entity()
export class Dynamic1 {
   
    @PrimaryGeneratedColumn( 'increment',{
        name : "dynamic_id"
    })
    dynamicid: number;

    @Column('varchar',{
        name:"full_name"
    })
    fullName: string;

    @Column('varchar',{
        name:"date_of_birth"
    })
    dateofBirth: string;



    @Column('varchar',{
        name:"email_id"
    })
    emailId: string;



    @Column('varchar',{
        name:"gender"
    })
    gender: string;



    @Column('varchar',{
        name:"pincode"
    }
    )
    pinCode: string;



    @Column('varchar',{
        name:"mobile_number"
    })
    mobileNumber: string;



    @Column('varchar',{
        name:"department"
    })
    department: string;



    @Column('varchar',{
        name:"reporting_manger"
    })
    reportingManager: string;



    @Column('varchar',{
        name:"address"
    })
    address: string;

    

    @OneToMany(() => EmployeePayRole, (employeePayrole)=> employeePayrole.dynamic,{cascade: true})
    // @JoinTable()
    employeePayrole: EmployeePayRole[];
 

    @OneToMany(() => TaxDetails, (taxdetails)=> taxdetails.dynamic,{cascade: true})
    // @JoinTable()
    taxdetails: TaxDetails[];


    @OneToMany(() => Superannutation, (superannutation)=> superannutation.dynamic,{cascade: true})
    // @JoinTable()
    superannotation: Superannutation[];


    @OneToMany(() => EmploymentDetails, (employmentdetails)=> employmentdetails.dynamic,{cascade: true})
    // @JoinTable()
    employmentdetails: EmploymentDetails[];


    

}
