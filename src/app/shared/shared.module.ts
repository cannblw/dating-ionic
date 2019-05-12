import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from './pipes/age.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from '../services/profile.service';

@NgModule({
  declarations: [
    AgePipe
  ],
  providers: [
    ProfileService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    AgePipe,
  ]
})
export class SharedModule { }
