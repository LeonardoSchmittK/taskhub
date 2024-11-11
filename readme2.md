# Plano de Teste

**TaskHub**

_versão 1.0_

## Histórico das alterações

| Data       | Versão | Descrição       | Autor(a)                |
| ---------- | ------ | --------------- | ----------------------- |
| 28/10/2024 | 1.0    | Primeira rodada | Leonardo Schmitt Kreuch |

## 1 - Introdução

Este documento consta a documentação dos testes

## 2 - Requisitos a Testar

### Requisitos funcionais:

| Identificador | Requisito Funcional                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| RF1           | Permitir que os usuários se cadastrem na plataforma com diferentes níveis de acesso (administrador, usuário comum). |
| RF2           | Possibilitar a criação, edição e exclusão de projetos.                                                              |
| RF3           | Permitir a atribuição de membros a projetos específicos.                                                            |
| RF4           | Capacidade de criar, editar e excluir tarefas.                                                                      |
| RF5           | Atribuir tarefas a membros específicos.                                                                             |
| RF6           | Definir prazos e prioridades para as tarefas.                                                                       |
| RF7           | Oferecer uma seção de backlog para armazenar tarefas pendentes.                                                     |
| RF8           | Permitir que os administradores movam tarefas do backlog para projetos ativos.                                      |

### Requisitos não funcionais

| Identificador | Requisito Não Funcional                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| RNF1          | Garantir resposta rápida e eficiente da plataforma mesmo em períodos de carga elevada.                                         |
| RNF2          | Implementar medidas robustas de segurança para proteger dados confidenciais e informações do projeto.                          |
| RNF3          | Projetar a plataforma para escalabilidade, garantindo que possa lidar com um aumento no número de usuários e projetos.         |
| RNF4          | Desenvolver uma interface intuitiva e fácil de usar para garantir uma curva de aprendizado mínima.                             |
| RNF5          | Assegurar que a plataforma seja compatível com diferentes navegadores e dispositivos para oferecer flexibilidade aos usuários. |
| RNF6          | Garantir alta disponibilidade da plataforma, minimizando tempo de inatividade para manutenção.                                 |
| RNF7          | Implementar um sistema de backup regular e procedimentos eficientes de recuperação de dados em caso de falhas.                 |
| RNF8          | Permitir integrações com outras ferramentas, como sistemas de e-mail ou ferramentas de comunicação.                            |
| RNF9          | Fornecer documentação detalhada para usuários e administradores sobre o funcionamento da plataforma e suas funcionalidades.    |
| RNF10         | Garantir conformidade com regulamentações de privacidade e segurança de dados relevantes.                                      |
| RNF11         | Integração OAuth para acessar a plataforma com e-mail da empresa (Google).                                                     |

## 3 - Tipos de teste

Esta seção deve conter os tipos de testes escolhidos para cada iteração do projeto.
Pode-se definir inicialmente apenas os tipos de testes que serão usadas na próxima iteração, mas é possível também já registrar eventuais tipos de teste que se espera utilizar nas demais iterações.
Com base no guia de testes, indique os tipos de testes que melhor se adéquam aos requisitos, tipo da aplicação e seus recursos disponíveis e, caso necessário complemente ou forneça mais detalhes da técnica e dos critérios de completude sugeridos no guia para cada tipo de teste indicado.

- Teste de interface de usuário;
- Teste de performance;
- Teste de carga;
- Teste de stress;
- Teste de segurança e controle de acesso;
- Teste de instalação;

## 3.1 - Teste de interface de usuário

- Estes testes são de cunho mais visual. Os testes são de experiência do usuário, se ele acessa o que deseja com facilidade. Também é testado a parte de interface para testar a manutenção das cores, fontes e estilos.

- Os testes devem considerar o diálogo com usuários, ou se não for possível, considerar ferramentas como o Lucky Orange para heatmaps etc.

- [x] O usuário deve reconhecer claramente onde fica a parte de login e criação de conta;
- [x] As cores, fontes e estilos devem se manter em todo o fluxo;
- [x] Os elementos devem responder ao tamanho da tela do usuário;
- [x] Os ícones dos inputs devem fazer sentido com seu conteúdo;
- [ ] O efeito de mouse sobre o botão deve manter a legibilidade do botão;
- [ ] Ao clicar na logo do cabeçalho o usuário deve retornar à página principal;
- [ ] O input de pesquisa no cabeçalho deve ser mais claro no que significa;
- [ ] Ao acessar uma página inexistente o usuário deve ler a mensagem de que não foi encontrada a página procurada;
- [ ] Todo o site deve manter-se em inglês;
- [ ] Os botões de destaque devem ser o ponto focal de cliques;
- [ ] Verificar a existência de rageglicks

## 3.1 - Teste de carga;

- Estes testes são de cunho de performance. Para testá-los, é preciso infundir no servidor uma carga excessiva ou cuidadosamente medida;

- [x] O servidor deve suportar um pico de 1000 usuários;
- [ ] Começar com poucos requests e aumentar gradativamente até que o servidor alcançar um nível de instabilidade;
