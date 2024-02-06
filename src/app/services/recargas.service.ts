import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RecargasService {
  private url = environment.WS_PATH + "/recargas"; // Utiliza la variable de entorno

  constructor(private http: HttpClient) {}

  realizarRecarga(numeroTelefono: string, monto: number) {
    const recargaData = { numeroTelefono, monto };

    return this.http.post(this.url, recargaData);
  }
}
