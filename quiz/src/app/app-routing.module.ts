import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'category', loadChildren: './page/category/category.module#CategoryPageModule' },
  { path: 'category2', loadChildren: './page/category2/category2.module#Category2PageModule' },
  { path: 'category3', loadChildren: './page/category3/category3.module#Category3PageModule' },
  { path: 'results', loadChildren: './page/results/results.module#ResultsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
