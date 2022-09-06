import { Component, Input, OnInit } from '@angular/core';
import { Visitor } from '../entities/visitor';

@Component({
  selector: 'app-show-visitor',
  templateUrl: './show-visitor.component.html',
  styleUrls: ['./show-visitor.component.css']
})
export class ShowVisitorComponent implements OnInit {
  @Input() visitors:Array<Visitor> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
