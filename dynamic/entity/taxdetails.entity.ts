
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
import { Dynamic1 } from './dynamic.entity';
 



@Entity('tax_details')
export class TaxDetails {
    @PrimaryGeneratedColumn( 'increment',{
        name:"tax_id"
    })
    taxid: number;

    @Column('varchar',{
        name:"emp_tax_filenumber"
    })
    emptaxfilenumber: string;

    @Column('varchar',{
        name:"tfn_Declaration"
    })
    tfnDeclarationDate: string;

    @Column('boolean',{
        name:"threshold"
    })
    threshold: boolean;

    @Column('boolean',{
        name:"ind_tax_purpose"
    })
    indtaxpurpose: boolean;

    @Column('boolean',{
        name:"help"

        
    })
    help: boolean; 

    @Column('boolean',{
        name:"fsd"
    })
    fsd: boolean;

    @Column('varchar',{
        name:"additional_Information"
    })
    additionalInformation: string;

   
    @ManyToOne(() => Dynamic1, (taxdetails)=> taxdetails.taxdetails)
    @JoinColumn({name:'dynamic_id'})
    dynamic : any;

}