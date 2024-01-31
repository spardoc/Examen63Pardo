import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Factura } from '../domain/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private http: HttpClient) { 
  }

  getFacturas()
  {
    let url = environment.WS_PATH+"/facturas/list"
    return this.http.get<any>(url)
  }

  getDetalles()
  {
    let url = environment.WS_PATH+"/facturas/detalles/list"
    return this.http.get<any>(url)
  }

  saveFactura(factura: Factura)
  {
    let url = environment.WS_PATH +"/facturas"
    return this.http.post<any>(url,factura)
  }
}
