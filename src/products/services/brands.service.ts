import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';

@Injectable()
export class BrandsService {

  private counterId = 1;

  private brands: Brand[] = [
    {
      "id": 1,
      "name": "Body Luxuries French Lavender Antibacterial Hand Sanitizer",
      "description": "Apparel",
      "company": "ENCHANTE ACCESSORIES INC.",
      "image": "http://vkontakte.ru/ultrices/vel/augue/vestibulum/ante/ipsum/primis.js?erat=rutrum&id=neque&mauris=aenean&vulputate=auctor&elementum=gravida&nullam=sem&varius=praesent&nulla=id&facilisi=massa&cras=id&non=nisl&velit=venenatis&nec=lacinia&nisi=aenean&vulputate=sit&nonummy=amet&maecenas=justo&tincidunt=morbi&lacus=ut&at=odio&velit=cras&vivamus=mi&vel=pede&nulla=malesuada&eget=in&eros=imperdiet&elementum=et&pellentesque=commodo&quisque=vulputate&porta=justo&volutpat=in&erat=blandit&quisque=ultrices&erat=enim&eros=lorem&viverra=ipsum&eget=dolor&congue=sit&eget=amet&semper=consectetuer&rutrum=adipiscing&nulla=elit&nunc=proin&purus=interdum&phasellus=mauris&in=non&felis=ligula&donec=pellentesque&semper=ultrices&sapien=phasellus&a=id&libero=sapien&nam=in&dui=sapien&proin=iaculis&leo=congue&odio=vivamus&porttitor=metus&id=arcu&consequat=adipiscing&in=molestie&consequat=hendrerit&ut=at&nulla=vulputate&sed=vitae&accumsan=nisl&felis=aenean&ut=lectus&at=pellentesque&dolor=eget&quis=nunc&odio=donec&consequat=quis&varius=orci&integer=eget&ac=orci"
    }, {
      "id": 2,
      "name": "Quetiapine Fumarate",
      "description": "Coal Mining",
      "company": "Sandoz Inc",
      "image": "http://mit.edu/vestibulum/ac/est/lacinia/nisi/venenatis.xml?a=id&suscipit=massa&nulla=id&elit=nisl&ac=venenatis&nulla=lacinia&sed=aenean&vel=sit&enim=amet&sit=justo&amet=morbi&nunc=ut&viverra=odio&dapibus=cras&nulla=mi&suscipit=pede&ligula=malesuada&in=in&lacus=imperdiet&curabitur=et&at=commodo&ipsum=vulputate&ac=justo&tellus=in&semper=blandit&interdum=ultrices&mauris=enim&ullamcorper=lorem&purus=ipsum&sit=dolor&amet=sit&nulla=amet&quisque=consectetuer&arcu=adipiscing&libero=elit&rutrum=proin"
    }, {
      "id": 3,
      "name": "All-Nite Cold and Flu",
      "description": "n/a",
      "company": "Major Pharmaceuticals",
      "image": "http://youtube.com/vestibulum/ante/ipsum/primis.xml?proin=hac&at=habitasse&turpis=platea&a=dictumst&pede=morbi&posuere=vestibulum&nonummy=velit&integer=id&non=pretium&velit=iaculis&donec=diam&diam=erat&neque=fermentum&vestibulum=justo&eget=nec&vulputate=condimentum&ut=neque&ultrices=sapien&vel=placerat&augue=ante&vestibulum=nulla&ante=justo&ipsum=aliquam&primis=quis&in=turpis&faucibus=eget&orci=elit&luctus=sodales&et=scelerisque&ultrices=mauris&posuere=sit&cubilia=amet&curae=eros&donec=suspendisse&pharetra=accumsan&magna=tortor&vestibulum=quis&aliquet=turpis&ultrices=sed&erat=ante&tortor=vivamus&sollicitudin=tortor&mi=duis&sit=mattis"
    }, {
      "id": 4,
      "name": "White (Mexican) Dock",
      "description": "Oil & Gas Production",
      "company": "Antigen Laboratories, Inc.",
      "image": "http://deliciousdays.com/id/justo/sit/amet.png?donec=in&quis=quam&orci=fringilla&eget=rhoncus&orci=mauris&vehicula=enim&condimentum=leo&curabitur=rhoncus&in=sed&libero=vestibulum&ut=sit&massa=amet&volutpat=cursus&convallis=id&morbi=turpis&odio=integer&odio=aliquet&elementum=massa&eu=id&interdum=lobortis&eu=convallis&tincidunt=tortor&in=risus&leo=dapibus&maecenas=augue&pulvinar=vel&lobortis=accumsan&est=tellus&phasellus=nisi&sit=eu&amet=orci&erat=mauris&nulla=lacinia&tempus=sapien&vivamus=quis&in=libero&felis=nullam&eu=sit&sapien=amet&cursus=turpis&vestibulum=elementum&proin=ligula&eu=vehicula&mi=consequat&nulla=morbi&ac=a&enim=ipsum&in=integer&tempor=a&turpis=nibh&nec=in&euismod=quis&scelerisque=justo&quam=maecenas&turpis=rhoncus&adipiscing=aliquam&lorem=lacus"
    }, {
      "id": 5,
      "name": "CYRAMZA",
      "description": "Semiconductors",
      "company": "Eli Lilly and Company",
      "image": "https://illinois.edu/vestibulum/ante.js?sed=mollis&vestibulum=molestie&sit=lorem&amet=quisque&cursus=ut&id=erat"
    }, {
      "id": 6,
      "name": "Cold-EEZE",
      "description": "Building Products",
      "company": "ProPhase Labs, Inc.",
      "image": "http://twitpic.com/dictumst/etiam/faucibus.html?donec=etiam&quis=vel&orci=augue&eget=vestibulum&orci=rutrum&vehicula=rutrum&condimentum=neque&curabitur=aenean&in=auctor&libero=gravida&ut=sem&massa=praesent&volutpat=id&convallis=massa&morbi=id&odio=nisl&odio=venenatis&elementum=lacinia&eu=aenean&interdum=sit&eu=amet&tincidunt=justo&in=morbi&leo=ut&maecenas=odio&pulvinar=cras&lobortis=mi&est=pede&phasellus=malesuada&sit=in&amet=imperdiet&erat=et&nulla=commodo"
    }, {
      "id": 7,
      "name": "CENTER-AL - CORYLUS AMERICANA POLLEN",
      "description": "Property-Casualty Insurers",
      "company": "ALK-Abello, Inc.",
      "image": "https://jalbum.net/mi/integer.html?nisl=fusce&nunc=congue&rhoncus=diam&dui=id&vel=ornare&sem=imperdiet&sed=sapien&sagittis=urna&nam=pretium&congue=nisl&risus=ut&semper=volutpat&porta=sapien&volutpat=arcu&quam=sed&pede=augue&lobortis=aliquam&ligula=erat&sit=volutpat&amet=in&eleifend=congue&pede=etiam&libero=justo&quis=etiam&orci=pretium&nullam=iaculis&molestie=justo&nibh=in&in=hac&lectus=habitasse&pellentesque=platea&at=dictumst&nulla=etiam&suspendisse=faucibus&potenti=cursus&cras=urna&in=ut&purus=tellus&eu=nulla&magna=ut&vulputate=erat&luctus=id&cum=mauris&sociis=vulputate&natoque=elementum&penatibus=nullam&et=varius&magnis=nulla&dis=facilisi&parturient=cras&montes=non"
    }, {
      "id": 8,
      "name": "Levetiracetam",
      "description": "Electrical Products",
      "company": "Mylan Institutional Inc.",
      "image": "http://hexun.com/pretium/iaculis/justo.aspx?hac=convallis&habitasse=tortor&platea=risus&dictumst=dapibus&morbi=augue&vestibulum=vel&velit=accumsan&id=tellus&pretium=nisi&iaculis=eu"
    }, {
      "id": 9,
      "name": "CENTER-AL - ACACIA LONGIFOLIA POLLEN",
      "description": "Building operators",
      "company": "ALK-Abello, Inc.",
      "image": "https://tumblr.com/ridiculus/mus/etiam.html?maecenas=luctus&tristique=rutrum&est=nulla&et=tellus&tempus=in&semper=sagittis&est=dui&quam=vel&pharetra=nisl&magna=duis&ac=ac&consequat=nibh&metus=fusce&sapien=lacus&ut=purus&nunc=aliquet&vestibulum=at&ante=feugiat&ipsum=non&primis=pretium&in=quis&faucibus=lectus&orci=suspendisse&luctus=potenti&et=in"
    }, {
      "id": 10,
      "name": "Bystolic",
      "description": "n/a",
      "company": "Physicians Total Care, Inc.",
      "image": "https://state.gov/ultrices/posuere.json?praesent=felis&blandit=fusce&lacinia=posuere&erat=felis&vestibulum=sed&sed=lacus&magna=morbi&at=sem&nunc=mauris&commodo=laoreet&placerat=ut&praesent=rhoncus&blandit=aliquet&nam=pulvinar&nulla=sed&integer=nisl&pede=nunc&justo=rhoncus&lacinia=dui&eget=vel&tincidunt=sem&eget=sed&tempus=sagittis&vel=nam&pede=congue&morbi=risus&porttitor=semper&lorem=porta&id=volutpat&ligula=quam&suspendisse=pede&ornare=lobortis&consequat=ligula&lectus=sit&in=amet&est=eleifend&risus=pede&auctor=libero&sed=quis&tristique=orci&in=nullam&tempus=molestie&sit=nibh&amet=in&sem=lectus&fusce=pellentesque&consequat=at&nulla=nulla&nisl=suspendisse&nunc=potenti&nisl=cras&duis=in&bibendum=purus&felis=eu&sed=magna&interdum=vulputate&venenatis=luctus&turpis=cum&enim=sociis&blandit=natoque&mi=penatibus&in=et&porttitor=magnis&pede=dis&justo=parturient&eu=montes&massa=nascetur&donec=ridiculus&dapibus=mus&duis=vivamus&at=vestibulum&velit=sagittis&eu=sapien&est=cum&congue=sociis&elementum=natoque&in=penatibus&hac=et&habitasse=magnis&platea=dis&dictumst=parturient&morbi=montes&vestibulum=nascetur&velit=ridiculus&id=mus&pretium=etiam&iaculis=vel&diam=augue&erat=vestibulum&fermentum=rutrum&justo=rutrum&nec=neque"
    }, {
      "id": 11,
      "name": "Pollens - Trees, Elm, American Ulmus americana",
      "description": "Telecommunications Equipment",
      "company": "Jubilant HollisterStier LLC",
      "image": "http://weather.com/ornare/consequat/lectus/in/est.xml?mattis=in&egestas=sagittis&metus=dui&aenean=vel&fermentum=nisl&donec=duis&ut=ac&mauris=nibh&eget=fusce&massa=lacus&tempor=purus&convallis=aliquet&nulla=at&neque=feugiat&libero=non&convallis=pretium&eget=quis&eleifend=lectus&luctus=suspendisse&ultricies=potenti&eu=in&nibh=eleifend&quisque=quam&id=a&justo=odio&sit=in&amet=hac&sapien=habitasse&dignissim=platea&vestibulum=dictumst&vestibulum=maecenas&ante=ut&ipsum=massa&primis=quis&in=augue&faucibus=luctus&orci=tincidunt&luctus=nulla&et=mollis&ultrices=molestie&posuere=lorem&cubilia=quisque&curae=ut&nulla=erat&dapibus=curabitur"
    }, {
      "id": 12,
      "name": "Sprains Bruises",
      "description": "Building operators",
      "company": "Natural Health Supply",
      "image": "http://lycos.com/luctus.png?tempus=tortor&vel=risus&pede=dapibus&morbi=augue&porttitor=vel&lorem=accumsan&id=tellus&ligula=nisi&suspendisse=eu&ornare=orci&consequat=mauris&lectus=lacinia&in=sapien&est=quis&risus=libero&auctor=nullam&sed=sit&tristique=amet&in=turpis&tempus=elementum&sit=ligula&amet=vehicula&sem=consequat&fusce=morbi&consequat=a&nulla=ipsum&nisl=integer&nunc=a&nisl=nibh&duis=in&bibendum=quis&felis=justo&sed=maecenas&interdum=rhoncus&venenatis=aliquam&turpis=lacus&enim=morbi&blandit=quis&mi=tortor&in=id&porttitor=nulla&pede=ultrices&justo=aliquet&eu=maecenas"
    }, {
      "id": 13,
      "name": "Fluticasone Propionate",
      "description": "Natural Gas Distribution",
      "company": "Preferred Pharmaceuticals, Inc",
      "image": "http://people.com.cn/magnis/dis/parturient/montes.jpg?quam=rutrum&sapien=rutrum&varius=neque&ut=aenean&blandit=auctor&non=gravida&interdum=sem&in=praesent&ante=id&vestibulum=massa&ante=id&ipsum=nisl&primis=venenatis&in=lacinia&faucibus=aenean&orci=sit&luctus=amet&et=justo&ultrices=morbi&posuere=ut&cubilia=odio&curae=cras&duis=mi&faucibus=pede&accumsan=malesuada&odio=in&curabitur=imperdiet&convallis=et&duis=commodo&consequat=vulputate&dui=justo&nec=in&nisi=blandit"
    }, {
      "id": 14,
      "name": "Quinidine Gluconate",
      "description": "Trucking Freight/Courier Services",
      "company": "UDL Laboratories, Inc.",
      "image": "https://state.tx.us/ante/ipsum/primis/in.json?sit=est&amet=et&nunc=tempus&viverra=semper&dapibus=est&nulla=quam&suscipit=pharetra&ligula=magna&in=ac&lacus=consequat&curabitur=metus&at=sapien&ipsum=ut&ac=nunc&tellus=vestibulum&semper=ante&interdum=ipsum&mauris=primis&ullamcorper=in&purus=faucibus&sit=orci&amet=luctus&nulla=et&quisque=ultrices"
    }, {
      "id": 15,
      "name": "Clindamycin Hydrochloride",
      "description": "EDP Services",
      "company": "PD-Rx Pharmaceuticals, Inc.",
      "image": "https://foxnews.com/luctus.html?rutrum=sit&rutrum=amet&neque=consectetuer&aenean=adipiscing&auctor=elit&gravida=proin&sem=risus&praesent=praesent&id=lectus&massa=vestibulum&id=quam&nisl=sapien&venenatis=varius&lacinia=ut&aenean=blandit&sit=non&amet=interdum&justo=in&morbi=ante&ut=vestibulum&odio=ante&cras=ipsum&mi=primis&pede=in&malesuada=faucibus&in=orci&imperdiet=luctus&et=et&commodo=ultrices&vulputate=posuere&justo=cubilia&in=curae&blandit=duis&ultrices=faucibus&enim=accumsan&lorem=odio&ipsum=curabitur&dolor=convallis&sit=duis&amet=consequat&consectetuer=dui&adipiscing=nec&elit=nisi&proin=volutpat&interdum=eleifend&mauris=donec&non=ut&ligula=dolor&pellentesque=morbi&ultrices=vel&phasellus=lectus&id=in&sapien=quam&in=fringilla&sapien=rhoncus&iaculis=mauris&congue=enim&vivamus=leo"
    }, {
      "id": 16,
      "name": "VITAMIN D",
      "description": "Oil Refining/Marketing",
      "company": "PD-Rx Pharmaceuticals, Inc.",
      "image": "http://oracle.com/nascetur/ridiculus/mus/etiam/vel/augue.js?consectetuer=pellentesque&eget=quisque&rutrum=porta&at=volutpat&lorem=erat&integer=quisque&tincidunt=erat&ante=eros&vel=viverra&ipsum=eget&praesent=congue&blandit=eget&lacinia=semper&erat=rutrum&vestibulum=nulla&sed=nunc&magna=purus&at=phasellus&nunc=in&commodo=felis&placerat=donec&praesent=semper&blandit=sapien&nam=a&nulla=libero&integer=nam&pede=dui&justo=proin&lacinia=leo&eget=odio&tincidunt=porttitor&eget=id&tempus=consequat&vel=in&pede=consequat&morbi=ut&porttitor=nulla&lorem=sed&id=accumsan&ligula=felis&suspendisse=ut&ornare=at&consequat=dolor&lectus=quis&in=odio&est=consequat&risus=varius&auctor=integer"
    }, {
      "id": 17,
      "name": "Entex T",
      "description": "Packaged Foods",
      "company": "WraSer Pharmaceuticals, LLC",
      "image": "https://addtoany.com/vel/est/donec/odio.png?facilisi=ut&cras=odio&non=cras&velit=mi&nec=pede&nisi=malesuada&vulputate=in&nonummy=imperdiet&maecenas=et&tincidunt=commodo&lacus=vulputate&at=justo&velit=in&vivamus=blandit&vel=ultrices&nulla=enim&eget=lorem&eros=ipsum&elementum=dolor&pellentesque=sit&quisque=amet&porta=consectetuer&volutpat=adipiscing&erat=elit&quisque=proin&erat=interdum"
    }, {
      "id": 18,
      "name": "Zicam",
      "description": "EDP Services",
      "company": "Matrixx Initiatives, Inc.",
      "image": "http://pcworld.com/dapibus/at/diam.png?sapien=est&dignissim=congue&vestibulum=elementum&vestibulum=in&ante=hac&ipsum=habitasse&primis=platea&in=dictumst&faucibus=morbi&orci=vestibulum&luctus=velit&et=id&ultrices=pretium&posuere=iaculis&cubilia=diam&curae=erat&nulla=fermentum&dapibus=justo&dolor=nec&vel=condimentum&est=neque&donec=sapien&odio=placerat&justo=ante&sollicitudin=nulla&ut=justo&suscipit=aliquam&a=quis&feugiat=turpis&et=eget&eros=elit&vestibulum=sodales&ac=scelerisque&est=mauris&lacinia=sit&nisi=amet&venenatis=eros&tristique=suspendisse&fusce=accumsan&congue=tortor&diam=quis&id=turpis&ornare=sed&imperdiet=ante&sapien=vivamus"
    }, {
      "id": 19,
      "name": "Albuterol",
      "description": "Transportation Services",
      "company": "Rebel Distributors Corp",
      "image": "http://dailymotion.com/erat/fermentum/justo.xml?vehicula=lorem&consequat=id&morbi=ligula&a=suspendisse&ipsum=ornare&integer=consequat&a=lectus&nibh=in&in=est&quis=risus&justo=auctor&maecenas=sed&rhoncus=tristique&aliquam=in&lacus=tempus&morbi=sit&quis=amet&tortor=sem&id=fusce&nulla=consequat&ultrices=nulla&aliquet=nisl&maecenas=nunc&leo=nisl&odio=duis&condimentum=bibendum&id=felis&luctus=sed&nec=interdum&molestie=venenatis&sed=turpis&justo=enim&pellentesque=blandit&viverra=mi&pede=in&ac=porttitor&diam=pede&cras=justo&pellentesque=eu&volutpat=massa&dui=donec&maecenas=dapibus&tristique=duis&est=at&et=velit&tempus=eu&semper=est&est=congue&quam=elementum&pharetra=in&magna=hac&ac=habitasse&consequat=platea&metus=dictumst&sapien=morbi&ut=vestibulum&nunc=velit&vestibulum=id&ante=pretium&ipsum=iaculis&primis=diam&in=erat&faucibus=fermentum&orci=justo&luctus=nec&et=condimentum&ultrices=neque&posuere=sapien&cubilia=placerat&curae=ante&mauris=nulla&viverra=justo&diam=aliquam&vitae=quis&quam=turpis&suspendisse=eget&potenti=elit&nullam=sodales&porttitor=scelerisque"
    }, {
      "id": 20,
      "name": "Speed Stick",
      "description": "Industrial Machinery/Components",
      "company": "Colgate Palmolive Company",
      "image": "http://seattletimes.com/in/hac/habitasse/platea.png?leo=in&rhoncus=leo&sed=maecenas&vestibulum=pulvinar&sit=lobortis&amet=est&cursus=phasellus&id=sit&turpis=amet&integer=erat&aliquet=nulla&massa=tempus&id=vivamus&lobortis=in&convallis=felis&tortor=eu&risus=sapien&dapibus=cursus&augue=vestibulum&vel=proin&accumsan=eu&tellus=mi&nisi=nulla&eu=ac&orci=enim&mauris=in&lacinia=tempor&sapien=turpis&quis=nec&libero=euismod&nullam=scelerisque&sit=quam&amet=turpis&turpis=adipiscing&elementum=lorem&ligula=vitae&vehicula=mattis&consequat=nibh&morbi=ligula&a=nec&ipsum=sem&integer=duis&a=aliquam&nibh=convallis&in=nunc&quis=proin&justo=at&maecenas=turpis&rhoncus=a&aliquam=pede&lacus=posuere&morbi=nonummy&quis=integer&tortor=non&id=velit&nulla=donec&ultrices=diam"
    }, {
      "id": 21,
      "name": "SparkleFresh",
      "description": "Medical/Dental Instruments",
      "company": "Medline Industries, Inc.",
      "image": "http://usnews.com/et.json?primis=a&in=suscipit&faucibus=nulla&orci=elit&luctus=ac&et=nulla"
    }, {
      "id": 22,
      "name": "Mary Kay Tinted Moisturizer Sunscreen SPF 20 Ivory 1 (Drug Facts)",
      "description": "Publishing",
      "company": "Mary Kay Inc.",
      "image": "https://wikispaces.com/vestibulum/ac/est/lacinia/nisi/venenatis.jsp?pede=dui&malesuada=nec&in=nisi&imperdiet=volutpat&et=eleifend&commodo=donec&vulputate=ut&justo=dolor&in=morbi&blandit=vel&ultrices=lectus&enim=in&lorem=quam&ipsum=fringilla&dolor=rhoncus&sit=mauris&amet=enim&consectetuer=leo&adipiscing=rhoncus&elit=sed&proin=vestibulum&interdum=sit&mauris=amet&non=cursus&ligula=id&pellentesque=turpis&ultrices=integer&phasellus=aliquet&id=massa&sapien=id&in=lobortis&sapien=convallis&iaculis=tortor&congue=risus&vivamus=dapibus&metus=augue&arcu=vel&adipiscing=accumsan&molestie=tellus&hendrerit=nisi&at=eu&vulputate=orci&vitae=mauris&nisl=lacinia&aenean=sapien&lectus=quis&pellentesque=libero&eget=nullam&nunc=sit&donec=amet&quis=turpis&orci=elementum&eget=ligula&orci=vehicula&vehicula=consequat&condimentum=morbi&curabitur=a&in=ipsum&libero=integer&ut=a&massa=nibh&volutpat=in&convallis=quis&morbi=justo&odio=maecenas&odio=rhoncus&elementum=aliquam&eu=lacus&interdum=morbi&eu=quis&tincidunt=tortor&in=id&leo=nulla&maecenas=ultrices&pulvinar=aliquet&lobortis=maecenas&est=leo&phasellus=odio&sit=condimentum&amet=id&erat=luctus&nulla=nec&tempus=molestie&vivamus=sed&in=justo&felis=pellentesque&eu=viverra&sapien=pede&cursus=ac&vestibulum=diam&proin=cras&eu=pellentesque"
    }, {
      "id": 23,
      "name": "Prochlorperazine Maleate",
      "description": "n/a",
      "company": "PD-Rx Pharmaceuticals, Inc.",
      "image": "https://ocn.ne.jp/penatibus.js?sapien=aenean&cum=lectus&sociis=pellentesque&natoque=eget&penatibus=nunc&et=donec&magnis=quis&dis=orci&parturient=eget&montes=orci&nascetur=vehicula&ridiculus=condimentum&mus=curabitur&etiam=in&vel=libero&augue=ut&vestibulum=massa&rutrum=volutpat&rutrum=convallis&neque=morbi&aenean=odio&auctor=odio&gravida=elementum&sem=eu&praesent=interdum&id=eu&massa=tincidunt&id=in&nisl=leo&venenatis=maecenas&lacinia=pulvinar&aenean=lobortis&sit=est&amet=phasellus&justo=sit&morbi=amet&ut=erat&odio=nulla&cras=tempus&mi=vivamus&pede=in&malesuada=felis&in=eu&imperdiet=sapien&et=cursus&commodo=vestibulum&vulputate=proin&justo=eu&in=mi&blandit=nulla&ultrices=ac&enim=enim&lorem=in&ipsum=tempor&dolor=turpis&sit=nec&amet=euismod&consectetuer=scelerisque&adipiscing=quam&elit=turpis&proin=adipiscing&interdum=lorem&mauris=vitae&non=mattis&ligula=nibh&pellentesque=ligula&ultrices=nec&phasellus=sem&id=duis&sapien=aliquam&in=convallis&sapien=nunc&iaculis=proin&congue=at&vivamus=turpis&metus=a&arcu=pede&adipiscing=posuere&molestie=nonummy&hendrerit=integer&at=non&vulputate=velit&vitae=donec&nisl=diam&aenean=neque&lectus=vestibulum&pellentesque=eget&eget=vulputate&nunc=ut&donec=ultrices&quis=vel&orci=augue&eget=vestibulum&orci=ante&vehicula=ipsum&condimentum=primis&curabitur=in&in=faucibus"
    }, {
      "id": 24,
      "name": "OXY Cleansing Pads",
      "description": "Major Pharmaceuticals",
      "company": "The Mentholatum Company",
      "image": "https://nba.com/sodales/scelerisque/mauris/sit/amet/eros/suspendisse.jpg?porttitor=leo&lorem=rhoncus&id=sed&ligula=vestibulum&suspendisse=sit&ornare=amet&consequat=cursus&lectus=id&in=turpis&est=integer&risus=aliquet&auctor=massa&sed=id&tristique=lobortis&in=convallis&tempus=tortor&sit=risus&amet=dapibus&sem=augue&fusce=vel&consequat=accumsan&nulla=tellus&nisl=nisi&nunc=eu&nisl=orci&duis=mauris&bibendum=lacinia&felis=sapien&sed=quis&interdum=libero&venenatis=nullam&turpis=sit&enim=amet&blandit=turpis&mi=elementum&in=ligula&porttitor=vehicula&pede=consequat&justo=morbi&eu=a&massa=ipsum&donec=integer&dapibus=a&duis=nibh&at=in&velit=quis&eu=justo"
    }
  ];


  findAll(){
    return this.brands;
  }


  findOne(id:number){

    const brand = this.brands.find((item) => item.id === id);

    if (!brand) {
      throw new NotFoundException(`Brand ${id} not found`);
    }

    return brand;
  }


  create(payload: CreateBrandDto){

    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...payload
    };
    this.brands.push(newBrand);
    return newBrand;
  }


  update(id:number, payload:UpdateBrandDto){

    const brand = this.findOne(id);
    if (brand) {
      const index = this.brands.findIndex((item)=> item.id === id);
      this.brands[index] = {
        ...brand,
        ...payload,
      }
      return this.brands[index];
    }
    return `${brand}`;
  }



  remove(id:number){

    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.brands.splice(index, 1);
    return true;
  }
}
