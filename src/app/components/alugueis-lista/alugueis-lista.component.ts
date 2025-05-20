import {Component, OnInit} from '@angular/core';
import {AluguelService} from '../../services/aluguel.service';
import {MessageService} from 'primeng/api';
import {Aluguel} from '../../model/Aluguel';
import {TableModule} from 'primeng/table';
import {Toast} from 'primeng/toast';
import {ButtonDirective} from 'primeng/button';
import {DatePipe, NgIf} from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-alugueis-lista',
  imports: [
    TableModule,
    Toast,
    ButtonDirective,
    DatePipe,
    DropdownModule,
    FormsModule,
    NgIf
  ],
  standalone: true,
  templateUrl: './alugueis-lista.component.html',
  styleUrl: './alugueis-lista.component.css',
  providers: [MessageService]
})
export class AlugueisListaComponent implements OnInit {
  alugueis: Aluguel[] = [];
  carregando = false;

  statusFiltro: any = null;
  statusOpcoes = [
    { label: 'Todos', value: null },
    { label: 'Ativos', value: true },
    { label: 'Inativos', value: false }
  ];

  constructor(
    private aluguelService: AluguelService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.carregar();
  }

  devolver(aluguel: Aluguel) {
    this.aluguelService.devolver(aluguel.id).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Devolvido', detail: `Veículo ${aluguel.veiculo} devolvido com sucesso.` });
      this.carregar();
    });
  }

  carregar() {
    this.carregando = true;
    this.aluguelService.listar(this.statusFiltro).subscribe({
      next: data => {
        this.alugueis = data;
        this.carregando = false;
      },
      error: () => {
        this.carregando = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao carregar aluguéis.' });
      }
    });
  }

}
