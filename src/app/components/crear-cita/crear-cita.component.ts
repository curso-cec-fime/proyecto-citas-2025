import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-crear-cita',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-cita.component.html',
  styleUrl: './crear-cita.component.css'
})
export class CrearCitaComponent {
  nombre='';
  fecha='';
  hora='';
  sintomas='';

  formularioIncorrecto=false;
  @Output() nuevaCita = new EventEmitter<any>();
  constructor(){}

  agregarCita(){
    if(this.nombre=='' || this.fecha == '' || this.hora == '' || this.sintomas == ''){
      this.formularioIncorrecto = true;
      return;
    }else{
      this.formularioIncorrecto = false;
      const CITA = {
        nombre: this.nombre,
        fecha: this.fecha,
        hora: this.hora,
        sintomas: this.sintomas
      }
      console.log(CITA);
      this.nuevaCita.emit(CITA);
      this.resetCampos();
    }
  }
  resetCampos() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }

}
