import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@Injectable()
export class UsersService {

  private counterId = 1;
  private users: User[] = [
    {
      "id": 1,
      "username": "wkinsell0",
      "password": "ksV8w1gwcYtu",
      "email": "wkinsell0@dailymotion.com",
      "firstname": "Woodie",
      "lastname": "Kinsell",
      "phonenumber": "592-594-1150",
      "image": "https://usatoday.com/ut/ultrices.png?quis=nullam&tortor=molestie&id=nibh&nulla=in&ultrices=lectus"
    }, {
      "id": 2,
      "username": "jhedworth1",
      "password": "xOT76EuL",
      "email": "jhedworth1@princeton.edu",
      "firstname": "Jobey",
      "lastname": "Hedworth",
      "phonenumber": "195-795-2242",
      "image": "http://youtube.com/amet/justo/morbi/ut.jpg?lacus=ut&purus=suscipit&aliquet=a&at=feugiat&feugiat=et&non=eros&pretium=vestibulum&quis=ac&lectus=est&suspendisse=lacinia&potenti=nisi&in=venenatis&eleifend=tristique&quam=fusce&a=congue&odio=diam&in=id&hac=ornare&habitasse=imperdiet"
    }, {
      "id": 3,
      "username": "bbilverstone2",
      "password": "nJG0XNztVKSW",
      "email": "bbilverstone2@mozilla.org",
      "firstname": "Bourke",
      "lastname": "Bilverstone",
      "phonenumber": "748-791-2908",
      "image": "https://patch.com/donec/vitae/nisi/nam/ultrices/libero/non.js?pellentesque=interdum&volutpat=venenatis&dui=turpis&maecenas=enim&tristique=blandit&est=mi&et=in&tempus=porttitor&semper=pede&est=justo&quam=eu&pharetra=massa&magna=donec&ac=dapibus&consequat=duis&metus=at&sapien=velit&ut=eu&nunc=est&vestibulum=congue&ante=elementum&ipsum=in&primis=hac&in=habitasse&faucibus=platea&orci=dictumst&luctus=morbi&et=vestibulum&ultrices=velit&posuere=id&cubilia=pretium&curae=iaculis&mauris=diam&viverra=erat&diam=fermentum&vitae=justo&quam=nec&suspendisse=condimentum&potenti=neque&nullam=sapien&porttitor=placerat&lacus=ante&at=nulla&turpis=justo&donec=aliquam&posuere=quis&metus=turpis&vitae=eget&ipsum=elit&aliquam=sodales&non=scelerisque&mauris=mauris&morbi=sit&non=amet&lectus=eros&aliquam=suspendisse&sit=accumsan&amet=tortor&diam=quis&in=turpis&magna=sed&bibendum=ante&imperdiet=vivamus&nullam=tortor&orci=duis&pede=mattis&venenatis=egestas&non=metus&sodales=aenean&sed=fermentum&tincidunt=donec&eu=ut&felis=mauris&fusce=eget"
    }, {
      "id": 4,
      "username": "mdonaho3",
      "password": "LXF4nD",
      "email": "mdonaho3@washingtonpost.com",
      "firstname": "Mirabelle",
      "lastname": "Donaho",
      "phonenumber": "563-330-7069",
      "image": "http://accuweather.com/odio/consequat.jsp?integer=vel&aliquet=sem&massa=sed&id=sagittis&lobortis=nam&convallis=congue&tortor=risus&risus=semper&dapibus=porta&augue=volutpat&vel=quam&accumsan=pede&tellus=lobortis&nisi=ligula&eu=sit&orci=amet&mauris=eleifend&lacinia=pede&sapien=libero&quis=quis&libero=orci&nullam=nullam&sit=molestie&amet=nibh&turpis=in&elementum=lectus&ligula=pellentesque&vehicula=at&consequat=nulla&morbi=suspendisse&a=potenti&ipsum=cras&integer=in&a=purus&nibh=eu&in=magna&quis=vulputate&justo=luctus&maecenas=cum&rhoncus=sociis&aliquam=natoque&lacus=penatibus&morbi=et&quis=magnis&tortor=dis&id=parturient&nulla=montes&ultrices=nascetur&aliquet=ridiculus&maecenas=mus&leo=vivamus&odio=vestibulum&condimentum=sagittis&id=sapien&luctus=cum&nec=sociis&molestie=natoque&sed=penatibus&justo=et&pellentesque=magnis&viverra=dis&pede=parturient&ac=montes&diam=nascetur&cras=ridiculus&pellentesque=mus&volutpat=etiam&dui=vel&maecenas=augue&tristique=vestibulum&est=rutrum&et=rutrum&tempus=neque&semper=aenean&est=auctor&quam=gravida&pharetra=sem&magna=praesent&ac=id&consequat=massa&metus=id&sapien=nisl&ut=venenatis&nunc=lacinia&vestibulum=aenean&ante=sit&ipsum=amet&primis=justo&in=morbi&faucibus=ut&orci=odio"
    }, {
      "id": 5,
      "username": "mrodda4",
      "password": "CUikvoL",
      "email": "mrodda4@youtube.com",
      "firstname": "Marsh",
      "lastname": "Rodda",
      "phonenumber": "993-217-4268",
      "image": "https://privacy.gov.au/hac.jpg?adipiscing=nibh&elit=in&proin=quis&risus=justo&praesent=maecenas&lectus=rhoncus&vestibulum=aliquam&quam=lacus&sapien=morbi&varius=quis&ut=tortor&blandit=id&non=nulla&interdum=ultrices&in=aliquet&ante=maecenas&vestibulum=leo&ante=odio&ipsum=condimentum&primis=id&in=luctus&faucibus=nec&orci=molestie&luctus=sed"
    }, {
      "id": 6,
      "username": "mdorrity5",
      "password": "qw2cgwTK30Mi",
      "email": "mdorrity5@hubpages.com",
      "firstname": "Marna",
      "lastname": "Dorrity",
      "phonenumber": "394-684-0311",
      "image": "http://amazon.de/elementum/in/hac/habitasse/platea/dictumst.xml?sapien=ipsum&varius=aliquam&ut=non&blandit=mauris&non=morbi&interdum=non&in=lectus&ante=aliquam&vestibulum=sit&ante=amet&ipsum=diam&primis=in&in=magna&faucibus=bibendum&orci=imperdiet&luctus=nullam&et=orci&ultrices=pede&posuere=venenatis&cubilia=non&curae=sodales&duis=sed&faucibus=tincidunt&accumsan=eu&odio=felis&curabitur=fusce&convallis=posuere&duis=felis&consequat=sed&dui=lacus&nec=morbi&nisi=sem&volutpat=mauris&eleifend=laoreet&donec=ut&ut=rhoncus&dolor=aliquet&morbi=pulvinar&vel=sed&lectus=nisl&in=nunc&quam=rhoncus&fringilla=dui&rhoncus=vel&mauris=sem&enim=sed&leo=sagittis&rhoncus=nam&sed=congue"
    }, {
      "id": 7,
      "username": "lnewbegin6",
      "password": "ehg7Uu",
      "email": "lnewbegin6@netscape.com",
      "firstname": "Lorine",
      "lastname": "Newbegin",
      "phonenumber": "941-969-8852",
      "image": "http://mit.edu/luctus/et/ultrices/posuere/cubilia/curae.jpg?lectus=fusce&suspendisse=congue&potenti=diam&in=id&eleifend=ornare&quam=imperdiet&a=sapien&odio=urna&in=pretium&hac=nisl&habitasse=ut&platea=volutpat&dictumst=sapien&maecenas=arcu&ut=sed&massa=augue&quis=aliquam&augue=erat&luctus=volutpat&tincidunt=in&nulla=congue&mollis=etiam&molestie=justo&lorem=etiam&quisque=pretium&ut=iaculis&erat=justo&curabitur=in&gravida=hac&nisi=habitasse&at=platea&nibh=dictumst&in=etiam&hac=faucibus&habitasse=cursus&platea=urna&dictumst=ut&aliquam=tellus&augue=nulla&quam=ut&sollicitudin=erat&vitae=id&consectetuer=mauris&eget=vulputate&rutrum=elementum&at=nullam&lorem=varius&integer=nulla&tincidunt=facilisi"
    }, {
      "id": 8,
      "username": "bmullaney7",
      "password": "NVX224Fgdq77",
      "email": "bmullaney7@sphinn.com",
      "firstname": "Bebe",
      "lastname": "Mullaney",
      "phonenumber": "710-625-8463",
      "image": "https://huffingtonpost.com/iaculis/justo/in/hac/habitasse.json?semper=id&est=massa&quam=id&pharetra=nisl&magna=venenatis&ac=lacinia&consequat=aenean&metus=sit&sapien=amet&ut=justo&nunc=morbi&vestibulum=ut&ante=odio&ipsum=cras&primis=mi&in=pede&faucibus=malesuada&orci=in&luctus=imperdiet&et=et&ultrices=commodo&posuere=vulputate&cubilia=justo&curae=in&mauris=blandit&viverra=ultrices&diam=enim&vitae=lorem&quam=ipsum&suspendisse=dolor&potenti=sit&nullam=amet&porttitor=consectetuer&lacus=adipiscing&at=elit&turpis=proin&donec=interdum&posuere=mauris&metus=non&vitae=ligula&ipsum=pellentesque&aliquam=ultrices&non=phasellus&mauris=id&morbi=sapien&non=in&lectus=sapien&aliquam=iaculis&sit=congue&amet=vivamus&diam=metus&in=arcu&magna=adipiscing&bibendum=molestie&imperdiet=hendrerit&nullam=at&orci=vulputate&pede=vitae&venenatis=nisl&non=aenean&sodales=lectus&sed=pellentesque&tincidunt=eget&eu=nunc&felis=donec&fusce=quis&posuere=orci&felis=eget&sed=orci&lacus=vehicula&morbi=condimentum&sem=curabitur&mauris=in&laoreet=libero&ut=ut&rhoncus=massa&aliquet=volutpat&pulvinar=convallis&sed=morbi&nisl=odio&nunc=odio&rhoncus=elementum&dui=eu&vel=interdum&sem=eu&sed=tincidunt&sagittis=in&nam=leo"
    }, {
      "id": 9,
      "username": "dmeddows8",
      "password": "lS5L4uNwzN",
      "email": "dmeddows8@reference.com",
      "firstname": "Dud",
      "lastname": "Meddows",
      "phonenumber": "584-259-0236",
      "image": "https://soup.io/sit/amet/diam/in/magna/bibendum/imperdiet.json?etiam=ultrices&vel=posuere&augue=cubilia&vestibulum=curae&rutrum=duis&rutrum=faucibus&neque=accumsan&aenean=odio&auctor=curabitur&gravida=convallis&sem=duis&praesent=consequat&id=dui&massa=nec&id=nisi&nisl=volutpat&venenatis=eleifend&lacinia=donec&aenean=ut&sit=dolor&amet=morbi&justo=vel&morbi=lectus&ut=in&odio=quam&cras=fringilla&mi=rhoncus&pede=mauris&malesuada=enim&in=leo&imperdiet=rhoncus&et=sed&commodo=vestibulum&vulputate=sit&justo=amet&in=cursus&blandit=id&ultrices=turpis&enim=integer&lorem=aliquet&ipsum=massa&dolor=id&sit=lobortis&amet=convallis&consectetuer=tortor&adipiscing=risus&elit=dapibus&proin=augue&interdum=vel&mauris=accumsan&non=tellus&ligula=nisi&pellentesque=eu&ultrices=orci&phasellus=mauris&id=lacinia"
    }, {
      "id": 10,
      "username": "nbrammar9",
      "password": "U6kzPUI",
      "email": "nbrammar9@indiegogo.com",
      "firstname": "Nanine",
      "lastname": "Brammar",
      "phonenumber": "885-684-4580",
      "image": "http://macromedia.com/enim/lorem/ipsum/dolor/sit/amet/consectetuer.png?platea=semper&dictumst=interdum&morbi=mauris&vestibulum=ullamcorper&velit=purus&id=sit&pretium=amet&iaculis=nulla&diam=quisque&erat=arcu&fermentum=libero"
    }, {
      "id": 11,
      "username": "kaccombea",
      "password": "uaJbcxPH5At",
      "email": "kaccombea@ameblo.jp",
      "firstname": "Kingsley",
      "lastname": "Accombe",
      "phonenumber": "394-472-4449",
      "image": "https://trellian.com/morbi/non.json?nec=urna&condimentum=ut&neque=tellus&sapien=nulla&placerat=ut&ante=erat&nulla=id&justo=mauris&aliquam=vulputate&quis=elementum&turpis=nullam"
    }, {
      "id": 12,
      "username": "pkindleyb",
      "password": "brwQ4z3AGjE5",
      "email": "pkindleyb@statcounter.com",
      "firstname": "Perrine",
      "lastname": "Kindley",
      "phonenumber": "631-642-1424",
      "image": "http://auda.org.au/quis/justo/maecenas/rhoncus/aliquam/lacus.xml?congue=a&vivamus=pede&metus=posuere&arcu=nonummy&adipiscing=integer&molestie=non&hendrerit=velit&at=donec&vulputate=diam&vitae=neque&nisl=vestibulum&aenean=eget&lectus=vulputate&pellentesque=ut&eget=ultrices&nunc=vel&donec=augue&quis=vestibulum&orci=ante&eget=ipsum&orci=primis&vehicula=in&condimentum=faucibus&curabitur=orci&in=luctus&libero=et&ut=ultrices&massa=posuere&volutpat=cubilia&convallis=curae&morbi=donec&odio=pharetra&odio=magna&elementum=vestibulum&eu=aliquet&interdum=ultrices&eu=erat&tincidunt=tortor&in=sollicitudin&leo=mi&maecenas=sit&pulvinar=amet&lobortis=lobortis&est=sapien&phasellus=sapien&sit=non&amet=mi&erat=integer&nulla=ac&tempus=neque&vivamus=duis&in=bibendum&felis=morbi&eu=non&sapien=quam"
    }, {
      "id": 13,
      "username": "ltarverc",
      "password": "a9GR5KV",
      "email": "ltarverc@xrea.com",
      "firstname": "Luciano",
      "lastname": "Tarver",
      "phonenumber": "525-736-3555",
      "image": "http://ow.ly/pretium/quis/lectus/suspendisse.jpg?aenean=ante&lectus=nulla&pellentesque=justo&eget=aliquam&nunc=quis&donec=turpis&quis=eget&orci=elit&eget=sodales&orci=scelerisque&vehicula=mauris&condimentum=sit&curabitur=amet&in=eros&libero=suspendisse&ut=accumsan&massa=tortor&volutpat=quis&convallis=turpis&morbi=sed&odio=ante&odio=vivamus&elementum=tortor&eu=duis&interdum=mattis&eu=egestas&tincidunt=metus&in=aenean&leo=fermentum&maecenas=donec&pulvinar=ut&lobortis=mauris&est=eget&phasellus=massa&sit=tempor&amet=convallis&erat=nulla&nulla=neque&tempus=libero&vivamus=convallis&in=eget&felis=eleifend&eu=luctus&sapien=ultricies&cursus=eu&vestibulum=nibh&proin=quisque&eu=id&mi=justo&nulla=sit&ac=amet&enim=sapien&in=dignissim&tempor=vestibulum&turpis=vestibulum&nec=ante&euismod=ipsum"
    }, {
      "id": 14,
      "username": "dtroreyd",
      "password": "qjmFR7M926c",
      "email": "dtroreyd@vimeo.com",
      "firstname": "Dix",
      "lastname": "Trorey",
      "phonenumber": "741-921-9121",
      "image": "http://epa.gov/id/justo/sit/amet/sapien/dignissim.png?pulvinar=quam&lobortis=pede&est=lobortis&phasellus=ligula&sit=sit&amet=amet&erat=eleifend&nulla=pede&tempus=libero&vivamus=quis&in=orci&felis=nullam&eu=molestie&sapien=nibh&cursus=in&vestibulum=lectus&proin=pellentesque&eu=at&mi=nulla"
    }, {
      "id": 15,
      "username": "plarratte",
      "password": "Hzc3369OTuEA",
      "email": "plarratte@yolasite.com",
      "firstname": "Phillie",
      "lastname": "Larratt",
      "phonenumber": "114-399-9629",
      "image": "http://princeton.edu/duis/at/velit/eu/est/congue.json?in=donec&sagittis=odio&dui=justo&vel=sollicitudin&nisl=ut&duis=suscipit"
    }, {
      "id": 16,
      "username": "hfinlanf",
      "password": "NovGCGllZ9vT",
      "email": "hfinlanf@netlog.com",
      "firstname": "Herbie",
      "lastname": "Finlan",
      "phonenumber": "284-207-4960",
      "image": "https://creativecommons.org/dolor/morbi/vel.xml?pretium=orci&quis=luctus&lectus=et&suspendisse=ultrices&potenti=posuere&in=cubilia&eleifend=curae&quam=donec&a=pharetra&odio=magna&in=vestibulum&hac=aliquet&habitasse=ultrices&platea=erat&dictumst=tortor&maecenas=sollicitudin&ut=mi&massa=sit&quis=amet&augue=lobortis&luctus=sapien&tincidunt=sapien&nulla=non&mollis=mi&molestie=integer&lorem=ac&quisque=neque&ut=duis&erat=bibendum&curabitur=morbi&gravida=non&nisi=quam&at=nec&nibh=dui&in=luctus&hac=rutrum&habitasse=nulla&platea=tellus&dictumst=in&aliquam=sagittis&augue=dui&quam=vel&sollicitudin=nisl&vitae=duis&consectetuer=ac&eget=nibh&rutrum=fusce&at=lacus&lorem=purus&integer=aliquet&tincidunt=at&ante=feugiat&vel=non&ipsum=pretium&praesent=quis&blandit=lectus&lacinia=suspendisse&erat=potenti"
    }, {
      "id": 17,
      "username": "kfarrensg",
      "password": "AQ6iLUO",
      "email": "kfarrensg@issuu.com",
      "firstname": "Kayle",
      "lastname": "Farrens",
      "phonenumber": "958-867-1967",
      "image": "http://ebay.com/nonummy/integer/non/velit/donec.png?dapibus=augue&duis=quam&at=sollicitudin&velit=vitae&eu=consectetuer&est=eget&congue=rutrum&elementum=at&in=lorem&hac=integer&habitasse=tincidunt&platea=ante&dictumst=vel&morbi=ipsum&vestibulum=praesent&velit=blandit&id=lacinia&pretium=erat&iaculis=vestibulum&diam=sed&erat=magna&fermentum=at&justo=nunc&nec=commodo&condimentum=placerat&neque=praesent&sapien=blandit&placerat=nam&ante=nulla&nulla=integer&justo=pede&aliquam=justo&quis=lacinia&turpis=eget&eget=tincidunt&elit=eget&sodales=tempus&scelerisque=vel&mauris=pede&sit=morbi&amet=porttitor&eros=lorem&suspendisse=id&accumsan=ligula&tortor=suspendisse&quis=ornare&turpis=consequat&sed=lectus&ante=in&vivamus=est&tortor=risus&duis=auctor&mattis=sed&egestas=tristique&metus=in&aenean=tempus&fermentum=sit&donec=amet&ut=sem&mauris=fusce&eget=consequat&massa=nulla&tempor=nisl&convallis=nunc&nulla=nisl&neque=duis&libero=bibendum&convallis=felis&eget=sed&eleifend=interdum&luctus=venenatis&ultricies=turpis&eu=enim&nibh=blandit&quisque=mi&id=in&justo=porttitor&sit=pede&amet=justo&sapien=eu&dignissim=massa&vestibulum=donec&vestibulum=dapibus&ante=duis&ipsum=at&primis=velit&in=eu&faucibus=est&orci=congue&luctus=elementum&et=in&ultrices=hac&posuere=habitasse&cubilia=platea&curae=dictumst&nulla=morbi&dapibus=vestibulum&dolor=velit&vel=id&est=pretium"
    }, {
      "id": 18,
      "username": "tmylchreesth",
      "password": "we7a6vrqKPpU",
      "email": "tmylchreesth@princeton.edu",
      "firstname": "Torie",
      "lastname": "Mylchreest",
      "phonenumber": "103-238-9017",
      "image": "https://fema.gov/amet/sapien/dignissim/vestibulum/vestibulum/ante.js?natoque=vitae&penatibus=quam&et=suspendisse&magnis=potenti&dis=nullam&parturient=porttitor&montes=lacus&nascetur=at"
    }, {
      "id": 19,
      "username": "mkillingbecki",
      "password": "mMNZaQ32UI",
      "email": "mkillingbecki@mozilla.org",
      "firstname": "Mabelle",
      "lastname": "Killingbeck",
      "phonenumber": "716-555-8331",
      "image": "http://hubpages.com/sagittis/sapien/cum/sociis/natoque/penatibus.aspx?in=consequat&consequat=varius&ut=integer&nulla=ac&sed=leo&accumsan=pellentesque&felis=ultrices&ut=mattis&at=odio&dolor=donec&quis=vitae&odio=nisi&consequat=nam&varius=ultrices&integer=libero&ac=non&leo=mattis&pellentesque=pulvinar&ultrices=nulla&mattis=pede&odio=ullamcorper&donec=augue&vitae=a&nisi=suscipit&nam=nulla&ultrices=elit&libero=ac&non=nulla&mattis=sed&pulvinar=vel&nulla=enim&pede=sit&ullamcorper=amet&augue=nunc&a=viverra&suscipit=dapibus&nulla=nulla&elit=suscipit&ac=ligula&nulla=in&sed=lacus&vel=curabitur&enim=at&sit=ipsum&amet=ac&nunc=tellus&viverra=semper&dapibus=interdum&nulla=mauris&suscipit=ullamcorper&ligula=purus&in=sit&lacus=amet&curabitur=nulla&at=quisque&ipsum=arcu&ac=libero&tellus=rutrum&semper=ac&interdum=lobortis&mauris=vel&ullamcorper=dapibus&purus=at&sit=diam&amet=nam"
    }, {
      "id": 20,
      "username": "mdurradj",
      "password": "xfUyFHi",
      "email": "mdurradj@storify.com",
      "firstname": "Margalit",
      "lastname": "Durrad",
      "phonenumber": "469-975-7170",
      "image": "https://springer.com/fusce/consequat/nulla/nisl/nunc/nisl.html?eget=pretium&eleifend=iaculis&luctus=justo&ultricies=in&eu=hac&nibh=habitasse&quisque=platea&id=dictumst&justo=etiam&sit=faucibus&amet=cursus&sapien=urna&dignissim=ut&vestibulum=tellus&vestibulum=nulla&ante=ut&ipsum=erat&primis=id&in=mauris&faucibus=vulputate&orci=elementum&luctus=nullam&et=varius&ultrices=nulla&posuere=facilisi&cubilia=cras&curae=non&nulla=velit&dapibus=nec&dolor=nisi&vel=vulputate&est=nonummy&donec=maecenas&odio=tincidunt&justo=lacus&sollicitudin=at&ut=velit&suscipit=vivamus&a=vel&feugiat=nulla&et=eget&eros=eros&vestibulum=elementum&ac=pellentesque&est=quisque&lacinia=porta&nisi=volutpat&venenatis=erat&tristique=quisque&fusce=erat&congue=eros&diam=viverra&id=eget&ornare=congue&imperdiet=eget&sapien=semper&urna=rutrum&pretium=nulla&nisl=nunc&ut=purus&volutpat=phasellus&sapien=in&arcu=felis&sed=donec&augue=semper&aliquam=sapien&erat=a&volutpat=libero&in=nam&congue=dui&etiam=proin&justo=leo&etiam=odio&pretium=porttitor"
    }
  ];


  findAll(){
    return this.users;
  }


  findOne(id: number){

    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`user #${id} not found`)
    }
    return user;
  }


  create(payload:CreateUserDto){

    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload
    };
    this.users.push(newUser);
    return newUser;
  }


  update(id: number, payload:UpdateUserDto){

    const user = this.findOne(id);
    if (user) {
      const index = this.users.findIndex((item) => item.id === id);
      this.users[index] = {
        ...user,
        ...payload,
      }
      return this.users[index];
    }
    return `${user}`;
  }


  remove(id:number){

    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }
}
