import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsListComponent } from './components/details-list/details-list.component';
import { DetailDetailsComponent } from './components/detail-details/detail-details.component';
import { AddDetailComponent } from './components/add-detail/add-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'details', pathMatch: 'full'},
  { path: 'details', component: DetailsListComponent},
  { path: 'details/:id', component: DetailDetailsComponent},
  { path: 'add', component: AddDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
