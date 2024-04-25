import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
import { Dynamic1 } from './dynamic.entity';



@Entity('employee_pay_role')
export class EmployeePayRole {
    @PrimaryGeneratedColumn('increment',{
        name:'emp_payroll_id'
    })
    empPayrollId: number;

    @Column('varchar',{
        name:'bank_account_name'
    })
    bankAccountName: string;

    @Column( 'varchar',{
        name:"bsb"

    })
    bSB: string;

    @Column('varchar',{
        name:"account_Number"
    })
    accountNumber: string;

    @Column('varchar',{
        name:"bank"
    })
    bank: string;
   
    @ManyToOne(() => Dynamic1, (employeePayrole)=> employeePayrole.employeePayrole)
    // @JoinTable()
    @JoinColumn({name:'dynamic_id'})
    dynamic : any;
    // dynamic: any;
    // @JoinTable()
    // employeepayrole :EmployeePayRole [];
    // dynamic: Dynamic;

}