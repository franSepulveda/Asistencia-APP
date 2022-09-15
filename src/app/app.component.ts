import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[DatePipe],

  
})
export class AppComponent {
  public elementosGuardados: Array<Alumno> = [];
  public escuchandoAlHijo(){

  }
  public escuchandoDetalle(hijo: string){

  }
  public agregarNuevo(nuevo: Alumno): void {
    const id: number = this.elementosGuardados.length + 1;
    nuevo.id = id;
    this.elementosGuardados.push(nuevo);
  }
  
}


