# Programação de Funcionalidades

A aplicação Web encontra-se hospedada no GitHub Pages e pode ser acessada através do link abaixo:
> - [NeuroKids] (https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-neurodiversidade/src/)

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais


|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|-----------------|
|RF-001|A aplicação deve reunir todos os animais registrados para adoção, por um usuario, em um único local.| ALTA | Wesley Bruno | profile.html, profileController.js |
|RF-009|A aplicação deve fornecer informações que ajudem a pais e profissionais a lidarem com crianças neurodiversas.| ALTA | Pedro Rodrigues | identificar_na_infancia.html |
|RF-010|A aplicação deve indicar atividades para crianças neurodiversas no ambiente escolar.|ALTA| Wesley Bruno | atividades_escolares_tdah.html atividades_escolares_tea.html atividades_escolares_tod.html atividades_imprimir_tdah.html atividades_imprimir_tea.html orientacoes_pedagogicas.html plano_escolar_tod.html |
|RF-009|A aplicação deve fornecer informações que ajudem a pais e profissionais a lidarem com crianças neurodiversas.|ALTA| Pedro Rodrigues | ambiente_familiar.html |
|RF-001|A aplicação deve conter uma página principal de apresentação dos conteúdos.|ALTA| Martha Beatriz | index.html
|RF-007|A aplicação deve conter uma sessão específica para crianças neurodiversas.|ALTA| Pedro Rodrigues | area_infantil.html |
|RF-008|A aplicação deve conter jogos interativos para crianças neurodiversas.|MÉDIA| Pedro Rodrigues | atividade_cores.html |
|RF-014|A aplicação deve conter campos de pesquisa nas páginas necessárias.|MÉDIA| Martha Beatriz | index.html
|RF-011|A aplicação deve conter uma página de feedback. Não é preciso estar logado.|MÉDIA| Pedro Rodrigues | feedback.html |
|RF-003|A aplicação deve permitir que o usuário faça login. |ALTA| Wesley Bruno | login.html |
|RF-015|A aplicação deve oferecer a funcionalidade de compartilhamento de conteúdo nas redes sociais.|BAIXA| Martha Beatriz |index.html|
|RF-012|A aplicação deve deve conter uma página de ajuda ao usuário.|MÉDIA| Martha Beatriz | ajuda_acesso_aplicacao.html; ajuda_atividades_aplicacao.html; ajuda_configuracao_conta.html; guia-alterarconfiguracoes-perfil.html; guia-avaliacao-desempenho.html; guia-como-excluir-conta.html; guia-compartilhamento-conteudos.html; guia-interacao-conteudos.html; guia-mudanca-email-e-senha.html; guia-niveis-dificuldade.html; guia-realizar-atividades.html; guia-verificar-problemas-conexao.html. |
|RF-002|A aplicação deve permitir que o usuário crie uma conta de acesso. |ALTA| Wesley Bruno | cadastro.html|
|RF-004|A aplicação deve permitir a visualização do perfil.|ALTA|Gustavo Novaes|perfil.html|
|RF-005|A aplicação deve permitir editar as informações do perfil.|ALTA|Gustavo Novaes|editar-perfil.html; alterar-senha.html|
|RF-006|A aplicação deve permiti que o usuário exclua sua conta.|ALTA|Gustavo Novaes|excluir-conta.html|

### Requisitos não Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|-----------------|
|RNF-009|A aplicação deve informar o usuário caso tente inserir algum dado inválido no formulário de cadastro e de editar o perfil. |MÉDIA| Wesley Bruno | input_invalid.css / celular.js, confirma_senha.js, email.js, nome.js, senha.js |
|RNF-005|A aplicação deve armazenar os dados de forma segura em conformidade com a LGPD (Lei Geral de Proteção dos Dados).|ALTA| Wesley Bruno | Cryptography.js


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
