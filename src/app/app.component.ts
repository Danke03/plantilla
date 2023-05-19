import { Component } from '@angular/core';
import { ImagenesService } from './services/imagenes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedSocial';
  constructor(public imagenService: ImagenesService){
    
  }
}
