import { Component, EventEmitter, Output} from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {
  @Output() public salida = new EventEmitter();
@Output() public salidaString = new EventEmitter<string>();
@Output() public enviarDato = new EventEmitter<Alumno>();
public nuevoAlumno: Alumno = {

  rut: '',
  nombre: '',
  apellido: '',
  edad: 0

  }

public nuevoNombre(evento: Event): void {
  const elemento = evento.target as HTMLInputElement;
  this.nuevoAlumno.nombre = elemento.value;
  this.salidaString.emit(elemento.value);
}
public nuevoApellido(evento: Event): void {
  const elemento = evento.target as HTMLInputElement;
  this.nuevoAlumno.apellido = elemento.value;
  this.salidaString.emit(elemento.value);
}
public nuevoRut(evento: Event): void {
  const elemento = evento.target as HTMLInputElement;
  this.nuevoAlumno.rut = elemento.value;
  this.salidaString.emit(elemento.value);
}
public nuevaEdad(evento: Event): void {
  const elemento = evento.target as HTMLInputElement;
  this.nuevoAlumno.edad = Number.parseInt(elemento.value);
  this.salida.emit(elemento.value);
}

public guardarNuevoAlumno(): void {
  const copia: Alumno = {
    ...this.nuevoAlumno
  }
  this.enviarDato.emit(copia);
  this.nuevoAlumno.nombre = '';
  this.nuevoAlumno.apellido = '';
  this.nuevoAlumno.rut = '';
  this.nuevoAlumno.edad = 0;

  this.salida.emit();
}



}
