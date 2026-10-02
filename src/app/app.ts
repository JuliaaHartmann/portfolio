import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Sobre } from './components/sobre/sobre';
import { Habilidades } from './components/habilidades/habilidades';
import { Projetos } from './components/projetos/projetos';

// Componente raiz (root) da aplicação, tudo carrega através dele
@Component({
  imports: [Navbar, Sobre, Habilidades, Projetos],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
