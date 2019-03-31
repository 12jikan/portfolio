import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';

import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
<<<<<<< HEAD
  declarations: [
    NavbarComponent
  ],
=======
  declarations: [NavComponent],
>>>>>>> dev
  imports: [
    CommonModule,
    
  ],
  exports: [
    NavbarComponent    
  ]
})
export class SharedModule { }
