import { Estado } from '../entidades/estado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable()
export class ServicoEstado{

  private readonly URL = "http://localhost:8080/ws/estado/";
  
  estado: Estado = new Estado();

  constructor(private http: HttpClient){

  }

  adicionar() : void {
    this.estado = new Estado();
  }

  excluir(i:number) : void {
  }

  alterar(i:number) : void{
  }

  buscar(){
    return this.http.get<Estado[]>(this.URL).pipe(take(1));
  }

}
