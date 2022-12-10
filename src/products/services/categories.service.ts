import { Injectable, NotFoundException } from '@nestjs/common';

import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';

@Injectable()
export class CategoriesService {

  private counterId = 1;
  private categories: Category[] = [
    {
      "id": 1,
      "name": "Sales",
      "description": "Computers",
      "image": "https://cbslocal.com/turpis/nec/euismod/scelerisque/quam/turpis.png?vel=augue&nisl=quam&duis=sollicitudin&ac=vitae&nibh=consectetuer&fusce=eget&lacus=rutrum&purus=at&aliquet=lorem&at=integer&feugiat=tincidunt&non=ante&pretium=vel&quis=ipsum&lectus=praesent&suspendisse=blandit&potenti=lacinia&in=erat&eleifend=vestibulum&quam=sed&a=magna&odio=at&in=nunc&hac=commodo&habitasse=placerat&platea=praesent&dictumst=blandit&maecenas=nam&ut=nulla&massa=integer&quis=pede&augue=justo&luctus=lacinia&tincidunt=eget&nulla=tincidunt&mollis=eget&molestie=tempus&lorem=vel&quisque=pede&ut=morbi&erat=porttitor&curabitur=lorem&gravida=id&nisi=ligula&at=suspendisse&nibh=ornare&in=consequat&hac=lectus&habitasse=in&platea=est&dictumst=risus&aliquam=auctor&augue=sed&quam=tristique&sollicitudin=in&vitae=tempus&consectetuer=sit&eget=amet&rutrum=sem&at=fusce&lorem=consequat&integer=nulla&tincidunt=nisl&ante=nunc&vel=nisl&ipsum=duis&praesent=bibendum&blandit=felis&lacinia=sed&erat=interdum"
    }, {
      "id": 2,
      "name": "Sales",
      "description": "Industrial",
      "image": "http://mapy.cz/gravida/nisi/at.aspx?erat=viverra&eros=pede&viverra=ac&eget=diam&congue=cras&eget=pellentesque&semper=volutpat&rutrum=dui&nulla=maecenas&nunc=tristique&purus=est&phasellus=et&in=tempus&felis=semper&donec=est&semper=quam&sapien=pharetra&a=magna&libero=ac&nam=consequat&dui=metus&proin=sapien&leo=ut&odio=nunc&porttitor=vestibulum&id=ante&consequat=ipsum&in=primis&consequat=in&ut=faucibus&nulla=orci&sed=luctus&accumsan=et&felis=ultrices&ut=posuere&at=cubilia&dolor=curae&quis=mauris&odio=viverra&consequat=diam&varius=vitae&integer=quam&ac=suspendisse&leo=potenti&pellentesque=nullam"
    }, {
      "id": 3,
      "name": "Accounting",
      "description": "Automotive",
      "image": "http://irs.gov/a/nibh/in/quis/justo/maecenas/rhoncus.json?velit=nullam&id=molestie&pretium=nibh&iaculis=in&diam=lectus&erat=pellentesque&fermentum=at&justo=nulla&nec=suspendisse&condimentum=potenti&neque=cras&sapien=in&placerat=purus&ante=eu&nulla=magna&justo=vulputate&aliquam=luctus&quis=cum&turpis=sociis&eget=natoque&elit=penatibus&sodales=et&scelerisque=magnis&mauris=dis&sit=parturient&amet=montes&eros=nascetur&suspendisse=ridiculus&accumsan=mus&tortor=vivamus&quis=vestibulum&turpis=sagittis&sed=sapien&ante=cum&vivamus=sociis&tortor=natoque&duis=penatibus&mattis=et&egestas=magnis&metus=dis&aenean=parturient&fermentum=montes&donec=nascetur&ut=ridiculus&mauris=mus&eget=etiam&massa=vel&tempor=augue&convallis=vestibulum&nulla=rutrum&neque=rutrum&libero=neque&convallis=aenean&eget=auctor&eleifend=gravida&luctus=sem&ultricies=praesent&eu=id&nibh=massa&quisque=id&id=nisl&justo=venenatis&sit=lacinia&amet=aenean&sapien=sit&dignissim=amet&vestibulum=justo&vestibulum=morbi&ante=ut&ipsum=odio&primis=cras&in=mi&faucibus=pede&orci=malesuada&luctus=in&et=imperdiet&ultrices=et&posuere=commodo&cubilia=vulputate"
    }, {
      "id": 4,
      "name": "Support",
      "description": "Tools",
      "image": "http://tumblr.com/in/porttitor/pede/justo/eu/massa/donec.jsp?commodo=metus&placerat=aenean&praesent=fermentum&blandit=donec&nam=ut&nulla=mauris&integer=eget&pede=massa&justo=tempor&lacinia=convallis&eget=nulla&tincidunt=neque&eget=libero&tempus=convallis&vel=eget&pede=eleifend&morbi=luctus&porttitor=ultricies&lorem=eu&id=nibh&ligula=quisque&suspendisse=id&ornare=justo&consequat=sit&lectus=amet&in=sapien&est=dignissim&risus=vestibulum&auctor=vestibulum&sed=ante&tristique=ipsum&in=primis&tempus=in&sit=faucibus&amet=orci&sem=luctus&fusce=et&consequat=ultrices&nulla=posuere&nisl=cubilia&nunc=curae&nisl=nulla&duis=dapibus&bibendum=dolor&felis=vel&sed=est&interdum=donec&venenatis=odio&turpis=justo&enim=sollicitudin&blandit=ut&mi=suscipit&in=a&porttitor=feugiat&pede=et&justo=eros&eu=vestibulum&massa=ac&donec=est&dapibus=lacinia&duis=nisi&at=venenatis&velit=tristique&eu=fusce&est=congue&congue=diam&elementum=id&in=ornare&hac=imperdiet&habitasse=sapien&platea=urna&dictumst=pretium&morbi=nisl&vestibulum=ut&velit=volutpat&id=sapien&pretium=arcu"
    }, {
      "id": 5,
      "name": "Research and Development",
      "description": "Movies",
      "image": "http://microsoft.com/scelerisque/quam/turpis.json?sapien=rutrum&quis=at&libero=lorem&nullam=integer&sit=tincidunt&amet=ante&turpis=vel&elementum=ipsum&ligula=praesent&vehicula=blandit&consequat=lacinia&morbi=erat&a=vestibulum&ipsum=sed&integer=magna&a=at&nibh=nunc&in=commodo&quis=placerat&justo=praesent&maecenas=blandit&rhoncus=nam&aliquam=nulla&lacus=integer&morbi=pede&quis=justo&tortor=lacinia&id=eget&nulla=tincidunt&ultrices=eget&aliquet=tempus&maecenas=vel&leo=pede&odio=morbi&condimentum=porttitor&id=lorem&luctus=id&nec=ligula&molestie=suspendisse&sed=ornare&justo=consequat&pellentesque=lectus&viverra=in&pede=est&ac=risus&diam=auctor&cras=sed&pellentesque=tristique&volutpat=in&dui=tempus&maecenas=sit&tristique=amet&est=sem&et=fusce&tempus=consequat&semper=nulla&est=nisl&quam=nunc&pharetra=nisl&magna=duis&ac=bibendum&consequat=felis&metus=sed&sapien=interdum&ut=venenatis&nunc=turpis&vestibulum=enim&ante=blandit&ipsum=mi&primis=in&in=porttitor&faucibus=pede&orci=justo&luctus=eu&et=massa&ultrices=donec&posuere=dapibus&cubilia=duis&curae=at&mauris=velit&viverra=eu&diam=est&vitae=congue&quam=elementum&suspendisse=in&potenti=hac"
    }, {
      "id": 6,
      "name": "Business Development",
      "description": "Sports",
      "image": "https://meetup.com/enim/leo/rhoncus/sed.html?curabitur=magna&in=ac&libero=consequat&ut=metus&massa=sapien&volutpat=ut&convallis=nunc&morbi=vestibulum&odio=ante&odio=ipsum&elementum=primis&eu=in&interdum=faucibus&eu=orci&tincidunt=luctus&in=et&leo=ultrices&maecenas=posuere&pulvinar=cubilia&lobortis=curae&est=mauris&phasellus=viverra&sit=diam&amet=vitae&erat=quam&nulla=suspendisse&tempus=potenti&vivamus=nullam&in=porttitor&felis=lacus&eu=at&sapien=turpis&cursus=donec&vestibulum=posuere&proin=metus&eu=vitae&mi=ipsum&nulla=aliquam&ac=non&enim=mauris&in=morbi&tempor=non&turpis=lectus&nec=aliquam&euismod=sit&scelerisque=amet&quam=diam&turpis=in&adipiscing=magna&lorem=bibendum&vitae=imperdiet&mattis=nullam&nibh=orci&ligula=pede&nec=venenatis&sem=non&duis=sodales&aliquam=sed&convallis=tincidunt&nunc=eu&proin=felis&at=fusce&turpis=posuere&a=felis&pede=sed&posuere=lacus&nonummy=morbi&integer=sem&non=mauris&velit=laoreet&donec=ut&diam=rhoncus&neque=aliquet&vestibulum=pulvinar&eget=sed&vulputate=nisl&ut=nunc&ultrices=rhoncus&vel=dui&augue=vel&vestibulum=sem&ante=sed&ipsum=sagittis&primis=nam&in=congue&faucibus=risus&orci=semper&luctus=porta&et=volutpat&ultrices=quam&posuere=pede&cubilia=lobortis&curae=ligula&donec=sit&pharetra=amet&magna=eleifend&vestibulum=pede"
    }, {
      "id": 7,
      "name": "Training",
      "description": "Jewelry",
      "image": "https://google.pl/eleifend/donec/ut/dolor/morbi/vel/lectus.js?varius=nulla&nulla=ut&facilisi=erat&cras=id&non=mauris&velit=vulputate&nec=elementum&nisi=nullam&vulputate=varius&nonummy=nulla&maecenas=facilisi&tincidunt=cras&lacus=non&at=velit&velit=nec&vivamus=nisi&vel=vulputate&nulla=nonummy&eget=maecenas&eros=tincidunt&elementum=lacus&pellentesque=at&quisque=velit&porta=vivamus&volutpat=vel&erat=nulla&quisque=eget&erat=eros&eros=elementum&viverra=pellentesque&eget=quisque&congue=porta&eget=volutpat&semper=erat&rutrum=quisque&nulla=erat&nunc=eros&purus=viverra&phasellus=eget&in=congue&felis=eget&donec=semper&semper=rutrum&sapien=nulla&a=nunc&libero=purus&nam=phasellus&dui=in&proin=felis&leo=donec&odio=semper&porttitor=sapien&id=a&consequat=libero&in=nam&consequat=dui&ut=proin&nulla=leo&sed=odio&accumsan=porttitor&felis=id&ut=consequat&at=in&dolor=consequat&quis=ut&odio=nulla&consequat=sed&varius=accumsan&integer=felis&ac=ut&leo=at&pellentesque=dolor&ultrices=quis&mattis=odio&odio=consequat&donec=varius&vitae=integer&nisi=ac&nam=leo&ultrices=pellentesque"
    }, {
      "id": 8,
      "name": "Accounting",
      "description": "Shoes",
      "image": "http://archive.org/suspendisse/ornare/consequat/lectus/in/est/risus.png?maecenas=ultricies&ut=eu&massa=nibh&quis=quisque&augue=id&luctus=justo&tincidunt=sit&nulla=amet&mollis=sapien&molestie=dignissim&lorem=vestibulum&quisque=vestibulum&ut=ante&erat=ipsum&curabitur=primis&gravida=in&nisi=faucibus&at=orci&nibh=luctus&in=et&hac=ultrices&habitasse=posuere&platea=cubilia&dictumst=curae&aliquam=nulla&augue=dapibus&quam=dolor&sollicitudin=vel&vitae=est&consectetuer=donec&eget=odio&rutrum=justo&at=sollicitudin&lorem=ut&integer=suscipit"
    }, {
      "id": 9,
      "name": "Training",
      "description": "Outdoors",
      "image": "https://hibu.com/faucibus.png?morbi=eget&vel=massa&lectus=tempor&in=convallis&quam=nulla&fringilla=neque&rhoncus=libero&mauris=convallis&enim=eget&leo=eleifend&rhoncus=luctus&sed=ultricies&vestibulum=eu&sit=nibh&amet=quisque&cursus=id&id=justo&turpis=sit&integer=amet&aliquet=sapien&massa=dignissim&id=vestibulum&lobortis=vestibulum"
    }, {
      "id": 10,
      "name": "Services",
      "description": "Books",
      "image": "http://ask.com/ultrices/enim.jsp?at=odio&feugiat=justo&non=sollicitudin&pretium=ut&quis=suscipit&lectus=a&suspendisse=feugiat&potenti=et&in=eros&eleifend=vestibulum&quam=ac&a=est&odio=lacinia&in=nisi&hac=venenatis&habitasse=tristique&platea=fusce&dictumst=congue&maecenas=diam&ut=id&massa=ornare&quis=imperdiet&augue=sapien&luctus=urna&tincidunt=pretium&nulla=nisl&mollis=ut&molestie=volutpat&lorem=sapien&quisque=arcu&ut=sed&erat=augue&curabitur=aliquam&gravida=erat&nisi=volutpat&at=in&nibh=congue&in=etiam&hac=justo&habitasse=etiam&platea=pretium&dictumst=iaculis&aliquam=justo&augue=in&quam=hac&sollicitudin=habitasse&vitae=platea&consectetuer=dictumst&eget=etiam&rutrum=faucibus&at=cursus&lorem=urna&integer=ut&tincidunt=tellus&ante=nulla&vel=ut&ipsum=erat&praesent=id&blandit=mauris&lacinia=vulputate&erat=elementum&vestibulum=nullam&sed=varius&magna=nulla&at=facilisi&nunc=cras&commodo=non&placerat=velit&praesent=nec&blandit=nisi&nam=vulputate&nulla=nonummy&integer=maecenas&pede=tincidunt&justo=lacus&lacinia=at&eget=velit&tincidunt=vivamus&eget=vel&tempus=nulla&vel=eget&pede=eros&morbi=elementum&porttitor=pellentesque&lorem=quisque&id=porta&ligula=volutpat&suspendisse=erat&ornare=quisque&consequat=erat&lectus=eros&in=viverra&est=eget&risus=congue&auctor=eget&sed=semper"
    }
  ];

  findAll(){
    console.log(this.categories);
    return this.categories;
  }


  findOne(id: number){

    const category = this.categories.find((item)=> item.id === id);

    if (!category) {
      throw new NotFoundException(`Category ${id} not found`);
    }

    return category;
  }


  create(payload: CreateCategoryDto){
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...payload
    };
    this.categories.push(newCategory);
    return newCategory;
  }


  update(id: number, payload:UpdateCategoryDto){

    const category = this.findOne(id);
    if (category) {
      const index = this.categories.findIndex((item) => item.id === id);
      this.categories[index] = {
        ...category,
        ...payload
      }
      return this.categories[index];
    }
    return `${category}`;
  }



  remove(id:number){

    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categories.splice(index, 1);
    return true;
  }
}
