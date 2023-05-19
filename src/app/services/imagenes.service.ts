import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor( private http: HttpClient) { 
  this.cargarImagenes();
  }
  private cargarImagenes(){
  this.http.get('https://angular-plantilla-5307f-default-rtdb.firebaseio.com/imagenes2')
    .subscribe( (resp: any)=>{
      console.log(resp);
    });
  }
}
