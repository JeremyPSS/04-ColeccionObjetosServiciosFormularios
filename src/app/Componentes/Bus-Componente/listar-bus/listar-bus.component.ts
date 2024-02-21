import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Bus } from '../Entidades/Bus';
import { DbBusService } from '../Service/db-bus.service';

@Component({
  selector: 'app-listar-bus',
  templateUrl: './listar-bus.component.html',
  styleUrl: './listar-bus.component.css'
})
export class ListarBusComponent {
  @Output() editarClienteEvent = new EventEmitter<Bus>();
  get ListaBuses() {
    return this.obs.getListaChofer;
  }
  EditarBus(chofer: Bus) {
    this.editarClienteEvent.emit(chofer);
  }
  EliminarBus(chofer: Bus) {
    this.obs.DeleteBus(chofer.codigo);
  }

  constructor(private obs: DbBusService) {

  }
  ngOnInit(): void {


  }
}
