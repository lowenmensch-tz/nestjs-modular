import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { BrandsService } from '../services/brands.service';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';

@Controller('brands')
export class BrandsController {


  constructor(private brandsService:BrandsService){}

  @Get()
  getBrands(){
    return this.brandsService.findAll();
  }


  @Get(':brandId')
  getBrand(
      @Param('brandId', ParseIntPipe) brandId: number
    ) {
    return this.brandsService.findOne(brandId);
  }


  @Post()
  create(
      @Body() payload: CreateBrandDto
    ){
    return this.brandsService.create(payload);
  }


  @Put(':id')
  update(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: UpdateBrandDto
    ){
    return this.brandsService.update(id, payload);
  }


  @Delete(':id')
  delete(
      @Param('id', ParseIntPipe) id:number
    ){
    return this.brandsService.remove(id);
  }

}
