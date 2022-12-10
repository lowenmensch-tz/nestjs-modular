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

import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from './../dtos/category.dtos';

@Controller('categories')
export class CategoriesController {


  constructor(private categoriesService: CategoriesService){}

  @Get()
  getCategories(){
    return this.categoriesService.findAll();
  }


  @Get(':categoryId')
  getOne(
    @Param('categoryId', ParseIntPipe) categoryId: number
  ){
    return this.categoriesService.findOne(categoryId);
  }


  @Post()
  create(@Body() payload: CreateCategoryDto){
    return this.categoriesService.create(payload);
  }


  @Put(':id')
  update(
        @Param('id', ParseIntPipe) id:number,
        @Body() payload: UpdateCategoryDto
      ){
    return this.categoriesService.update(id, payload);
  }


  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id:number){
    return this.categoriesService.remove(id);
  }
}
