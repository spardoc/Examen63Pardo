import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { DetalleFactura } from 'src/app/domain/detalleFactura';
import { Factura } from 'src/app/domain/factura';
import { ClientesService } from 'src/app/services/clientes.service';
import { FacturasService } from 'src/app/services/facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {
  facturas: any

  fac: Factura = new Factura()

  clientes: Cliente[] = [];
  selectedClienteId?: number;

  constructor(private facturasService: FacturasService, private clientesService: ClientesService){
    this.fac.detalles = [];
  }

  ngOnInit(): void {
      this.facturas = this.facturasService.getFacturas()
      this.fac.detalles.push(new DetalleFactura());
      this.clientesService.getClientes().subscribe(clientes => {
        this.clientes = clientes;
    });
  }

  guardar(){
    this.facturasService.saveFactura(this.fac).subscribe(data => {
      console.log(data)
      if(data.codigo == 1)
        this.ngOnInit()
      else
        alert("Error al insertar " + data.mensaje)
    })
  }

  agregarDetalle() {
    this.fac.detalles.push(new DetalleFactura());
}

  onClienteSeleccionado() {
    const clienteSeleccionado = this.clientes.find(cliente => cliente.codigo === this.selectedClienteId);

    if (clienteSeleccionado) {
        this.fac.cliente = {...clienteSeleccionado};
    } else {
        // Resetear o manejar el caso de que no se encuentre el cliente
        this.fac.cliente = new Cliente();
    }
  }

}
