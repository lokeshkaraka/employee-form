
import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsString, Length, isAlpha } from 'class-validator';


export class EmploymentDetails {


    @ApiProperty()
    id: number;


    @ApiProperty()
    employeeName: string;


    @ApiProperty()
    position: string;


    // @ApiProperty()
    // startDate: string;


    @ApiProperty()
    salaryFTE: string;


    @ApiProperty()
    fundBSBAccountnumber: string;


    @ApiProperty()
    fundContactDetails: string;

    
}