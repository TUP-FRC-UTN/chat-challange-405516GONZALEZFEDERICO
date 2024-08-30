import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mensaje } from '../model/mensaje';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente-usuario.component.html',
  styleUrl: './componente-usuario.component.css'
})
export class ComponenteUsuarioComponent {
msj:string=""
@Output() mensajeAEnviar = new EventEmitter<Mensaje>();
@Input() nombre: string = '';
enviarMensaje(){
  const msj:Mensaje={
    nombre:this.nombre,
    fecha:new Date(),
    mensaje:this.msj
  }
  this.mensajeAEnviar.emit(msj)
  console.log(msj)
}

}
