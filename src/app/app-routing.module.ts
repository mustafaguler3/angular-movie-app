import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { ShowListComponent } from './pages/show-list/show-list.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"list",component:ShowListComponent},
  {path:"detail/:id/:type",component: ShowDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
