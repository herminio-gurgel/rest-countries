# Frontend Mentor - Solução do desafio para a API REST Countries com alternador de tema

Esta é uma solução para o [desafio da API REST Countries com alternador de tema do Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Índice

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Ferramentas](#ferramentas)
  - [Instruções](#instruções)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
- [Sobre](#sobre)
  - [Autor](#autor)
  - [Relato de desenvolvimento](#relato-de-desenvolvimento)

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- Ver todos os países da API na página inicial
- Pesquisar por um país usando um campo de `input`
- Filtrar países por região
- Clicar em um país para ver informações mais detalhadas em uma página separada
- Navegar pelos países fronteiriços na página de detalhes
- Alternar o esquema de cores entre modo claro e escuro _(opcional)_

### Captura de tela

![](./public/Screenshot%202025-08-20%20at%2012-13-23%20REST%20Countries.png)

### Links

- URL da solução: [https://www.frontendmentor.io/solutions/rest-countries-api-with-vue-and-typescript-Qdv1ftydLv](https://www.frontendmentor.io/solutions/rest-countries-api-with-vue-and-typescript-Qdv1ftydLv)
- URL do site ao vivo: [https://rest-countries-two-jet.vercel.app/](https://rest-countries-two-jet.vercel.app/)

## Meu processo

### Ferramentas

Durante este projeto,trabalhei com:

- Composables Vue.js para lógica reutilizável e separar funções da lógica de negócio da renderização do componente
- Gerenciamento de estado com Pinia para armazenar o tema corrente com persistência
- Testes unitários com Vitest e Vue Test Utils
- Design responsivo com Vuetify

### Instruções

O ambiente já está pronto para uso com Dev Container. Basta ter o Docker instalado e seguir as instruções do seu editor ou IDE para se conectar ao contêiner de desenvolvimento.

Caso prefira rodar o projeto localmente, é recomendável utilizar a versão do `Node` **22.17.1**.

Instalar dependências:

```bash
npm install
```

Rodar o servidor de desenvolvimento:

```bash
npm run dev
```

### Desenvolvimento contínuo

Áreas que quero continuar desenvolvendo no futuro:

- Usar mais estados para controlar a aplicação
- Implementar i18n para tornar o app multilíngue

# Sobre

## Autor

- Github - [Hermínio Gurgel](https://github.com/herminio-gurgel)
- Frontend Mentor - [@herminio-gurgel](https://www.frontendmentor.io/profile/herminio-gurgel)
- Linkedin - [in/herminio-gurgel](https://www.linkedin.com/in/herminio-gurgel/)

## Relato de desenvolvimento

Desenvolvi esse projeto como parte da reorganização dos meus portfólios e consolidação dos conhecimentos sobre Vue que tive ao longo dos últimos anos.

Primeiramente decidi que usaria Vue em conjunto com o TypeScript, focando principalmente na qualidade de código com testes automatizados e uso de linters para garantir que o código seja o mais confiável possível.

Para garantir o fluxo mais seguro utilizei o `lint-staged` para garantir que cada commit fosse verificado por:

- ESLint
- Checagem de tipos do TypeScript
- Testes do Vitest
- Formatação básica com Prettier

### Ambiente de desenvolvimento

Usei Docker com Dev Container configurado com as ferramentas básicas, como `Node v22.17.1` e algumas extensões úteis para o `VS Code`

### Ferramentas

Escolhi o [Vuetify](https://vuetifyjs.com/en/) como biblioteca de componentes e o pacote [@yusifaliyevpro/countries](https://www.npmjs.com/package/@yusifaliyevpro/countries) para lidar com as requisições da API, que disponibiliza uma maneira perfeita de interagir com o [REST Countries](https://restcountries.com/) e já fornece suporte completo e seguro para `Typescript`.

Além disso, utilizei do [Pinia](https://pinia.vuejs.org/) para gerenciar o estado do tema e o [Pinia Plugin Persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/) para persistir qual tema o usuário prefere.

Por fim, [Vue Router](https://router.vuejs.org/) define as rotas, navegação e componentes de layout da aplicação.

### Funcionamento

A aplicação pode ser resumida em duas views que executam a requisição para a API durante o `onBeforeMount` e, com base nisso, retornam os dados requisitados ou mensagens de erro para o usuário.

A paginação e filtros na home são feitos com os dados recebidos da API através de mapeamento no lado do cliente utilizando a reatividade do Vue, já que a API em si não fornece suporte para paginação, somente fornecendo todos os dados de uma só vez.

### Desafios durante o desenvolvimento

Lidar com questões da interface em si não tive nenhum problema, até pelo tamanho do projeto, foi fácil lidar com os componentes, lógica e Flexbox.

O que pode ter dado um certo "trabalho" foi aplicar os testes, o que não foi exatamente uma dificuldade; na verdade, foi um facilitador. Percebi o quanto isso ajudou a evitar erros e refatoração excessiva de código. E quando eventualmente precisei refatorar, os testes garantiram uma segurança a mais nas alterações.
