import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsString, Length, isAlpha } from 'class-validator';


export class TaxDetails {


    @ApiProperty()
    id: number;


    @ApiProperty()
    emptaxfilenumber: string;


    @ApiProperty()
    tfnDeclarationDate: string;


    @ApiProperty()
    threshold: string;


    @ApiProperty()
    indtaxpurpose: string;


    @ApiProperty()
    help: string;


    @ApiProperty()
    fsd: string;


    @ApiProperty()
    additionalInformation: string;

    
}