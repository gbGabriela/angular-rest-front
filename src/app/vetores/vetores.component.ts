import { Component, OnInit } from '@angular/core';
import { Estado } from '../entidades/estado';
import { ServicoEstado } from '../servicos/servico.estado';
import { Observable } from 'rxjs';

@Component({
  selector: 'vetor-component'
  ,templateUrl: 'vetores.component.html'
  ,styleUrls: ['vetores.component.html']
})
export class VetoresComponent implements OnInit{

  estados$ : Observable<Estado[]>;

  constructor(private servico: ServicoEstado){

  }

  ngOnInit(){
    this.estados$ = this.servico.buscar();
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
