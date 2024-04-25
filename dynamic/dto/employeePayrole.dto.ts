
import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsString, Length, isAlpha } from 'class-validator';


export class EmployeePayRole {


    @ApiProperty()
    id: number;


    @ApiProperty()
    bankAccountName: string;


    @ApiProperty()
    bSB: string;


    @ApiProperty()
    accountNumber: string;


    @ApiProperty()
    bank: string;

    
}
