import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-spinner',
  templateUrl: './img-spinner.component.html',
  styleUrls: ['./img-spinner.component.scss']
})
export class ImgSpinnerComponent {

  @Input('src') imgSrc: string;
  @Input('class') contentContainerClass: string;

  loading: boolean = true

  onLoad() {
    this.loading = false;
  }
}
