import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitor } from '../entities/visitor';



@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  url="http://localhost:3000/visitors"
visitors:Array<Visitor>= []
//subject:BehaviorSubject<Array<Visitor>> = new BehaviorSubject(this.visitors);
  constructor(private client:HttpClient) {
    this.client.get(this.url)
  }
  addVisitor(v:Visitor){
    this.visitors.push(v);
    this.client.post(this.url,v).subscribe(
        (success)=>(console.log('request process succesfully')),
        (error)=>(console.log('error'))
    );
  }
  getVisitors():Observable<Array<Visitor>>{
   // return this.subject
    return this.client.get<Array<Visitor>>(this.url);

  }
}