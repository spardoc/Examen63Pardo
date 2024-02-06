import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Recarga } from 'src/app/domain/recarga';
import { RecargasService } from 'src/app/services/recargas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  rec: Recarga = new Recarga();

  constructor(private recargasService: RecargasService) {} // Inyecta el servicio RecargasService

  realizarRecarga() {
    const { numeroTelefono, monto } = this.rec;

    if (numeroTelefono !== undefined && monto !== undefined) {
      this.recargasService.realizarRecarga(numeroTelefono, monto).subscribe(
        (response) => {
          // Maneja la respuesta exitosa del servicio web
          console.log('Recarga exitosa:', response);
          // Puedes realizar acciones adicionales aquí, como mostrar un mensaje de éxito al usuario.
        },
        (error) => {
          // Maneja errores en la solicitud al servicio web
          console.error('Error en la recarga:', error);
          // Puedes mostrar un mensaje de error al usuario o realizar acciones adicionales.
        }
      );
    } else {
      // Maneja el caso en el que numeroTelefono o monto son undefined
      console.error('Número de teléfono o monto no definidos');
      // Puedes mostrar un mensaje de error al usuario o realizar acciones adicionales.
    }
  }
}