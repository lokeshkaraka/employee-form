import { BadRequestException, Body, ConflictException, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Patch, Post, Put, Req, Res } from "@nestjs/common";
import { DynamicService } from "./dynamic.service";
import { DynamicDto } from "./dto/dynamic.dto";
import { ApiResponse } from "./interface/dynamic.interface";
import { Dynamic1 } from "./entity/dynamic.entity";
import { ApiTags } from "@nestjs/swagger"; 

// @ApiTags('dynamic')
@Controller('dynamic')
export class DynamicController {
    constructor(private readonly dynamicService: DynamicService){}

    @Post()
    async create(@Body() dynamicdto:any){
      console.log(dynamicdto,'--------');

      try{
        return await this.dynamicService.create(dynamicdto.values);

      }catch(error){
        throw error
      }
  
    }
    // @Post('getData')
    // findAll() {
    //     return this.dynamicService.getdata();
    // }
    // @Get('getdata/:id')
    // show(@Param('id', ParseIntPipe) id:number) {
    //     return this.dynamicService.show(id);
    // }

    // @Delete('deletedata/:id')
    // remove(@Param('id', ParseIntPipe) id:number){
    //     this.dynamicService.remove(id);
    // }


    // @Patch('editdata/:id')
    // async editData(
    //     @Body() data: Dynamic,
    //     @Param('id') id: number,
    // ) : Promise<any> {
    //     const dataEdited = await this.dynamicService.editData(data, id);
    //     return dataEdited;
    // }
}




