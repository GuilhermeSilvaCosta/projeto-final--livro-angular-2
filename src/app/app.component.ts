import { Component } from '@angular/core';
import { ContatosDataBaseService } from './servicos/contatos-data-base.service';
import { ContatoModel } from './modelos/contato-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-final';

  contatoClicado: ContatoModel;

  constructor(private dataBaseService: ContatosDataBaseService){}

  enviarDetalhe(id): void {
    this.contatoClicado = this.dataBaseService.getContato(id);
  }
}
