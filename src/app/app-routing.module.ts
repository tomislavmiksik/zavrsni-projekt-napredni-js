import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, },
  { path: 'articles', component: ArticlesPageComponent, },
  {path : 'categories', component : CategoriesPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
