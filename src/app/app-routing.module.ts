import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './page/content/overview/overview.component';
import { DoorlogComponent } from './page/content/doorlog/doorlog.component';


const routes: Routes = [
  {
    path:'', redirectTo:'index', pathMatch:'full'
  },
  {
    path:'index', component: OverviewComponent
  },
  {
    path:'door', component: DoorlogComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
