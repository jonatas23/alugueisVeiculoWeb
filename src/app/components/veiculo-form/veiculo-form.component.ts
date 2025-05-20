import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {VeiculoService} from '../../services/veiculo.service';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-veiculo-form',
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    ButtonDirective
  ],
  standalone: true,
  templateUrl: './veiculo-form.component.html',
  styleUrl: './veiculo-form.component.css'
})
export class VeiculoFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  tipos = [
    { label: 'Carro', value: 'CARRO' },
    { label: 'Moto', value: 'MOTO' }
  ];

  constructor(private fb: FormBuilder, private veiculoService: VeiculoService) {}

  ngOnInit() {
    this.form = this.fb.group({
      modelo: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  salvar() {
    if (this.form.valid) {
      const veiculo = { ...this.form.value, disponivel: true };
      this.veiculoService.salvar(veiculo).subscribe(() => {
        this.form.reset();
      });
    }
  }
}

