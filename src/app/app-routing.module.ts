import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathsComponent } from '../app/maths/maths.component';
import { ScienceComponent } from 'src/app/science/science.component';
import { PtmComponent } from 'src/app/maths/ptm/ptm.component';

const routes: Routes = [
  {path: "maths", component: MathsComponent},
  {path: "science", component: ScienceComponent},
  {path: "ptm", component: PtmComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
