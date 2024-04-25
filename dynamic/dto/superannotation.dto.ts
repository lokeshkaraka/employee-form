import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsString, Length, isAlpha } from 'class-validator';


export class Superannutation {


    @ApiProperty()
    id: number;


    @ApiProperty()
    nameofFund: string;


    @ApiProperty()
    nameoftheAccount: string;


    @ApiProperty()
    membershipNumber: string;


    @ApiProperty()
    fundCINSPIN: string;


    @ApiProperty()
    fundBSBAccountnumber: string;


    @ApiProperty()
    fundContactDetails: string;
    
}