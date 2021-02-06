import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcoholListComponent } from './components/alcohol-list/alcohol-list.component';
import { AlcoholDetailsComponent } from './components/alcohol-details/alcohol-details.component';
import { AddAlcoholComponent } from './components/add-alcohol/add-alcohol.component';

const routes: Routes = [
  { path: '', redirectTo: 'alcohols', pathMatch: 'full'},
  { path: 'alcohols', component: AlcoholListComponent},
  { path: 'alcohols/:id', component: AlcoholDetailsComponent},
  { path: 'addAlcohol', component: AddAlcoholComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
