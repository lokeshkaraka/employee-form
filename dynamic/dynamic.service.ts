import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Dynamic1 } from'./entity/dynamic.entity';
import { DynamicDto } from './dto/dynamic.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeePayRole } from "./entity/employeePayrole.entity";
import { TaxDetails } from "./entity/taxdetails.entity";
import { Superannutation } from "./entity/superannutation.entity";
import { EmploymentDetails } from "./entity/employmentdetails.entity";

@Injectable()
export class DynamicService {

    constructor(

        @InjectRepository(Dynamic1)
        private readonly dynamicRepository: Repository<Dynamic1>,
        

        @InjectRepository(EmployeePayRole)
        private readonly employeePayroleRepository: Repository<EmployeePayRole>,
        

        @InjectRepository(TaxDetails)
        private readonly taxdetailsRepository: Repository<TaxDetails>, 


        @InjectRepository(Superannutation)
        private readonly superannutationRepository: Repository<Superannutation>,


        @InjectRepository(EmploymentDetails)
        private readonly employmentdetailsRepository: Repository<EmploymentDetails>,
        
         
        ) {}
        async create(createdDto : DynamicDto):Promise<any>{
         console.log(createdDto,'createddto')
            const entityObj = new Dynamic1()
            entityObj.address = createdDto.address
            entityObj.reportingManager = createdDto.reportingManager
            entityObj.department= createdDto.department
            entityObj.mobileNumber=createdDto.mobileNumber
            entityObj.pinCode=createdDto.pinCode
            entityObj.gender=createdDto.gender
            entityObj.dateofBirth=createdDto.dateofBirth
            entityObj.fullName=createdDto.fullName
            entityObj.emailId=createdDto.emailId

            console.log(createdDto.payrole,'===========')
            const payrollArray = []

            for(const rec of createdDto.payrole){
               const payrollObj = new EmployeePayRole()
               payrollObj.accountNumber = rec.accountNumber
               payrollObj.bankAccountName=rec.bankAccountName
               payrollObj.bSB=rec.bSB
               payrollObj.bank=rec.bank
               payrollArray.push(payrollObj)
            }
            entityObj.employeePayrole = payrollArray
         


          
            const empDetailsArray = []
            for(const rec of createdDto.employmentdetails){
               const empDetailsObj = new EmploymentDetails()
               empDetailsObj.employeeName=rec.employeeName
               empDetailsObj.position=rec.position
               empDetailsObj.salaryFTE=rec.salaryFTE
               empDetailsObj.fundContactDetails=rec.fundContactDetails
               empDetailsObj.fundBSBAccountnumber=rec.fundBSBAccountnumber
               empDetailsArray.push(empDetailsObj)
   
            }
            entityObj.employmentdetails = empDetailsArray






            const taxdetailsArray=[]
                  for(const rec of createdDto.taxdetails){
                     const taxdetailsobj = new TaxDetails()
                     taxdetailsobj.additionalInformation=rec.additionalInformation
                     taxdetailsobj.emptaxfilenumber=rec.emptaxfilenumber
                     taxdetailsobj.tfnDeclarationDate=rec.tfnDeclarationDate
                     taxdetailsobj.threshold=rec.threshold == 'true';
                     taxdetailsobj.indtaxpurpose=rec.indtaxpurpose == 'true';
                     taxdetailsobj.fsd=rec.fsd == 'true';
                     taxdetailsobj.help=rec.help == 'true';
                     taxdetailsArray.push(taxdetailsobj)
         
                  }
                  entityObj.taxdetails=taxdetailsArray





                  const superannotationArray=[]
                        for(const rec of createdDto.superannutation){
                           const superannotationobj = new Superannutation()
                           superannotationobj.nameofFund=rec.nameofFund
                           superannotationobj.nameoftheAccount= rec.nameofFund
                           superannotationobj.membershipNumber= rec.membershipNumber
                           superannotationobj.fundCINSPIN= rec.fundCINSPIN
                           superannotationobj.fundBSBAccountnumber= rec.fundBSBAccountnumber
                           superannotationobj.fundContactDetails=rec.fundContactDetails
                           superannotationArray.push(superannotationobj)
                        }
                        entityObj.superannotation=superannotationArray


                        const save = await this.dynamicRepository.save(entityObj)




        }

      //   async create (createdDto:DynamicDto): Promise<any>{
           
      //    //   try {
      //       console.log(createdDto,'------------')
      //       const entityObj = new Dynamic()
      //       entityObj.address = createdDto.address
      //       entityObj.reportingManager = createdDto.reportingManager
      //       entityObj.department= createdDto.department
      //       entityObj.mobileNumber=createdDto.mobileNumber
      //       entityObj.pinCode=createdDto.pinCode
      //       entityObj.gender=createdDto.gender
      //       entityObj.dateofBirth=createdDto.dateofBirth
      //       entityObj.fullName=createdDto.fullName
      //       entityObj.emailId=createdDto.emailId
   
   
   
      //       const payrollArray = []
      //       for(const rec of createdDto.payrole){
      //          const payrollObj = new EmployeePayRole()
      //          payrollObj.accountNumber = rec.accountNumber
      //          payrollObj.bankAccountName=rec.bankAccountName
      //          payrollObj.bSB=rec.bSB
      //          payrollObj.bank=rec.bank
      //          payrollArray.push(payrollObj)
      //       }
      //       entityObj.employeePayrole = payrollArray
   
   
   
   
      //       const empDetailsArray = []
      //       for(const rec of createdDto.employmentdetails){
      //          const empDetailsObj = new EmploymentDetails()
      //          empDetailsObj.employeeName=rec.employeeName
      //          empDetailsObj.position=rec.position
      //          empDetailsObj.salaryFTE=rec.salaryFTE
      //          empDetailsObj.fundContactDetails=rec.fundContactDetails
      //          empDetailsObj.fundBSBAccountnumber=rec.fundBSBAccountnumber
      //          empDetailsArray.push(empDetailsObj)
   
      //       }
      //       entityObj.employmentdetails = empDetailsArray
   
   
   
   
      //       const taxdetailsArray=[]
      //       for(const rec of createdDto.taxdetails){
      //          const taxdetailsobj = new TaxDetails()
      //          taxdetailsobj.additionalInformation=rec.additionalInformation
      //          taxdetailsobj.emptaxfilenumber=rec.emptaxfilenumber
      //          taxdetailsobj.tfnDeclarationDate=rec.tfnDeclarationDate
      //          taxdetailsArray.push(taxdetailsobj)
   
      //       }
      //       entityObj.taxdetails=taxdetailsArray
   
   
   
   
   
   
      //       const superannotationArray=[]
      //       for(const rec of createdDto.superannutation){
      //          const superannotationobj = new Superannutation()
      //          superannotationobj.nameofFund=rec.nameofFund
      //          superannotationobj.nameoftheAccount= rec.nameofFund
      //          superannotationobj.membershipNumber= rec.membershipNumber
      //          superannotationobj.fundCINSPIN= rec.fundCINSPIN
      //          superannotationobj.fundBSBAccountnumber= rec.fundBSBAccountnumber
      //          superannotationobj.fundContactDetails=rec.fundContactDetails
      //          superannotationArray.push(superannotationobj)
      //       }
      //       entityObj.superannotation=superannotationArray



      //       console.log(entityObj,'==================')
      //       const savedEntity = await this.dynamicRepository.save(entityObj);
      //   return savedEntity;
      //       // const newEntity = await this.dynamicRepository.save(entityObj);
      //       // // return this.dynamicRepository.save(newEntity)
      //       // return newEntity;
      // //   } catch (error) {
      // //       // Log the error for further investigation
      // //       console.error('Error creating dynamic entity:', error);
      // //       throw new BadRequestException('Failed to create dynamic entity');
      // //   }
         
            
      //   }

        
   //      async createInfo (createdDto:DynamicDto): Promise<any>{
   //       const entityObj = new Dynamic()
   //       entityObj.address = createdDto.address
   //       entityObj.reportingManager = createdDto.reportingManager
   //       const save = await this.dynamicRepository.save(entityObj)
   //       for(const rec of createdDto.payrole){
   //          const payrollObj = new EmployeePayRole()
   //          payrollObj.accountNumber = rec.accountNumber
   //          const dynamicObj = new Dynamic()
   //          dynamicObj.dynamicid = save.dynamicid
   //          payrollObj.dynamic = dynamicObj  
   //          // payrollObj.dynamic = save.id
            
   //          const savePayroll = await this.employeePayroleRepository.save(payrollObj)
   //       }
         
            
   //      }

     



   // //      async userdata(DynamicDto: any): Promise<any> {
   // //          const dynamic = await this.dynamicRepository.save(DynamicDto.dynamic);
   // //                console.log(dynamic)
   // //               const id = dynamic.id
                 
   // //               for (const data of DynamicDto.payrole) 

   // //               {
   // //                  data.dynamic = id
   // //                  console.log(data,'------data')
   // //                  const payrole = await this.employeePayroleRepository.save(data);
   // //               }

   // //               for (const data of DynamicDto.taxdetails)

   // //               {
   // //                  data.dynamic = id
   // //                  console.log(data,'-----data')
   // //                  const taxdetails = await this.taxdetailsRepository.save(data);
   // //               }

   // //               for (const data of DynamicDto.superannutation)

   // //               {
   // //                  data.dynamic = id
   // //                  console.log(data,'-----data')
   // //                  const superannutation = await this.superannutationRepository.save(data);  
   // //               }
                 

   // //               for (const data of DynamicDto.employmentdetails)

   // //               {
   // //                  data.dynamic = id
   // //                  console.log(data,'-----data')
   // //                  const employmentdetails = await this.employmentdetailsRepository.save(data);
   // //               }

   // //               return dynamic;
   // //      }
    } 

    