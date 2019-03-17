import { Component } from '@angular/core';
import { Estado } from '../entidades/estado';
import { ServicoEstado } from '../servicos/servico.estado';

@Component({
  selector: 'vetor-component'
  ,templateUrl: 'vetores.component.html'
  ,styleUrls: ['vetores.component.html']
})
export class VetoresComponent{

  constructor(private servico: ServicoEstado){
  }

  adicionar() : void {
    this.servico.adicionar();
  }

  excluir(i:number) : void {
    this.servico.excluir(i);
  }

  alterar(i:number) : void{
    this.servico.alterar(i);
  }
}
