import { Injectable } from '@angular/core';
import{Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataprovService {
public password:string;
public config :any[]=[] ;
public names:any[]=[];
//public config :string <>[('name':'ben')];
  constructor(private storage:Storage) {
this.password="Kenya@111";
//this.names.push({name:'ben'},{age:'28'});
this.names.push({name:'ben'},{age:'28'});
this.storage.set('test',this.names);
this.storage.set('test1',this.names);
this.storage.set('test2',this.names);

this.storage.forEach((value: any, key: string, iterationNumber: Number) => {
    console.log("key " + key);
    console.log("iterationNumber " + iterationNumber);
    console.log("value " + value);
  });
}

  getmessages(){

//get message configurations
console.log(this.names);
}
getnumbers(){
  //get the numbers for the different messages and save in numbers array
}
setall( message:string, name:string, number:string){
this.config.push({no:number},{msg:message});
this.storage.set(name,this.config);
}


setmessage( message:string, name:string){
  //set messages of the different sensors
  //names to start with m_
  this.storage.set("m_"+name,message);
}
setnumbers( name:string, number:string){
  //set numbers of the different sensors
  //number names to start with n_
  this.storage.set("n_"+name,number);
}

}
