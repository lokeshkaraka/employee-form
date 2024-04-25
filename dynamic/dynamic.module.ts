import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dynamic1 } from './entity/dynamic.entity';
import { DynamicService } from './dynamic.service';
import { Repository } from 'typeorm';
import { DynamicController } from './dynamic.controller';
import { EmployeePayRole } from './entity/employeePayrole.entity';
import { TaxDetails } from './entity/taxdetails.entity';
import { EmploymentDetails } from './entity/employmentdetails.entity';
import { Superannutation } from './entity/superannutation.entity';



@Module({
    imports:[TypeOrmModule.forFeature([Dynamic1,EmployeePayRole,TaxDetails,Superannutation,EmploymentDetails])],
    providers:[DynamicService, Repository],
    controllers:[DynamicController]
})
export class DynamicModule{}