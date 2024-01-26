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

Nesta seção, apresentamos a documentação dos testes realizados pelo desenvolvedor para verificar os requisitos funcionais e não funcionais da aplicação web adopet.

## Plano de Testes de Software

Para cada caso de teste (CT), associarei o requisito, seja funcional ou não funcional, que está sendo verificado. Além disso, indicaremos o artefato (página) onde o teste será executado, juntamente com sua descrição.

**Caso de Teste** | **CT01 - Cadastrar animal perdido**
 :--------------: | ------------
**Procedimento**  | 1) Aqui deverá ser descrito o passo a passo do que fazer para realizar o teste.
**Requisitos associados** | Nesta linha vai ser descritos todos os requisitos associados a este caso de teste, incluindo sua numeração.
**Artefatos associados** | Aqui ficará todos os arquivos relacionados.
**Resultado esperado** | O que se espera do teste. O resultado final.
**Dados de entrada** | As informações que devem ser inseridos.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Apresento, a seguir, o relatório contendo as evidências dos testes de software conduzidos no sistema, seguindo o plano de testes previamente definido. Cada caso de teste está documentado e é acompanhado por vídeos que validam o correto funcionamento das funcionalidades. A seguir, compartilho alguns exemplos.

|*Caso de Teste*                                 |TC-01 - Cadastro de animal perdido                                   |
|---|---|
|Requisito Associado |Número e a descrição do(s) requisito(s) associado(s).|
|Link do vídeo do teste realizado: | Aqui deve ficar o link do video | 

## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

# Testes de Usabilidade

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

<!-- - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)-->

## Cenários de Teste de Usabilidade Geral

Deve ser descrito aqui todos os cenarios possíveis que pessoas reais teríam. Abaixo acompanha alguns exemplos.

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Seu filho apresenta comportamentos incomuns e você suspeita que possa estar relacionado com autismo. Encontre no site a pagina que trata desse assunto.|
| 2             |Você deseja compartilhar os conteúdos encontrados.  Encontre no site uma forma de compartilhar o conteúdo desejado.|
| 3             |Você não é cadastrado. Encontre o formulário de cadastro e realize um cadastro.|



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

## Avaliação dos Testes de Usabilidade

Abaixo acompanha exemplo de como deve ser a avaliação

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



