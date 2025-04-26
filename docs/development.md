# Programação de Funcionalidades

A aplicação Web encontra-se hospedada no GitHub Pages e pode ser acessada através do link abaixo:
> - [Adopet] (https://wesley-surt.github.io/adopet/)

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais


|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|-----------------|
|RF-001|A aplicação deve reunir todos os animais registrados para adoção, por um usuario, em um único local.| ALTA | Wesley Bruno | profile.html, card-animal/style.css, responsive_components/card_animal/style.css, profileController.js, AnimalView.js |
|RF-002|A aplicação deve permitir registro de animais para adoção.| ALTA | Wesley Bruno | register_animal_adoption.html, animalController.js, style_register_animal_adoption.css |
|RF-003|A aplicação deve permitir filtrar animais por região/Estado.| ALTA | Wesley Bruno | function filtrar() no arquivo animalsController.js |
|RF-004|A aplicação deve conter uma página de perfil do usuário.| ALTA | Wesley Bruno | profile.html, style_profile.css, profileController.js |
|RF-005|A aplicação deve permitir o CRUD do perfil do usuário.| ALTA | Wesley Bruno | edit_profile.html, style_edit_profile.css, editProfileController.js, register.html, style_register.css, registerController.js, UserEntities.js |
|RF-006|A aplicação deve conter uma página inicial.| ALTA | Wesley Bruno | index.html, style_index.css |
|RF-007|A aplicação deve conter uma página de login.| ALTA | Wesley Bruno | login.html, style_login.css, loginController.js |
|RF-008|A aplicação deve permitir que o usuário visualize as informações do animal que está para adoção em uma página separada.| ALTA | Wesley Bruno | animal_profile.html, style_animal_profile.css, animalProfileController.css |
|RF-009|A aplicação deve exibir as informações do tutor do animal, que está para adoção.|ALTA| Wesley Bruno |  advertiser_profile.html, style_advertiser_profile.css, advertiserProfileController.js |
|RF-010|A aplicação deve exibir mensagens de erro se o usuário tentar inserir alguma informação inválida nos campos de entrada de dados.| ALTA | Wesley Bruno | ListaMensagens.js, ListaErros.js, ValidacaoHelper.js, ValidationForSelect.js, AlertaHelper.js |

### Requisitos não Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|-----------------|
|RNF-002|A aplicação deve persistir os dados no banco de dados MongoDB. |ALTA| Wesley Bruno | No backend: dbConnect.js |
|RNF-003|A aplicação deve possuir um backend.|ALTA| Wesley Bruno | [adopet-api](https://github.com/wesley-surt/adopet-api) |
|RNF-003|A aplicação deve criptografar as informações.|ALTA| Wesley Bruno | CryptographyService.js |
|RNF-006|A aplicação não deve permitir que o usuário acesse a página de perfil, registro de animais ou a página de edição de perfil caso não esteja logado.|ALTA| Wesley Bruno | routeGuard.js |


## Descrição das estruturas:

## Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (inteiro)  | Identificador único do usuário            | sdf65s6f5a6sdf564g                             |
| name           | String            | Nome registrado, nome social ou apelido   | angelica                                       |
| photo          | String            | Foto de rosto do usuário                  | 6806b5565d60c4e38476c890                       |
| email          | String            | Conecta o usuário a uma conta cadastrada  | angelica@gmail.com                             |
| telephone      | String            | Número de celular pessoal do usuário      | 31944445555                                    |
| cep            | String            | Evidencia a região do usuário             | 00111222                                       |
| city           | String            | Evidencia a cidade do usuário             | Belo Horizonte                                 |
| state          | String            | Evidencia o estado do usuário             | MG                                             |
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
| photo          | String            | Foto do animal                            | 6806b5565d60c4e38476c890                       |
| size           | String            | Diz o porte/tamanho do animal             | medio                                          |
| age            | String            | Diz a idade do animal                     | 11                                             |
| city           | String            | Evidencia a cidade do animal              | Belo Horizonte                                 |
| state          | String            | Evidencia o estado do animal              | MG                                             |
| cep            | String            | Evidencia a região do animal              | 00111222                                       |
| about          | String            | Descreve um pouco sobre o animal, suas caracteristicas e outros assuntos importantes | Este pet é carinhoso e dócil. Tomou todas as vacinas e está sendo bem cuidado. Espero que alguém tão cuidadoso quanto eu o adote. |
