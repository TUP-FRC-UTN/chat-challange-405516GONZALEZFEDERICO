import { Component } from '@angular/core';
import { ComponenteUsuarioComponent } from '../componente-usuario/componente-usuario.component';
import { Mensaje } from '../model/mensaje';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-componente-sala',
  standalone: true,
  imports: [ComponenteUsuarioComponent,CommonModule],
  templateUrl: './componente-sala.component.html',
  styleUrl: './componente-sala.component.css'
})
export class ComponenteSalaComponent {
  nombreP:string="Pepe"
  nombreM:string="Maria"

  mensajes: Mensaje[] = [];
  recibirMensaje(mensaje: Mensaje) {
    this.mensajes.push(mensaje); 
    
  }
}
