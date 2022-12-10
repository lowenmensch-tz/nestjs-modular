import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';

@Injectable()
export class ProductsService {

  private counterId = 1;
  private products: Product[] = [
    {
      "id": 1,
      "name": "Appetiser - Bought",
      "description": "n/a",
      "price": 2,
      "image": "http://microsoft.com/augue/vestibulum/rutrum/rutrum/neque/aenean.aspx?ultrices=quis&phasellus=turpis&id=sed&sapien=ante&in=vivamus&sapien=tortor&iaculis=duis&congue=mattis&vivamus=egestas&metus=metus&arcu=aenean&adipiscing=fermentum&molestie=donec&hendrerit=ut&at=mauris&vulputate=eget&vitae=massa&nisl=tempor&aenean=convallis&lectus=nulla&pellentesque=neque&eget=libero&nunc=convallis&donec=eget&quis=eleifend&orci=luctus&eget=ultricies&orci=eu&vehicula=nibh&condimentum=quisque&curabitur=id&in=justo&libero=sit&ut=amet&massa=sapien&volutpat=dignissim&convallis=vestibulum&morbi=vestibulum&odio=ante&odio=ipsum&elementum=primis&eu=in&interdum=faucibus&eu=orci&tincidunt=luctus&in=et&leo=ultrices&maecenas=posuere&pulvinar=cubilia&lobortis=curae&est=nulla&phasellus=dapibus&sit=dolor&amet=vel&erat=est&nulla=donec&tempus=odio&vivamus=justo&in=sollicitudin&felis=ut&eu=suscipit&sapien=a&cursus=feugiat&vestibulum=et&proin=eros&eu=vestibulum&mi=ac&nulla=est&ac=lacinia&enim=nisi&in=venenatis&tempor=tristique&turpis=fusce&nec=congue&euismod=diam&scelerisque=id&quam=ornare",
      "stock": 59548
    }, {
      "id": 2,
      "name": "Cheese - Havarti, Roasted Garlic",
      "description": "Environmental Services",
      "price": 7630,
      "image": "https://patch.com/venenatis/lacinia.jsp?habitasse=in&platea=sapien&dictumst=iaculis&etiam=congue&faucibus=vivamus&cursus=metus&urna=arcu&ut=adipiscing&tellus=molestie&nulla=hendrerit&ut=at&erat=vulputate&id=vitae&mauris=nisl&vulputate=aenean&elementum=lectus&nullam=pellentesque&varius=eget&nulla=nunc&facilisi=donec&cras=quis&non=orci&velit=eget&nec=orci&nisi=vehicula&vulputate=condimentum&nonummy=curabitur&maecenas=in&tincidunt=libero&lacus=ut&at=massa&velit=volutpat&vivamus=convallis&vel=morbi&nulla=odio&eget=odio&eros=elementum&elementum=eu&pellentesque=interdum&quisque=eu&porta=tincidunt&volutpat=in&erat=leo&quisque=maecenas&erat=pulvinar&eros=lobortis&viverra=est&eget=phasellus&congue=sit&eget=amet&semper=erat&rutrum=nulla&nulla=tempus&nunc=vivamus&purus=in&phasellus=felis&in=eu&felis=sapien&donec=cursus&semper=vestibulum&sapien=proin&a=eu&libero=mi&nam=nulla&dui=ac&proin=enim&leo=in&odio=tempor&porttitor=turpis&id=nec&consequat=euismod&in=scelerisque&consequat=quam&ut=turpis&nulla=adipiscing&sed=lorem&accumsan=vitae&felis=mattis&ut=nibh&at=ligula&dolor=nec&quis=sem&odio=duis&consequat=aliquam&varius=convallis&integer=nunc&ac=proin&leo=at&pellentesque=turpis&ultrices=a&mattis=pede&odio=posuere",
      "stock": 40163
    }, {
      "id": 3,
      "name": "Wine - Cahors Ac 2000, Clos",
      "description": "Electric Utilities: Central",
      "price": 3553,
      "image": "http://house.gov/sit/amet/nunc/viverra.html?integer=amet&pede=diam&justo=in&lacinia=magna&eget=bibendum&tincidunt=imperdiet&eget=nullam&tempus=orci&vel=pede&pede=venenatis&morbi=non&porttitor=sodales&lorem=sed&id=tincidunt&ligula=eu&suspendisse=felis&ornare=fusce&consequat=posuere&lectus=felis&in=sed&est=lacus&risus=morbi&auctor=sem&sed=mauris&tristique=laoreet&in=ut&tempus=rhoncus&sit=aliquet&amet=pulvinar&sem=sed&fusce=nisl&consequat=nunc&nulla=rhoncus&nisl=dui&nunc=vel&nisl=sem&duis=sed&bibendum=sagittis&felis=nam&sed=congue&interdum=risus&venenatis=semper&turpis=porta&enim=volutpat&blandit=quam&mi=pede&in=lobortis&porttitor=ligula&pede=sit&justo=amet&eu=eleifend&massa=pede&donec=libero&dapibus=quis&duis=orci&at=nullam&velit=molestie",
      "stock": 52586
    }, {
      "id": 4,
      "name": "Banana - Leaves",
      "description": "Property-Casualty Insurers",
      "price": 287,
      "image": "https://hc360.com/nisi/volutpat/eleifend.png?a=posuere&libero=felis&nam=sed&dui=lacus&proin=morbi&leo=sem&odio=mauris&porttitor=laoreet&id=ut",
      "stock": 8939
    }, {
      "id": 5,
      "name": "Horseradish Root",
      "description": "Investment Bankers/Brokers/Service",
      "price": 3928,
      "image": "http://time.com/orci/luctus/et/ultrices.png?ornare=fusce&imperdiet=congue&sapien=diam",
      "stock": 77139
    }, {
      "id": 6,
      "name": "Pastry - Chocolate Chip Muffin",
      "description": "Business Services",
      "price": 5437,
      "image": "http://gnu.org/molestie/nibh/in/lectus/pellentesque.json?ultrices=ut&mattis=rhoncus&odio=aliquet&donec=pulvinar&vitae=sed&nisi=nisl&nam=nunc&ultrices=rhoncus&libero=dui&non=vel&mattis=sem&pulvinar=sed&nulla=sagittis&pede=nam&ullamcorper=congue&augue=risus&a=semper&suscipit=porta&nulla=volutpat&elit=quam&ac=pede&nulla=lobortis&sed=ligula&vel=sit&enim=amet&sit=eleifend&amet=pede&nunc=libero&viverra=quis&dapibus=orci&nulla=nullam&suscipit=molestie&ligula=nibh&in=in&lacus=lectus&curabitur=pellentesque&at=at&ipsum=nulla&ac=suspendisse&tellus=potenti&semper=cras&interdum=in&mauris=purus",
      "stock": 60858
    }, {
      "id": 7,
      "name": "Sugar - Brown",
      "description": "Computer Software: Programming, Data Processing",
      "price": 4094,
      "image": "http://vk.com/ante/ipsum/primis.png?volutpat=vel&convallis=ipsum&morbi=praesent&odio=blandit",
      "stock": 8954
    }, {
      "id": 8,
      "name": "Dome Lid Clear P92008h",
      "description": "Major Pharmaceuticals",
      "price": 8408,
      "image": "http://cpanel.net/imperdiet/sapien/urna/pretium.jsp?maecenas=sit&pulvinar=amet&lobortis=cursus&est=id&phasellus=turpis&sit=integer&amet=aliquet&erat=massa&nulla=id&tempus=lobortis&vivamus=convallis&in=tortor&felis=risus&eu=dapibus&sapien=augue&cursus=vel&vestibulum=accumsan&proin=tellus&eu=nisi&mi=eu&nulla=orci&ac=mauris&enim=lacinia&in=sapien&tempor=quis&turpis=libero&nec=nullam&euismod=sit&scelerisque=amet&quam=turpis&turpis=elementum&adipiscing=ligula&lorem=vehicula&vitae=consequat&mattis=morbi&nibh=a&ligula=ipsum&nec=integer&sem=a&duis=nibh&aliquam=in&convallis=quis&nunc=justo&proin=maecenas&at=rhoncus",
      "stock": 29387
    }, {
      "id": 9,
      "name": "Lettuce - Iceberg",
      "description": "Industrial Machinery/Components",
      "price": 8809,
      "image": "https://youku.com/dui/proin/leo/odio/porttitor/id/consequat.html?sed=at&nisl=lorem&nunc=integer&rhoncus=tincidunt&dui=ante&vel=vel&sem=ipsum&sed=praesent&sagittis=blandit&nam=lacinia&congue=erat&risus=vestibulum&semper=sed&porta=magna&volutpat=at&quam=nunc&pede=commodo&lobortis=placerat&ligula=praesent&sit=blandit&amet=nam&eleifend=nulla&pede=integer&libero=pede&quis=justo&orci=lacinia&nullam=eget&molestie=tincidunt&nibh=eget",
      "stock": 70236
    }, {
      "id": 10,
      "name": "Pasta - Cappellini, Dry",
      "description": "Major Banks",
      "price": 1450,
      "image": "http://homestead.com/suspendisse/accumsan/tortor/quis/turpis/sed/ante.xml?quam=curabitur&nec=gravida&dui=nisi&luctus=at&rutrum=nibh&nulla=in&tellus=hac&in=habitasse&sagittis=platea&dui=dictumst&vel=aliquam&nisl=augue&duis=quam&ac=sollicitudin&nibh=vitae&fusce=consectetuer&lacus=eget&purus=rutrum&aliquet=at&at=lorem&feugiat=integer&non=tincidunt&pretium=ante&quis=vel&lectus=ipsum&suspendisse=praesent&potenti=blandit&in=lacinia&eleifend=erat&quam=vestibulum&a=sed&odio=magna&in=at&hac=nunc&habitasse=commodo&platea=placerat&dictumst=praesent&maecenas=blandit&ut=nam&massa=nulla&quis=integer&augue=pede&luctus=justo&tincidunt=lacinia&nulla=eget&mollis=tincidunt&molestie=eget&lorem=tempus&quisque=vel&ut=pede&erat=morbi&curabitur=porttitor",
      "stock": 35689
    }, {
      "id": 11,
      "name": "Sour Cream",
      "description": "Electrical Products",
      "price": 5614,
      "image": "https://guardian.co.uk/volutpat/quam.js?bibendum=lobortis&morbi=sapien&non=sapien&quam=non&nec=mi&dui=integer&luctus=ac&rutrum=neque&nulla=duis&tellus=bibendum&in=morbi&sagittis=non&dui=quam&vel=nec&nisl=dui&duis=luctus&ac=rutrum&nibh=nulla&fusce=tellus&lacus=in&purus=sagittis&aliquet=dui&at=vel&feugiat=nisl&non=duis&pretium=ac&quis=nibh&lectus=fusce&suspendisse=lacus&potenti=purus&in=aliquet&eleifend=at&quam=feugiat&a=non&odio=pretium&in=quis&hac=lectus&habitasse=suspendisse&platea=potenti&dictumst=in&maecenas=eleifend&ut=quam&massa=a&quis=odio&augue=in&luctus=hac&tincidunt=habitasse&nulla=platea&mollis=dictumst&molestie=maecenas&lorem=ut&quisque=massa&ut=quis&erat=augue&curabitur=luctus&gravida=tincidunt&nisi=nulla&at=mollis&nibh=molestie&in=lorem&hac=quisque&habitasse=ut&platea=erat&dictumst=curabitur&aliquam=gravida&augue=nisi&quam=at&sollicitudin=nibh&vitae=in&consectetuer=hac&eget=habitasse&rutrum=platea&at=dictumst&lorem=aliquam&integer=augue&tincidunt=quam&ante=sollicitudin&vel=vitae&ipsum=consectetuer&praesent=eget&blandit=rutrum&lacinia=at&erat=lorem&vestibulum=integer&sed=tincidunt&magna=ante&at=vel&nunc=ipsum&commodo=praesent",
      "stock": 74139
    }, {
      "id": 12,
      "name": "Pasta - Gnocchi, Potato",
      "description": "Major Chemicals",
      "price": 4541,
      "image": "https://nifty.com/vel/lectus/in.xml?sem=vehicula&praesent=consequat&id=morbi&massa=a&id=ipsum&nisl=integer&venenatis=a&lacinia=nibh&aenean=in&sit=quis&amet=justo&justo=maecenas&morbi=rhoncus&ut=aliquam&odio=lacus&cras=morbi",
      "stock": 54848
    }, {
      "id": 13,
      "name": "Lettuce - Spring Mix",
      "description": "n/a",
      "price": 9937,
      "image": "https://apple.com/dolor/morbi/vel/lectus/in/quam/fringilla.png?nam=vitae&dui=nisl&proin=aenean&leo=lectus&odio=pellentesque&porttitor=eget&id=nunc&consequat=donec&in=quis&consequat=orci&ut=eget&nulla=orci&sed=vehicula&accumsan=condimentum&felis=curabitur&ut=in&at=libero&dolor=ut&quis=massa&odio=volutpat&consequat=convallis&varius=morbi&integer=odio&ac=odio&leo=elementum&pellentesque=eu&ultrices=interdum&mattis=eu&odio=tincidunt&donec=in&vitae=leo&nisi=maecenas&nam=pulvinar&ultrices=lobortis&libero=est&non=phasellus&mattis=sit&pulvinar=amet&nulla=erat&pede=nulla&ullamcorper=tempus&augue=vivamus&a=in&suscipit=felis&nulla=eu&elit=sapien&ac=cursus&nulla=vestibulum&sed=proin&vel=eu&enim=mi&sit=nulla&amet=ac",
      "stock": 11920
    }, {
      "id": 14,
      "name": "Pepper - Paprika, Spanish",
      "description": "Marine Transportation",
      "price": 8130,
      "image": "https://rambler.ru/duis/at/velit/eu/est.html?sapien=nec&cum=molestie&sociis=sed&natoque=justo&penatibus=pellentesque&et=viverra&magnis=pede&dis=ac&parturient=diam&montes=cras&nascetur=pellentesque&ridiculus=volutpat&mus=dui&etiam=maecenas&vel=tristique&augue=est&vestibulum=et&rutrum=tempus&rutrum=semper&neque=est&aenean=quam&auctor=pharetra&gravida=magna&sem=ac&praesent=consequat&id=metus&massa=sapien&id=ut&nisl=nunc&venenatis=vestibulum&lacinia=ante&aenean=ipsum&sit=primis&amet=in&justo=faucibus&morbi=orci&ut=luctus&odio=et&cras=ultrices&mi=posuere&pede=cubilia&malesuada=curae&in=mauris&imperdiet=viverra&et=diam&commodo=vitae&vulputate=quam&justo=suspendisse&in=potenti&blandit=nullam&ultrices=porttitor&enim=lacus&lorem=at&ipsum=turpis&dolor=donec&sit=posuere&amet=metus&consectetuer=vitae&adipiscing=ipsum&elit=aliquam&proin=non&interdum=mauris&mauris=morbi&non=non&ligula=lectus&pellentesque=aliquam&ultrices=sit&phasellus=amet&id=diam",
      "stock": 3247
    }, {
      "id": 15,
      "name": "Cheese - Pont Couvert",
      "description": "Telecommunications Equipment",
      "price": 752,
      "image": "http://shutterfly.com/platea/dictumst/maecenas/ut.xml?non=et&mi=eros&integer=vestibulum&ac=ac&neque=est&duis=lacinia&bibendum=nisi&morbi=venenatis&non=tristique&quam=fusce&nec=congue&dui=diam&luctus=id&rutrum=ornare&nulla=imperdiet&tellus=sapien&in=urna&sagittis=pretium&dui=nisl&vel=ut&nisl=volutpat&duis=sapien&ac=arcu&nibh=sed&fusce=augue&lacus=aliquam&purus=erat&aliquet=volutpat&at=in&feugiat=congue&non=etiam&pretium=justo&quis=etiam&lectus=pretium&suspendisse=iaculis&potenti=justo&in=in&eleifend=hac&quam=habitasse&a=platea&odio=dictumst&in=etiam&hac=faucibus&habitasse=cursus&platea=urna&dictumst=ut&maecenas=tellus&ut=nulla&massa=ut&quis=erat&augue=id&luctus=mauris&tincidunt=vulputate&nulla=elementum&mollis=nullam&molestie=varius&lorem=nulla&quisque=facilisi&ut=cras&erat=non&curabitur=velit&gravida=nec&nisi=nisi&at=vulputate&nibh=nonummy&in=maecenas&hac=tincidunt&habitasse=lacus&platea=at&dictumst=velit&aliquam=vivamus&augue=vel&quam=nulla&sollicitudin=eget&vitae=eros&consectetuer=elementum&eget=pellentesque&rutrum=quisque&at=porta&lorem=volutpat&integer=erat&tincidunt=quisque&ante=erat&vel=eros&ipsum=viverra&praesent=eget&blandit=congue&lacinia=eget&erat=semper",
      "stock": 35234
    }, {
      "id": 16,
      "name": "Pastry - Plain Baked Croissant",
      "description": "Oil & Gas Production",
      "price": 8483,
      "image": "http://altervista.org/habitasse/platea/dictumst/maecenas/ut/massa/quis.jsp?convallis=luctus&nulla=rutrum&neque=nulla&libero=tellus&convallis=in&eget=sagittis&eleifend=dui&luctus=vel&ultricies=nisl&eu=duis&nibh=ac&quisque=nibh&id=fusce&justo=lacus&sit=purus&amet=aliquet&sapien=at&dignissim=feugiat&vestibulum=non&vestibulum=pretium&ante=quis&ipsum=lectus&primis=suspendisse&in=potenti&faucibus=in&orci=eleifend&luctus=quam&et=a&ultrices=odio&posuere=in&cubilia=hac&curae=habitasse&nulla=platea&dapibus=dictumst",
      "stock": 58553
    }
  ];


  findAll(){
    return this.products;
  }


  findOne(id: number){

    const product = this.products.find((item) => item.id === id);

    if(!product){
      throw new NotFoundException(`Product ${id} not found`);
    }

    return product;
  }


  create(payload: CreateProductDto){

    this.counterId = this.counterId +1;
    const newProduct = {
      id: this.counterId,
      ...payload
    };
    this.products.push(newProduct);
    return newProduct;
  }


  update(id:number, payload:UpdateProductDto){

    const product = this.findOne(id);
    if (product){
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return `${product}`;
  }


  remove(id:number){

    const index = this.products.findIndex((item) => item.id === id);
    if(index === -1){
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1)
    return true;
  }
}
