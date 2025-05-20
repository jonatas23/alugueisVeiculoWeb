import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ClienteService} from '../../services/cliente.service';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-cliente-form',
  imports: [
    ReactiveFormsModule,
    ButtonDirective
  ],
  standalone: true,
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11)]]
    });
  }

  salvar() {
    if (this.form.valid) {
      this.clienteService.salvar(this.form.value).subscribe(() => {
        this.form.reset();
      });
    }
  }

}
