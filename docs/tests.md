# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 
<!--
Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)
  -->

# Teste de Software

Nesta seção, apresentamos a documentação dos testes realizados pelo grupo para verificar os requisitos funcionais e não funcionais da aplicação web NeuroKids.

## Plano de Testes de Software

Para cada caso de teste (CT), associaremos o requisito, seja funcional ou não funcional, que está sendo verificado. Além disso, indicaremos o artefato (página) onde o teste será executado, juntamente com sua descrição.

**Caso de Teste** | **CT01 - Acesso página principal**
 :--------------: | ------------
**Procedimento**  | 1) O usuário deve acessar o link infomado em dados de entrada e ter acesso a página principal de conteúdo.
**Requisitos associados** | RF-001	A aplicação deve conter uma página principal de apresentação dos conteúdos.<br>RNF-006	A aplicação deve adotar um design visual amigável para o público-alvo, evitando layouts escuros que possam prejudicar a leitura.
**Artefatos associados** | index.html e style.css
**Resultado esperado** | Carregamento de página bem executado.
**Dados de entrada** | [NeuroKids - Link de Acesso](https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-neurodiversidade/src/)
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Cadastrar Usuário**
 :--------------: | ------------
**Procedimento**  | 1a) O usuário, estando no desktop e não estando logado, deve clicar na palavra "entrar", então será redirecionado para a página de login, caso não tenha conta, ele deve realizar um cadastro em "clique aqui para se cadastrar", será então redirecionado para a página de cadastro.<br>1b) O usuário, estando no mobile e não estando logado, deve clicar no menu hamburguer e em sequência clicar no ícone de entrar, então será redirecionado para a página de login, caso não tenha conta, ele deve realizar um cadastro em "clique aqui para se cadastrar", será então redirecionado para a página de cadastro.<br>2) O usuário estando na página de cadastro pode escolher sua foto de perfil, deve informar seu nome no campo "nome", deve selecionar o gênero dentro das opções disponíveis no campo "gênero", deve selecionar uma área de atuação dentro das disponíveis no campo "atuação", deve informar seu e-mail, em formato válido, no campo "e-mail", pode informar o número de telefone móvel para contato no campo "celular" (opcional), deve digitar uma senha que tenha entre 4 e 8 dígitos, seguindo as recomendações de caractéres especiais no momento de digitação, no campo "senha", deve preencher o campo "nascimento" com sua data de nascimento, deve digitar novamente a senha no campo "confirmar senha" e deve preencher o campo "CEP" com o CEP da sua residência/trabalho, os campos "cidade" e "estado" são preenchidos automaticamente após a verificação do CEP, o usuário é livre para deixar um pouco sobre ele no campo "nos conte um pouco sobre você".<br>3) Após todos os campos terem sido preenchidos corretamente o usuário deve clicar em cadastrar para finalizar o processo de cadastro, tendo sucesso será redirecionado para a tela de login.
**Requisitos associados** | RF-002 A aplicação deve permitir que o usuário crie uma conta de acesso.<br> RNF-009 A aplicação deve informar o usuário caso tente inserir um dado inválido no formulário de cadastro.<br> RNF-005 A aplicação deve armazenar os dados de forma segura em conformidade com a LGPD (Lei Geral de Proteção dos Dados).<br> RNF-004 A aplicação deve persistir os dados em JSON Server ou LocalStorage.
**Artefatos associados** | cadastro.html, cadastro/style.css, cadastro.js Cryptography.js e localStorage (navegador), api_cep.js, api_imgur.js, exibe_oculta_senha.js, celular.js, senha.js, confirma_senha.js, email.js e nome.js.
**Resultado esperado** | Criação de cadastro, dados cadastrais criptografados persistência dos dados no localStorage
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Logar Usuário**
 :--------------: | ------------
**Procedimento**  | 1a) O usuário, estando no desktop e não estando logado, deve clicar na palavra "entrar" no menu de navegação superior, então será redirecionado para a página de login, já tendo feito um cadastro previamente, ele deve informar o e-mail cadastrado e a senha cadastrada. Caso os dados informados sejam iguais aos informados no momento do cadastro o usuário será redirecionado a página principal, contudo, estando agora logado, no menu de navegação superior onde estava "entrar" agora irá estar escrito "sair".<br>1b) O usuário, estando no mobile e não estando logado, deve clicar no menu hamburguer e no ícone de "entrar", então será redirecionado para a página de login, ja tendo feito um cadastro previamente, ele deve informar o e-mail e senha cadastrados. Caso os dados informados sejam iguais aos informado no momento do cadastro o usuário será redirecionado a página principal, contudo, estando agora logado, no menu hamburguer onde existia o ícone de "entrar" agora será exibido o ícone de "sair".<br>2) Após estar logado o usuário terá acesso às seções restritas de acesso ao perfil e área infantil.
**Requisitos associados** | RF-003 A aplicação deve permitir que o usuário faça login.
**Artefatos associados** | login.html, login/style.css, login.js
**Resultado esperado** | Logar usuario, liberando acesso às paginas restritas (perfil.html e area_infantil.html).
**Dados de entrada** | email e senha do usuário válidos.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT4 - Enviar feedback**
 :--------------: | ------------
**Procedimento**  | 1a) Pelo desktop o usuário deve clicar na palavra "feedback" no menu de navegação superior para ser redirecionado para a página de feedback. <br>1b) Pelo mobile o usuário deve clicar no menu hamburguer e depois clicar no ícone de feedback para ser redirecionado para a página de feedback. <br>2) Estando na página de feedback, o usuário pode preencher o campo "nome" com o próprio nome e o campo "e-mail" com seu próprio e-mail, esses dois campos são opcionais. <br>3) O usuário pode selecionar um dos 03 emojis disponíveis para relatar sua satisfação/experiência com a aplicação, sendo opcional. <br> O usuário deve inserir uma mensagem sobre o assunto desejado no campo "mensagem", sendo obrigatório para o envio. <br>4) O usuário pode selecionar o tipo do feedback fornecido, selecionando uma das opções disponíveis (bug, sugestão ou outro). <br>5) Após todos os passos acima terem sido executados o usuário pode clicar no borão enviar e o feedback será direcionado para a equipe desenvolvedora ou excluir e os campos preenchidos serão esvaziados.
**Requisitos associados** | RNF-012 A aplicação deve enviar o feedback do usuário para uma conta de email específica para isso, exclusiva própria dela.<br> RF-011	A aplicação deve conter uma página de feedback.
**Artefatos associados** | feedback.html, feedback_style.css e feedback.js
**Resultado esperado** | Feedback enviado com sucesso.
**Dados de entrada** | Inserção de dados válidos no formulário de feedback.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Sessão específica para crianças neurodiversas e atividades interativas**
 :--------------: | ------------
**Procedimento**  | 1a) O usuário, no desktop e estando logado, deve clicar na palavra "Área Infantil" onde será redirecionado para uma tela específica para crianças neurodiversas, contendo as atividades interativas.<br>1b) O usuário, no mobile e estando logado, deve clicar no ícone "Infantil" onde será redirecionado para uma tela específica para crianças neurodiversas, contendo as atividades interativas.<br>2) O usuário tendo acessado a sessão infantil pode escolher umas das três atividades disponíveis em "cards" e clicar em "jogue".
**Requisitos associados** | RF-007	A aplicação deve conter uma sessão específica para crianças neurodiversas.<br>RF-008	A aplicação deve conter jogos interativos para crianças neurodiversas.
**Artefatos associados** | area_infantil.html, area_infantil_style.css, atividade_cores.html, atividade_cores_style.css, jogo-matematica.html, jogo-matematica.css, jogo-matematica.js, jogo-matematica-fase2.html, jogo-matematica-fase2.js, jogo-matematica-fase3.html, jogo-matematica-fase3.js, jogo-matematica-fase4.html, jogo-matematica-fase4.js, atividade_contagem_objetos.html, atividade_contagem_objetos.css, jogo_contagem_objetos.js
**Resultado esperado** | Acesso área infantil e conseguir realizar as atividades interativas.
**Dados de entrada** | Realizar login previamente.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Informações para pais e profissionais e sugestão de atividades escolares**
 :--------------: | ------------
**Procedimento**  | 1) O usuário, na página principal, deve rolar a página para baixo, encontrando uma sessão com foco nos pais e profissionais que lidam com crianças neurodiversas.<br>2a) O usuário querendo ter acesso a sugestões de atividade que podem ser realizadas no ambiente escolar, deve clicar em "saiba mais" no card que corresponde às atividades escolares propostas, será redirecionado para a tela onde serão dispostas 07 atividades propostas, o usuário decide qual acessar pela sua necessidade clicando novamente em "saiba mais" no devido card.<br>2b) O usuário querendo ter acesso sobre como lidar com crianças neurodiversas em 02 diferentes contextos ou procurando saber como é possível identificar a neurodiversidade ainda na infância, pode clicar em "saiba mais" no card que for de maior interesse do usuário, então será redirecionado para a página que trata sobre o assunto correspondente.<br>3a) O usuário, tendo acessado o card de sua preferência via desktop, pode decidir buscar por uma palavra específica em todo o corpo do texto, utilizando a lupa de busca, ou pode decidir compartilhar o conteúdo disponível de 05 formas diferentes (ícone de link - copia o link da página, ícone do twitter - compartilha pelo twitter do usuário, ícone do facebook - compartilha no facebook do usuário, ícone de e-mail - permite que o usuário compartilhe o conteúdo através do seu e-mail, ícone do linkedin - compartilha no linkedin do usuário).<br>3b) O usuário, tendo acessado o card de sua preferência via mobile, não estará habilitado a buscar por palavra específica, mas, assim como no desktop, conseguirá compartilhar o link das mesmas 05 formas diferentes clicando no botão "compartilhar" ao final de cada página com essa funcionalidade.
**Requisitos associados** | RF-009	A aplicação deve fornecer informações que ajudem a pais e profissionais a lidarem com crianças neurodiversas.<br>RF-010	A aplicação deve indicar atividades para crianças neurodiversas no ambiente escolar.<br>RF-014	A aplicação deve conter campos de pesquisa nas páginas necessárias.<br>RNF-007	A aplicação deve conter conteúdos de atividades propostas para crianças.
**Artefatos associados** | ambiente_escolar.html, ambiente_escolar.css, ambiente_familar.html, atividades_escolares_tdah.html, atividades_escolares_tdah/style.css, atividades_escolares_tea.html, atividades_escolares_tea/style.css, atividades_escolares_tod.html, atividades_escolares_tod/style.css, atividades_imprimir_tdah.html, atividades_imprimir_tdah/style.css, atividades_imprimir_tea.html, atividades_imprimir_tea/style.css, identificar_na_infancia.html, orientacoes_pedagogicas.html, orientacoes_pedagogicas/style.css, plano_escolar_tod.html, plano_escolar_tod/style.css, sugestoes_atividades_escolares.html e sugestoes_atividades_escolares/style.css
**Resultado esperado** | Acesso aos cards fluida.
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 - Descrição da aplicação**
 :--------------: | ------------
**Procedimento**  | 1a) O usuário, via desktop, deve, no menu de navegação superior, clicar em "sobre nós" para ser redirecionado para a página onde se encontram as descrições da aplicação, tais como: quem somos, nossa missão, visão e valores.<br>1b) O usuário, via mobile, deve, clicar no menu hamburguer, e em sequência, clicar no ícone "sobre nós" e ser redirecionado para a página onde se encontram as descrições da aplicação, tais como: quem somos, nossa missão, visão e valores.
**Requisitos associados** | RF-013	A aplicação deve conter uma página onde descreva sobre a aplicação.
**Artefatos associados** | sobre_nos.html
**Resultado esperado** | Acesso sem problemas à página Sobre Nós
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 - Acesso à Página de Ajuda**
 :--------------: | ------------
**Procedimento**  | 1a) Para usuários utilizando desktop, basta clicar na opção "Ajuda" no menu de navegação superior para ser redirecionado à página que apresenta os cards de conteúdo.<br> 1b) Em dispositivos móveis, basta clicar sobre o ícone de "Ajuda" localizado no topo, para ser direcionado aos cards.<br>2b) Na página inicial, encontram-se cards informativos abrangendo tópicos como configurações de conta, solução de problemas ao acessar ou utilizar o Neurokids, além de orientações sobre como explorar a guia de atividades infantis. Destaca-se ainda a seção de "Artigos Mais Visualizados", permitindo que os usuários acessem diretamente os conteúdos mais acessados.<br>
**Requisitos associados** | RF-012	A aplicação deve deve conter uma página de ajuda ao usuário.
**Artefatos associados** | ajuda_acesso_aplicacao.html; ajuda_atividades_aplicacao.html; ajuda_configuracao_conta.html; guia-alterarconfiguracoes-perfil.html; guia-avaliacao-desempenho.html; guia-como-excluir-conta.html; guia-compartilhamento-conteudos.html; guia-interacao-conteudos.html; guia-mudanca-email-e-senha.html; guia-niveis-dificuldade.html; guia-realizar-atividades.html; guia-verificar-problemas-conexao.html.
**Resultado esperado** | A página de ajuda ser carregada corretamente, exibindo informações relevantes e recursos de suporte ao usuário.
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT09 - Editar Perfil**
:--------------: | ------------
**Procedimento** |1a) Pelo desktop o usuário deve clicar em “Perfil” no menu de navegação superior (cabeçalho). Dessa forma será direcionado para a página de perfil.<br>1b) Pelo dispositivo mobile o usuário deve clicar no ícone verde com nome identificado como “Perfil”. Dessa forma será direcionado para a página de perfil.<br>2) Na página de perfil o usuário deve clicar no botão “Editar perfil” para editar as informações que foram previamente cadastradas.<br>3) Após terminar de editar as informações o usuário deve clicar no botão “Salvar” para persistir as novas informações preenchidas.<br>4) O usuário deve clicar no botão "Editar senha" Dessa forma será direcionado para página de edição de senha. O Usuário deverá colocar sua nova senha e clicar no botão "Salvar". Assim a senha terá sido alterada.
**Requisitos associados** | RF-004	A aplicação deve permitir a visualização do perfil.<br>RF-005	A aplicação deve permitir editar as informações do perfil.
**Artefatos associados** | perfil.html, editar-perfil.html
**Resultado esperado** |Preenchimento automático das informações já cadastradas nos campos da página editar perfil e a atualização das novas informaçoes editadas na página de perfil.
**Dados de entrada** |Opcional: Nome; Email; Gênero; Data de nascimento; CEP; Telefone; Imagem;
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT10 - Excluir conta**
:--------------: | ------------
**Procedimento** | 1a) Pelo desktop o usuário deve clicar em “Perfil” no menu de navegação superior (cabeçalho). Dessa forma será direcionado para a página de perfil.<br>1b) Pelo dispositivo mobile o usuário deve clicar no ícone verde com nome identificado com nome “Perfil”. Dessa forma será direcionado para a página de perfil.<br>2) Na página de perfil o usuário deve clicar em “Excluir conta”. O usuário será direcionado para uma página onde terá que confirmar se realmente deseja excluir a conta permanentemente. Se sim, o usuário deve clicar no botão “Confirmar”. Dessa forma a conta será excluída permanentemente.<br>3) Caso o usuário desista de excluir a conta deve clicar no botão “Cancelar”. Dessa forma será direcionado para a página de perfil.<br>
**Requisitos associados** | RF-006	A aplicação deve permiti que o usuário exclua sua conta.
**Artefatos associados** | excluir-conta.html
**Resultado esperado** | Exclusão permanente da conta.
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Apresentamos, a seguir, o relatório contendo as evidências dos testes de software conduzidos no sistema, seguindo o plano de testes previamente definido. Cada caso de teste está documentado e é acompanhado por vídeos que validam o correto funcionamento das funcionalidades. A seguir, compartilhamos alguns exemplos.

|*Caso de Teste*                                 |TC-01 - Acesso página principal                                   |
|---|---|
|Requisito Associado |RF-001	A aplicação deve conter uma página principal de apresentação dos conteúdos.<br>RNF-006	A aplicação deve adotar um design visual amigável para o público-alvo, evitando layouts escuros que possam prejudicar a leitura.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/99815953/2410b8a9-c681-413b-b46c-e82352c29ad5| 


|*Caso de Teste*                                 |TC-02 - Cadastrar usuário                                        |
|---|---|
|Requisito Associado | RF-002 A aplicação deve permitir que o usuário crie uma conta de acesso.<br>RNF-009 A aplicação deve informar o usuário caso tente inserir um dado inválido no formulário de cadastro.<br> RNF-005 A aplicação deve armazenar os dados de forma segura em conformidade com a LGPD (Lei Geral de Proteção dos Dados).<br> RNF-004 A aplicação deve persistir os dados em JSON Server ou LocalStorage.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/109616789/92484d2d-7bdc-4123-a813-641e5446fa9a| 

|*Caso de Teste*                                 |TC-03 - Logar Usuário                                        |
|---|---|
|Requisito Associado |  RF-003 A aplicação deve permitir que o usuário faça login.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/99815953/a7b0e36b-9e35-4188-8d82-092022aff194| 


|*Caso de Teste*                                 |TC-04 - Enviar feedback                                         |
|---|---|
|Requisito Associado |RNF-012 A aplicação deve enviar o feedback do usuário para uma conta de email especìfica para isso, exclusiva própria dela.<br> RF-011	A aplicação deve conter uma página de feedback.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/99815953/b3d6b1d6-a89d-4a0a-9282-cfd3634a97c8| 

|*Caso de Teste*                                 |TC-05 - Sessão específica para crianças neurodiversas e atividades interativas                                        |
|---|---|
|Requisito Associado |RF-007	A aplicação deve conter uma sessão específica para crianças neurodiversas.<br>RF-008	A aplicação deve conter jogos interativos para crianças neurodiversas.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/99815953/25352386-e676-4c8b-bb03-182d075adf3d| 

|*Caso de Teste*                                 |TC-06 - Informações para pais e profissionais e sugestão de atividades escolares                                         |
|---|---|
|Requisito Associado |RF-009	A aplicação deve fornecer informações que ajudem a pais e profissionais a lidarem com crianças neurodiversas.<br>RF-010	A aplicação deve indicar atividades para crianças neurodiversas no ambiente escolar.<br>RF-014	A aplicação deve conter campos de pesquisa nas páginas necessárias.<br>RNF-007	A aplicação deve conter conteúdos de atividades propostas para crianças.|
|Link do vídeo do teste realizado - parte 01: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/99815953/07192065-a4b3-492b-8334-2021ae88fca4| 
|Link do vídeo do teste realizado - parte 02: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/99815953/2f535c88-b927-4e0a-9874-ac81c17c2d51| 
|Link do vídeo do teste realizado - parte 03: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/99815953/94b70a10-bfe7-47e2-8d92-effc41af2c52| 

|*Caso de Teste*                                 |TC-07 - Descrição da aplicação                                        |
|---|---|
|Requisito Associado | RF-013	A aplicação deve conter uma página onde descreva sobre a aplicação.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/99815953/69babe4f-b35b-47a2-98d2-96af9e580417| 


|*Caso de Teste*                                 |TC-08 - Acesso à Página de Ajuda                                        |
|---|---|
|Requisito Associado | RF-012 A aplicação deve fornecer recursos de documentação acessíveis para ajudar os usuários a aproveitar ao máximo a aplicação.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/89950149/6aa0b526-8526-4323-ad44-9568ae6b0423 | 

|*Caso de Teste*                                 |TC-09 - Editar perfil                                        |
|---|---|
|Requisito Associado | RF-004	A aplicação deve permitir a visualização do perfil.<br>RF-005	A aplicação deve permitir editar as informações do perfil.|
|Link do vídeo do teste realizado - parte 01: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/112666344/35479de7-e377-456d-b245-9869eb2df2b5 |
|Link do vídeo do teste realizado - parte 02: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/112666344/80cfb2cb-a818-4b7c-8717-1c4d6cd7dafc | 

|*Caso de Teste*                                 |TC-10 - Excluir conta                                        |
|---|---|
|Requisito Associado | RF-006	A aplicação deve permiti que o usuário exclua sua conta.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/112666344/80669bf0-cd67-41d2-83a5-c3dc0b7bc8fb| 

## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

# Testes de Usabilidade

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

<!-- - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)-->

## Cenários de Teste de Usabilidade Geral

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Seu filho apresenta comportamentos incomuns e você suspeita que possa estar relacionado com autismo. Encontre no site a pagina que trata desse assunto.|
| 2             |Você deseja compartilhar os conteúdos encontrados.  Encontre no site uma forma de compartilhar o conteúdo desejado.|
| 3             |Você não é cadastrado. Encontre o formulário de cadastro e realize um cadastro.|
| 4             |Você já é cadastrado e deseja logar no site. Encontre o formulário de login e efetue a ação para logar.|
| 5             |Você deseja editar o seu perfil. Encontre no site a sessão para editar o perfil e edite pelo menos 3 informações.|
| 6             |Você está cadastrada (o) no site e está com dificuldades para excluir sua conta. Encontre no site a informação que te auxilia na exclusão da sua conta.|
| 7             |Você deseja saber mais sobre o site. Encontre a sessão que fale sobre a missão, visão e valores do site.|
| 8             |Você deseja jogar um dos jogos disponíveis na aplicação. Encontre a sessão de jogos, escolha um de sua preferência, e jogue até concluir todas as etapas do jogo.|
| 9             |Você deseja verificar o desempenho que teve nos jogos. Encontre o histórico de desempenho dos jogos.|
| 10            |Você gostou dos jogos do site e deseja enviar uma mensagem para a equipe por trás disso, elogiando o trabalho feito. Encontre no site a página que possibilita você enviar uma mensagem elogiando.|
| 11            |Você deseja excluir a sua conta permanentemente. Encontre a opção de excluir a conta e execute a ação.|



## Registro de Testes de Usabilidade Geral

Cenário 1: Seu filho apresenta comportamentos incomuns e você suspeita que possa estar relacionado com autismo. Encontre no site a pagina que trata desse assunto.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
|   1     | SIM             | 5                    | 09.39 segundos                  |
|   2     |       SIM       |        4             | 1 minuto e 31 segundos          |
|   3     |       SIM       |        5             | 1 minuto e 1 segundos           |
|   4    |       SIM        |       5            |      47 segundos             |
| **Média** | 0%            | 0                    | 208.39 segundos                 |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 07.44 segundos              |


    Comentários do usuario 3: Adorei por ter cores chamativas indicando os topicos, com letras grandes
 



Cenário 2: Você deseja compartilhar os conteúdos encontrados.  Encontre no site uma forma de compartilhar o conteúdo desejado.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
|    1    |      SIM        |         5            | 12.01 segundos                  |
|    2    |      SIM        |         5            | 50 segundos                     |
|    3    |      SIM        |         5            | 21 segundos                     |
|    4     |     SIM          |       5            |  8 segundos                     |
| **Média** | 0%            |      0               |      91.01 segundos           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 02.95 segundos              |


    Comentários do usuários 01: Ao copiar link alguma mensagem de sucesso poderia ser exibida pra mim, fiquei sem saber se copiou ou não.
    Comentários do usuários 04: Achei legal poder compartilhar em redes sociais diferentes, como Linkedln.
 


Cenário 3: Você não é cadastrado. Encontre o formulário de cadastro e realize um cadastro.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 4 min 42.56 segundos            |
|    2     |      SIM           |         5             |          4 minutos e 40 segundos                       |
|    3    |       SIM       |           4          | 41 segundos                     |
|    4    |       SIM       |           4          |  2 minutos e 15 segundos                     |
| **Média**     | 0%           | 0                | 538.56 segundos                         |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 54.02 segundos |


    Comentários do usuário 01: Ao inserir minha senha eu esperava que o campo de confirmar senha estivesse ao lado ou abaixo do campo para inserir a senha, minha única dificuldade foi nessa parte do layout.
    Comentários do usuário 03: No campo gênero ao invés de "não binário" sugiro colocar "prefiro não me identificar". Não acho que "atuação" é o melhor nome para o campo proposto. Me confundi com a palavra caracteres de início. Seria melhor se tivesse escrito "digitos".
     Comentários do usuário 04: O link para cadastro está muito escurecido e pequeno, poderia ser maior.
    

Cenário 4: Você já é cadastrado e deseja logar no site. Encontre o formulário de login e efetue a ação para logar.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 13.30 segundos                  |
|    2    |      SIM        | 5                    | 28 segundos                     |
| 3       | SIM             | 5                    | 26 segundos                     |
| 4 | SIM | 5 | 12 segundos |
| **Média**     | 0%           | 0                | 79.30 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 11.35 segundos |

   Comentários dos usuários:

Cenário 5: Você deseja editar o seu perfil. Encontre no site a sessão para editar o perfil e edite pelo menos 3 informações.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 1 minuto e 24.73 segundos       |
|     2    |        SIM         |        4              |            48 segundos                     |
| 3       | SIM             | 5                    | 14 segundos                     |
| 4 | SIM | 5 | 2 minutos e 7 segundos |
| **Média**     | 0%           | 0                | 273.73 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 25.50 segundos |


    Comentários do usuário 2: Consegui encontrar facilmente, porém, uma seção da informação sobre gênero estava escrito “masculino” ao invés da palavra “gênero”.
  
Cenário 6: Você está cadastrada (o) no site e está com dificuldades para excluir sua conta. Encontre no site a informação que te auxilia na exclusão da sua conta.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 09.71 segundos                  |
|    2     |       SIM          |          5            |            29 segundos                     |
| 3       | SIM             | 5                    | 7 segundos                      |
| 4 | SIM | 5 | 9.5 segundos |
| **Média**     | 0%           | 0                | 55.21 segundos                          |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 07.74 segundos |


    Comentários do usuário 4: Bem simples de fazer, está fácil de ser encontrado.




Cenário 7: Você deseja saber mais sobre o site. Encontre a sessão que fale sobre a missão, visão e valores do site.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 02.97 segundos                  |
|    2     |      SIM           |          5            |            5 segundos      |
| 3       | SIM             | 5                    | 6 segundos                      |
| 4 | SIM | 5 | 4.6 segundos |
| **Média**     | 0%           | 0                | 18.57 segundos                    |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 02.91 segundos |


    Comentários dos usuários:


Cenário 8: Você deseja jogar um dos jogos disponíveis na aplicação. Encontre a sessão de jogos, escolha um de sua preferência, e jogue até concluir todas as etapas do jogo.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 34.20 segundos                  |
|    2     |     NÃO          |         1           |             1 minuto e10 segundos                    |
| 3       | SIM             | 3                    | 52 segundos                     |
| 4 | SIM | 4 | 1 minuto e 32 segundos |
| **Média**     | 0%           | 0                | 248.20 segundos                         |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 11.94 segundos |


    Comentários do usuário: Apenas um jogo não consegui concluir, por causa que não tinha a resposta correta para marcar e finalizar, dando prosseguimento à atividade. Esse jogo se encontra no nível intermediário.
    Comentários do usuário 3: Foi fácil achar o jogo. Dei nota 3 por não mostrar o resultado do jogo ao completar todas as rodadas, dizendo se errei ou não. Se fosse mostrar em quais errei iria querer saber em quais cores errei (no jogo acerte as cores). O objetos não está funcionando.

Cenário 9: Você deseja verificar o desempenho que teve nos jogos. Encontre o histórico de desempenho dos jogos.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 10.30 segundos                  |
|    2     |       SIM          |         5             |                10 segundos                 |
| 3       | SIM             | 1                    | 1 minuto e 38 segundos          |
| 4 | SIM | 3 | 3 minutos e 10 segundos |
| **Média**     | 0%           | 0                | 308.30 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 02.50 segundos |


    Comentários do usuário 3: Me confundi. O resultado deveria ficar n própria tela de jogos. Ainda entrei no menu e na telas dos jogos antes de achar.



Cenário 10: Você gostou dos jogos do site e deseja enviar uma mensagem para a equipe por trás disso, elogiando o trabalho feito. Encontre no site a página que possibilita você enviar uma mensagem elogiando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 2 minutos e 27.46 segundos      |
|     2    |        SIM         |          5            |             5 minutos e 41 segundos                    |
| 3       | NÃO             | 1                    | 2 minutos e 38 segundos         |
| 4 | SIM | 5 | 1 minuto e 23 segundos |
| **Média**     | 0%           | 0                | 729.46 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 23.48 segundos |


    Comentários do usuário 3: Não sei falar inglês. Misturar português com inglês não faz sentido por residirmos no Brasil. Seria melhor se fosse fosse algo como "Fale conosco". Em outros sites as informações ficam todas no menu, mas este site as informações estão espalhadas. O link de contato também não funciona. No perfil também costuma ter só os dados pessoais.
    Comentários do usuário 4: Achei muito bacana o design, bem intuitivo e simples de usar.


Cenário 11: Você deseja excluir a sua conta permanentemente. Encontre a opção de excluir a conta e execute a ação.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 11.39 segundos                  |
|     2    |     SIM            |       5               |           10 segundos      |
| 3       | SIM             | 5                    | 16 segundos                     |
| 4 | SIM | 5 | 27 segundos |
| **Média**     | 0%           | 0                | 64.39 segundos                    |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 03.95 segundos |


    Comentários dos usuários:

## Cenários de Teste de Usabilidade Específico - Profissional Área da Psicologia

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             |Você é um profissional da área da psicologia e deseja buscar mais informações sobre como identificar a neurodiversidade na infância. Encontre no site o card que trata sobre o assunto e acesse.|
| 2             |Você é um profissional da área da psicologia e deseja se informar a respeito do TEA. Encontre no site o card que trata sobre o assunto e acesse.|
| 3             |Você é o responsável de uma criança com TDAH e busca atividades para realizar com a criança neurodiversa. Encontre a seção dedicada para atividades recomendadas.|


## Registro de Testes de Usabilidade Específico - Profissional Área da Psicologia

Cenário 1: Você é um profissional da área da psicologia e deseja buscar mais informações sobre como identificar a neurodiversidade na infância. Encontre no site o card que trata sobre o assunto e acesse.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 3                    | 2 minutos e 05.58 segundos      |
|  |  |  |  |
| **Média**     | 100%           | 3               | 2 minutos e 05.58 segundos      |


    Comentários do usuário 01: Como profissional, procuro um conteúdo mais específico acerca do que está sendo discutido na comunidade científica.




Cenário 2: Você é um profissional da área da psicologia e deseja se informar a respeito do TEA. Encontre no site o card que trata sobre o assunto e acesse.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 3                    | 59.75 segundos                  |
|  |  |  |  |
| **Média**     | 100%      | 0                    | 59.75 segundos                  |


    Comentários do usuário 01: O conteúdo precisa conter citação.


Cenário 3: Você é o responsável de uma criança com TDAH e busca atividades para realizar com a criança neurodiversa. Encontre a seção dedicada para atividades recomendadas.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 4       | SIM             | 5                    | 1 minuto e 12 segundos                 |
|  |  |  |  |
| **Média**     | 100%      | 0                    | 1 minuto e 12 segundos                |

    Comentários do usuário 04: Gostei bastante das atividades para o meu filho, vou imprimi-lás para fazer junto com ele. 


## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



