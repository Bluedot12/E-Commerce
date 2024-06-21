import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FeatureRoutingModule } from './feature-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
// import { MiddleComponent } from './middle/middle.component';
// import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    // MiddleComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    //FeatureRoutingModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class FeatureModule { }
