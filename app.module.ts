import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamicModule } from './dynamic/dynamic.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dynamic1 } from './dynamic/entity/dynamic.entity';
import { EmployeePayRole } from './dynamic/entity/employeePayrole.entity';
import { TaxDetails } from './dynamic/entity/taxdetails.entity';
import { Superannutation } from './dynamic/entity/superannutation.entity';
import { EmploymentDetails } from './dynamic/entity/employmentdetails.entity';
import { DynamicController } from './dynamic/dynamic.controller';
import { DynamicService } from './dynamic/dynamic.service';



@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'rummy',
    entities: [Dynamic1,EmployeePayRole,TaxDetails,Superannutation,EmploymentDetails],
    synchronize: true,
  }), 
  DynamicModule,
], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
