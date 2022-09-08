import { Component, Input, OnInit } from '@angular/core';
import { Visitor } from '../entities/visitor';
import { VisitorService } from '../services/visitor-service';
import { EditVisitorComponent } from '../edit-visitor/edit-visitor.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-showvisitor',
  templateUrl: './showvisitor.component.html',
  styleUrls: ['./showvisitor.component.css']
})
export class ShowvisitorComponent implements OnInit {
 // @Input() visitors:Array<Visitor>=[]
 visitors:Array<Visitor>=[]
  constructor(private vs:VisitorService, private dialog:MatDialog) { }

  ngOnInit(): void {
   // this.visitors=this.vs.getVisitor()
   this.vs.getVisitors().subscribe(
    {
      next: (data)=>{this.visitors=data},
      error: (error)=>{console.log('some problem'+error)},
      
    }
   );
  }
    // (error)=>(console.log("error"+error));
    editVisitor(){
      const dialogRef = this.dialog.open(EditVisitorComponent,{
        panelClass:'detailsZoom',
        data:{
        }
      }
      )
    }

}
