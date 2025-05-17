import { Component, OnInit } from '@angular/core';
import { ViacepService } from '../viacep.service';
import { ViaCepModel } from '../models/viaCepModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  viaCepModel: ViaCepModel = new ViaCepModel();
  cep: string;

  constructor(
    private viaCepService: ViacepService
  ) { }

  ngOnInit(): void {
  }

  buscaCep() {
    this.viaCepService.getCep(this.cep)
      .subscribe(resposta => {
        if (resposta.estado == null) {
          alert('Cep não encontrado!');
        }
        this.viaCepModel.bairro = resposta.bairro;
        this.viaCepModel.localidade = resposta.localidade;
        this.viaCepModel.estado = resposta.estado;
        this.viaCepModel.logradouro = resposta.logradouro;

      })

  }
}
