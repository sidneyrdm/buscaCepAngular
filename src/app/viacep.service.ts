import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViaCepModel } from './models/viaCepModel';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiURL: string = 'https://viacep.com.br/ws/'

  constructor(private http: HttpClient) {
   }

   getCep(cep: string){
      return this.http.get<ViaCepModel>(this.apiURL + cep +'/json');
   }

}
