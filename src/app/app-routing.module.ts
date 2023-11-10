import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"movie-list",component:MovieListComponent},
  {path:"detail/:id",component: ShowDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
