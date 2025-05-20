import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Cliente} from '../../model/Cliente';
import {Veiculo} from '../../model/Veiculo';
import {ClienteService} from '../../services/cliente.service';
import {VeiculoService} from '../../services/veiculo.service';
import {Calendar} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {AluguelService} from '../../services/aluguel.service';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-aluguel-form',
  imports: [
    Calendar,
    DropdownModule,
    ReactiveFormsModule,
    ButtonDirective
  ],
  standalone: true,
  templateUrl: './aluguel-form.component.html',
  styleUrl: './aluguel-form.component.css'
})
export class AluguelFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  clientes: Cliente[] = [];
  veiculos: Veiculo[] = [];

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private veiculoService: VeiculoService,
    private aluguelService: AluguelService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      clienteId: [null, Validators.required],
      veiculoId: [null, Validators.required],
      dataInicio: [null, Validators.required],
      dataFim: [null, Validators.required]
    });

    this.clienteService.getClientes().subscribe(c => this.clientes = c);
    this.veiculoService.getVeiculosDisponiveis().subscribe(v => this.veiculos = v);
  }

  salvar() {
    if (this.form.valid) {
      this.aluguelService.alugar(this.form.value).subscribe(() => {
        this.form.reset();
      });
    }
  }

}
