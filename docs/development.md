# Programação de Funcionalidades

A aplicação Web encontra-se hospedada no GitHub Pages e pode ser acessada através do link abaixo:
> - [NeuroKids] (https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-neurodiversidade/src/)

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais


|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|-----------------|
|RF-001|A aplicação deve reunir todos os animais registrados para adoção, por um usuario, em um único local.| ALTA | Wesley Bruno | profile.html, card-animal/style.css, responsive_components/card_animal/style.css, profileController.js, AnimalView.js |
|RF-003|A aplicação deve exibir uma ficha com dados importantes dos adotantes, de quem está colocando o animal para adoção e do próprio animal.| ALTA | Wesley Bruno | profile.html, animal.html, animal_profile.html, advertiser_profile.html, profileController.js, animalController.js, animalProfileController.js, advertiserProfileController.js, style_profile.css, style_animal_profile.css, style_advertiser.css, style_animal.css form/style_2.css, field/style_2.css, field/style_4.css, button/style_green.css, button/style_2.css |

### Requisitos não Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|-----------------|
|RNF-003|A aplicação deve persistir os dados no banco de dados MongoDB. |ALTA| Wesley Bruno | dbConnect.js |
|RNF-004|A aplicação deve possuir um backend.|ALTA| Wesley Bruno | src/api/* |


## Descrição das estruturas:

## Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (inteiro)  | Identificador único do usuário            | 1                                              |
| name           | Texto             | Nome registrado, nome social ou apelido   | angelica                                       |
| photo           | Object            | Foto de rosto do usuário                  | {"lastModified": 1678399500750, "lastModifiedDate": "2023-03-09T22:05:00.750Z", "name": "perfilFoto.png", "size": 195613, "type": "image/png", "webkitRelativePath": ""}              |
| email          | Texto             | Conecta o usuário a uma conta cadastrada  | angelica@gmail.com                             |
| password          | Texto             | Dá acesso ao usuário, dono da conta       | ange1415$1                                  |
| cellPhone        | Texto             | Número de celular pessoal do usuário      | (31)944445555                                |
| gender         | Texto             | Evidencia o gênero de quem está usando a aplicação | mulher                                |
| birth     | Texto             | Evidencia a idade de quem está usando a aplicação  | 14-04-1999                                 |
| cep       | Texto             | Evidencia a região do usuário             | 00111222                                            |
| cidade    | Texto             | Evidencia a cidade do usuário             | Belo Horizonte                                      |
| estado    | Texto             | Evidencia o estado do usuário             | MG                                                  |
| acting        | Texto             | Evidencia qual a relação do usuário com pessoas neurodivergentes, podendo ser, o próprio usuário, neurodivergente também | Pedagoga |
| about          | Texto             | Descreve um pouco sobre o usuário, seus interes entre outras coisas, as quais deseja relatar | Me chamo Angelica. Tenho 39 anos e trabalho com crianças. Meu interesse é aprender mais sobre transtornos para antender melhor as crianças com quem trabalho, caso sejam neuro divergentes |


## Resultado Do Jogo
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| gameName       | Texto             | Identificar o jogo registrado             | Acerte as cores                                |
| punctuation    | Numero            | Pontuação máxima do jogador               | 5                                              |
| attempt        | Numero            | Número total tentativas                   | 5                                              |
| performance    | Texto             | Evidencia o desempenho do jogador         | Alto                                           |
| date           | Texto             | Evidencia a data do resultado registrado  | 1/6/2023                                       |
