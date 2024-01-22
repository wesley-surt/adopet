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
|RNF-004|A aplicação deve possuir um backend.|ALTA| Wesley Bruno | api/src/* |


## Descrição das estruturas:

## Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (inteiro)  | Identificador único do usuário            | sdf65s6f5a6sdf564g                             |
| name           | String            | Nome registrado, nome social ou apelido   | angelica                                       |
| photo          | String            | Foto de rosto do usuário                  | https://imgur.api/idDaImagem                   |
| email          | String            | Conecta o usuário a uma conta cadastrada  | angelica@gmail.com                             |
| telephone      | String            | Número de celular pessoal do usuário      | (31)944445555                                  |
| cep            | String            | Evidencia a região do usuário             | 00111222                                       |
| city           | String            | Evidencia a cidade do usuário             | Belo Horizonte                                 |
| state          | String            | Evidencia o estado do usuário             | MG                                             |
| imAnNGO        | Boolean           | Confirma se a conta é de uma ONG ou não   | true                                           |
| about          | String            | Descreve um pouco sobre o usuário, seus interes entre outras coisas, as quais deseja relatar | Me chamo Angelica. Tenho 39 anos e trabalho com animais de petshop. Ocorre muito caso de donos abandonarem seus pets na loja e não temos como cuidar de tantos animaizinhos. |


## Animal
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero            | Identificador único do animal             | sdf65s6f5a6sdf564g                             |
| userId         | Number            | Identificar o(a) responsável pelo animal registrado | sdf65s6f5a6sdf564g                   |
| name           | String            | Nome do animal                            | Amora                                          |
| status         | String            | Diz o status do registro                  | Perdido                                        |
| characteristics1 | String          | Diz a primeira caracteristica marcante do animal | Dócil                                   |
| characteristics2 | String          | Diz a segunda caracteristica marcante do animal | Amigável                                 |
| measure        | String            | Diz a medida da idade do animal           | meses                                          |
| photo          | String            | Foto do animal                            | https://imgur.api/idDaImagem                   |
| size           | String            | Diz o porte/tamanho do animal             | medio                                          |
| age            | String            | Diz a idade do animal                     | 11                                             |
| city           | String            | Evidencia a cidade do animal              | Belo Horizonte                                 |
| state          | String            | Evidencia o estado do animal              | MG                                             |
| cep            | String            | Evidencia a região do animal              | 00111222                                       |
| about          | String            | Descreve um pouco sobre o animal, suas caracteristicas e outros assuntos importantes | Este pet é carinhoso e dócil. Tomou todas as vacinas e está sendo bem cuidado. Espero que alguém tão cuidadoso quanto eu o adote. |


## Interessados em parcerias
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Number            | Identificador único do registro feito     | sdf65s6f5a6sdf564g                             |
| userId         | Number            | Identificador único da pessoa interessada | sdf65s6f5a6sdf564g                             |
