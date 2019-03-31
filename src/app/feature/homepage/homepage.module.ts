import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Homepage Components //
import { HomepageComponent } from './components/homepage/homepage.component';
import { BannerComponent } from './components/homepage/Child/banner/banner.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }
]

@NgModule({
  declarations: [HomepageComponent, BannerComponent],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class HomepageModule { }
