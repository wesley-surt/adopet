# Programação de Funcionalidades

A aplicação Web encontra-se hospedada no GitHub Pages e pode ser acessada através do link abaixo:
> - [Adopet] (https://wesley-surt.github.io/adopet/)

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais


|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|-----------------|
|RF-001|A aplicação deve reunir todos os animais registrados para adoção, por um usuario, em um único local.| ALTA | Wesley Bruno | profile.html, card-animal/style.css, responsive_components/card_animal/style.css, profileController.js, AnimalView.js |
|RF-015|A aplicação deve exibir uma ficha com dados importantes de quem está colocando os animais para adoção.| ALTA | Wesley Bruno | advertiser_profile.html, advertiserProfileController.js, circle-photo-advertiser.css, form/style_2.css, field/style_2.css, field/style_4.css, button/style_2.css |
|RF-006|A aplicação deve permitir registro de animais para adoção.| ALTA | Wesley Bruno | register_animal_adoption.html, animalController.js, style_register_animal_adoption.css |
|RF-007|A aplicação deve permitir filtrar animais por região/Estado.| ALTA | Wesley Bruno | function filtrar() no arquivo animalsController.js |
|RF-008|A aplicação deve conter uma página de perfil do usuário.| ALTA | Wesley Bruno | profile.html, style_profile.css, profileController.js |
|RF-009|A aplicação deve permitir o CRUD do perfil do usuário.| ALTA | Wesley Bruno | edit_profile.html, style_edit_profile.css, editProfileController.js, register.html, style_register.css, registerController.js, UserEntities.js |
|RF-010|A aplicação deve conter uma página inicial.| ALTA | Wesley Bruno | index.html, style_index.css |
|RF-011|A aplicação deve conter uma página de login.| ALTA | Wesley Bruno | login.html, style_login.css, loginController.js |
|RF-012|A aplicação deve permitir ao usuário adotante visualizar as informações do animal para adoção em uma página separada.| ALTA | Wesley Bruno | animal_profile.html, style_animal_profile.css, animalProfileController.css |
|RF-013|A aplicação deve exibir as informações do tutelar do pet em uma página separada, caso o adotante queira saber quem é o responsável pelo animal.| ALTA | Wesley Bruno | advertiser_profile.html, style_advertiser_profile.css, advertiserProfileController.js |

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
| imAnNgo        | Boolean           | Confirma se a conta é de uma ONG ou não   | true                                           |
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


## Interessado em parceria
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Number            | Identificador único do registro feito     | sdf65s6f5a6sdf564g                             |
| ngoId          | Number            | Identificador único da ONG                | sdf65s6f5a6sdf564g                             |
| userId         | Number            | Identificador único da pessoa interessada | sdf65s6f5a6sdf564g                             |


## Evento
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Number            | Identificador único do registro feito     | sdf65s6f5a6sdf564g                             |
| ngoId          | Number            | Identificador único da ONG                | sdf65s6f5a6sdf564g                             |
| name           | String            | Nome do evento                            | Levana fundo para animais de rua               |
| locale         | String            | Local do evento                           | Rua caringa 475, Betania - Contagem (MG)       |
| date           | String            | Data do evento                            | 21/02/2024                                     |
| photo          | String            | Imgagem para representar o evento         | https://imgur.api/idDaImagem                   |


## Campanha
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Number            | Identificador único do registro feito     | sdf65s6f5a6sdf564g                             |
| ngoId          | Number            | Identificador único da ONG                | sdf65s6f5a6sdf564g                             |
| photo          | String            | Imgagem para representar o evento         | https://imgur.api/idDaImagem                   |
