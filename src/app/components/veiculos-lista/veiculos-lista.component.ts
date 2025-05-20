import {Component, OnInit} from '@angular/core';
import {VeiculoService} from '../../services/veiculo.service';
import {Veiculo} from '../../model/Veiculo';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-veiculos-lista',
  imports: [
    TableModule
  ],
  standalone: true,
  templateUrl: './veiculos-lista.component.html',
  styleUrl: './veiculos-lista.component.css'
})
export class VeiculosListaComponent implements OnInit {
  veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.veiculoService.getVeiculos().subscribe((data) => {
      this.veiculos = data;
    });
  }
}
