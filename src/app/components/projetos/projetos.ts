import { Component, signal } from '@angular/core';
import { ModalProjeto } from './modal-projeto/modal-projeto';

interface Projeto {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlRepositorio: string;
  tecnologias: string[];
}

@Component({
  imports: [ModalProjeto],
  selector: 'app-projetos',
  templateUrl: './projetos.html',
})
export class Projetos {
  public readonly projetoSelecionado = signal<Projeto | undefined>(undefined);

  public readonly projetos: Projeto[] = [
    {
      titulo: 'Gerador de Certificados Online',
      descricao:
        'API para geração de certificados em PDF, com autenticação via JWT, processamento assíncrono utilizando RabbitMQ e geração de arquivos ZIP para download. Possui testes unitários e de integração para validação das principais regras de negócio e fluxos da aplicação.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/JuliaaHartmann/gerador-de-certificados-online',
      tecnologias: [
        'C#',
        '.NET 10',
        'ASP.NET Core Web API',
        'Entity Framework Core',
        'SQL Server',
        'RabbitMQ',
        'JWT',
        'Swagger',
      ],
    },
    {
      titulo: 'Controle de Bar',
      urlImagem: 'gif/controledebar.gif',
      urlRepositorio: 'https://github.com/JuliaaHartmann/controle-de-bar',
      tecnologias: [
        'C#',
        '.NET 10',
        'Entity Framework Core',
        'ASP.NET Core',
        'SQL Server',
        'Dapper',
        'AutoMapper',
        'MSTest',
        'Moq',
        'Playwright',
      ],
      descricao: `Sistema web para gerenciamento de bares: mesas, garçons, produtos, contas e pedidos, com isolamento de dados por estabelecimento (multi-tenant). ASP.NET Core, testes de unidade, integração e E2E, com deploy na Azure.`,
    },
    {
      titulo: 'Escola de Cursos',
      urlImagem: 'gif/escoladecursos.gif',
      urlRepositorio: 'https://github.com/JuliaaHartmann/escola-de-cursos',
      tecnologias: [
        'C#',
        '.NET 10',
        'ASP.NET Core MVC',
        'Entity Framework Core',
        'SQL Server',
        'GitHub Actions',
        'Azure',
      ],
      descricao: `Sistema web para gerenciamento de uma escola de cursos, desenvolvido com ASP.NET Core MVC, com gerenciamento de cursos, categorias, módulos, turmas, alunos, instrutores e matrículas. O projeto utiliza arquitetura em camadas, Entity Framework Core e SQL Server, com CI/CD configurado por meio do GitHub Actions e deploy na Azure.`,
    },
  ];
}
