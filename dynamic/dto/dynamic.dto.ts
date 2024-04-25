import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsString, Length, isAlpha } from 'class-validator';
import { EmployeePayRole } from "./employeePayrole.dto";
import { TaxDetails } from "./taxdetails.dto";
import { Superannutation } from "./superannotation.dto";
import { EmploymentDetails } from "./employmentdetails.dto";


export class DynamicDto {

    @ApiProperty()
    id: number;


    @ApiProperty()
    fullName: string;


    @ApiProperty()
    dateofBirth: string;


    @ApiProperty()
    emailId: string;


    @ApiProperty()
    gender: string;


    @ApiProperty()
    pinCode: string;


    @ApiProperty()
    mobileNumber: string;


    @ApiProperty()
    department: string;


    @ApiProperty()
    reportingManager: string;


    @ApiProperty()
    address: string;

    @ApiProperty({type : [EmployeePayRole]})
    payrole: EmployeePayRole[]
    @ApiProperty( {type : [TaxDetails]})
    taxdetails: TaxDetails[]
    @ApiProperty( {type : [Superannutation]})
    superannutation: Superannutation[]
    @ApiProperty( { type : [EmploymentDetails]})
    employmentdetails: EmploymentDetails[]
}


