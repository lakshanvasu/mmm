import { Component, OnInit } from '@angular/core';
import { Visitor } from '../entities/visitor';


@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit{
  visitor:Visitor = new Visitor();
  visitors:Array<Visitor> = [];
  constructor() {}
  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.visitors.push(this.visitor);
    this.visitor = new Visitor();
  }
}
