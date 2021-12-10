import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurritoMakerComponent } from './burrito-maker/burrito-maker.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'burrito-maker', component: BurritoMakerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
