import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../model/Cliente';
import {ClienteService} from '../../services/cliente.service';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-clientes-lista',
  imports: [
    TableModule
  ],
  standalone: true,
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css'
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data) => {
      this.clientes = data;
    });
  }

}
