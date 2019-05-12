import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from './pipes/age.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AgePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    AgePipe
  ]
})
export class SharedModule { }
