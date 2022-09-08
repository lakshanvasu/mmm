import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvisitorComponent } from './addvisitor/addvisitor.component';
import { ShowvisitorComponent } from './showvisitor/showvisitor.component';

const routes: Routes = [
//   (path:'showvisitor',component:ShowvisitorComponent),
//   (path:'addvisitor',component:AddvisitorComponent)
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
