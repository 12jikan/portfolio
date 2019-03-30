import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../core/modules/app-routing.module';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CoreModule { }
