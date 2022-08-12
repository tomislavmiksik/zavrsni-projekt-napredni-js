import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailPageComponent } from './pages/article-detail-page/article-detail-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImageSearchPageComponent } from './pages/image-search-page/image-search-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'articles', component: ArticlesPageComponent },
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'articles-page/:articleId', component: ArticleDetailPageComponent },
  { path: 'categories-page/:categoryId', component: ArticlesPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'image-search', component: ImageSearchPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
