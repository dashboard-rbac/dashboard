# [DASHBOARD - RBAC](https://dashboard-rbac.github.io/dashboard/)

Esse projeto foi desenvolvido durante a disciplina de **Gestão de Projetos(TT060)** do curso de **Análise e Desenvolvimento de Sistemas** na **Faculdade de Tecnologia da Unicamp**.

## Quem é a RBAC?

A RBAC, sigla para Rede Brasileira de Aprendizagem Criativa, é uma organização sem fins lucrativos cujo objetivo é promover a aprendizagem criativa no Brasil. A aprendizagem criativa é uma abordagem pedagógica que busca desenvolver habilidades e competências para a vida no século XXI, como a criatividade, a colaboração, a resolução de problemas complexos e o pensamento crítico.

## Objetivo

O objetivo deste projeto é desenvolver um dashboard para a RBAC que permita visualizar e analisar dados sobre a aprendizagem criativa no Brasil. O dashboard deve conseguir mostrar métricas do uso da plataforma, dando visibilidade para a equipe da RBAC sobre o impacto do seu trabalho.

## Tecnologias

O dashboard será desenvolvido utilizando as linguagens de programação **HTML**, **CSS** e **JavaScript**, com as bibliotecas **chart.js** e **leaflet** para visualização de dados. Outra tecnologia que será utilizada é o **nominatim**, um serviço de geocodificação que permite converter endereços em coordenadas geográficas.

## Como executar?
Para executar o projeto, você precisará de um servidor HTTP. Uma opção é utilizar a extensão **Live Server** do **Visual Studio Code**. Para isso, basta clicar com o botão direito no arquivo **index.html** e selecionar a opção **Open with Live Server**. Outra forma é utilizar o **Python**, executando o comando `python -m http.server` no terminal e acessando o endereço **http://localhost:8000** no navegador.

## Estrutura do Projeto
O projeto está dividido em raiz e diretórios, sendo eles:
- **raiz**: contém o arquivo **index.html** e o arquivo **README.md**.
- **api-mocked-responses**: contém os arquivos utilizados para simular as respostas da API divididos nos seguintes arquivos:
  - **groups.json**: lista de grupos com nome, tipo, coordenadas e quantidade de membros.
  - **groups-and-users-evolution.json**: lista com a quantidade de grupos e usuários mensalmente.
  - **posts-by-knowledge-area.json**: lista com a quantidade de posts por área de conhecimento.
  - **top-5-users.json**: lista com os 5 usuários mais ativos na plataforma.
  - **users-activity.json**: lista com a quantidade de usuários ativos mensalmente.
  - **users-count-by-state.json**: lista com a quantidade de usuários por estado.
- **images**: contém as imagens utilizadas no projeto divididas nos seguintes diretórios:
  - **footer**: contém as imagens utilizadas no rodapé.
  - **header**: contém as imagens utilizadas no cabeçalho.
  - **map-icons**: contém as imagens utilizadas nos ícones do mapa.
  - **navbar**: contém as imagens utilizadas na barra de navegação.
- **openapi**: contém o arquivo **openapi.yaml**.
- **scripts**: contém os arquivos utilizados no projeto divididos em raiz e diretórios, sendo eles:
  - **raiz**: **api.js**, **sandwich-menu.js** e **utils.js**.
  - **graphs**: contém os arquivos utilizados para criar os gráficos divididos nos seguintes arquivos:
    - **filters**: contém os arquivos utilizados para criar os filtros dos gráficos.
      - **groups-and-users-evolution.js**: arquivo utilizado para criar os filtros do gráfico de evolução de grupos e usuários.
      - **map.js**: arquivo utilizado para criar os filtros do mapa de densidade de usuários e localização de grupos relevantes por estado.
      - **posts-by-knowledge-area.js**: arquivo utilizado para criar os filtros do gráfico de postagens por área de conhecimento.
      - **top-5-users.js**: arquivo utilizado para criar os filtros da tabela dos 5 usuários mais ativos.
      - **users-activity.js**: arquivo utilizado para criar os filtros do gráfico de atividade dos usuários.
    - **brazil-states.js**: contém as coordenadas geográficas dos limites dos estados brasileiros.
    - **groups-and-users-evolution.js**: arquivo utilizado para criar o gráfico de evolução de grupos e usuários.
    - **map.js**: arquivo utilizado para criar o mapa de densidade de usuários e localização de grupos relevantes por estado.
    - **posts-by-knowledge-area.js**: arquivo utilizado para criar o gráfico de postagens por área de conhecimento.
    - **top-5-users.js**: arquivo utilizado para criar a tabela dos 5 usuários mais ativos.
    - **users-activity.js**: arquivo utilizado para criar o gráfico de atividade dos usuários.
- **styles**: contém o arquivo **styles.css**.

## Desenvolvedores

- Bruno Ricardo Corrêa - | [LinkedIn](https://www.linkedin.com/in/brunorcorrea/) | [GitHub](https://github.com/brunorcorrea) | 
- Mitsuo Luan de Andrade Miyazato - | [LinkedIn](https://www.linkedin.com/in/mitsuo-miyazato/) | [GitHub](https://github.com/mitsuomiyazato) |
- Nicolas Andreatti de Santana - | [LinkedIn](https://www.linkedin.com/in/niiandreatti/) | [GitHub](https://github.com/niiandreatti) |
- Rafael Caleffi Onofre - | [LinkedIn](https://www.linkedin.com/in/rafael-caleffi-onofre-616934230/) | [GitHub](https://github.com/rafael-caleffi) |
- Thiago Gregio - | [LinkedIn](https://www.linkedin.com/in/thiago-gregio/) | [GitHub](https://github.com/Gr3gio) |
- Vinícius Iutaka Nogueira Fujioka - | [LinkedIn](http://www.linkedin.com/in/vinícius-fujioka-157569235) | [GitHub](https://github.com/Vinicius-Fujioka) | 
