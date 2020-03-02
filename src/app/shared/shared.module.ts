import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from './pipes/age.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from './services/profile.service';
import { ImgSpinnerComponent } from './components/img-spinner/img-spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AgePipe,
    ImgSpinnerComponent,
    HeaderComponent
  ],
  providers: [
    ProfileService
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    TranslateModule,
    AgePipe,
    ImgSpinnerComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
