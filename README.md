![Mkplace](https://www.mkplace.org/assets/fwdlogos/logo-final-curvas-mkplaceV2.png)

<h3 align="center">Mkplace Technology Challenge</h3>

---
### :page_facing_up: Descrição

Este repositório consiste em um projeto desenvolvido como requisito pela Mkplace Technology para o processo seletivo de Desenvolvedor Backend.

### :dart: Desafio

Desenvolver uma API REST para gestão de produtos, possibilitanto a visualização e a filtragem por "Nome", "Marca", "Vendedor", e "Faixa de preço", podendo também ver detalhes de um produto específico.

Consiste numa Aplicação CRUD (Create, Read, Update and Delete) com os seguintes critérios:

- Listar produtos com filtro: `/products`
- Exibir detalhes do produto: `/product/[slug-do-produto]`

### 🛠 Tecnologias Utilizadas

- Node.js + Express
- Typescript
- Mongoose (Para conexão com MongoDB)

Além de alguns frameworks que auxiliaram na codificação:
```
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "module-alias": "^2.2.2",
    "mongoose": "^6.7.1",
    "nodemon": "^2.0.20",
    "slugify": "^1.6.5"
```

### 🔧 Instruções

Primeiramente, é importante que você tenha em sua máquina o Node instalado. Caso ainda não tenha, faça o download do [Node](https://nodejs.org/en/) aqui.

Após isso, faça a clonagem do repositório:

1 - Utilize `git clone https://github.com/Lkduarte/MkplaceChallenge.git` para a clonagem.

2 - Crie o arquivo `.env` na raiz da pasta, siga o exemplo do arquivo `.env-example` para preencher as informações com seu banco de dados.

3 - Instale as dependencias necessárias utilizando `npm install`

4 - Utilize `npm run dev` para executar do projeto, ou caso prefira, utilize `npm run build` para que ele seja compilado em JavaScript e inicializado.

### 🚀 Utilização

Foi utilizado o Software [Insomnia](https://insomnia.rest/download) para a realização dos testes.

### Seller (Vendedor)

Antes de criar os produtos, é necessário inicialmente criar um Vendedor, para que o mesmo, seja atrelado aos produtos pelo seu ID:

POST `/seller` - Passando as informações do vendedor pelo corpo da requisição

![Post-Seller](https://user-images.githubusercontent.com/71477357/199992548-45c0e4ae-adf2-41f6-b93a-7e6aa75f2a96.JPG)

Também existem outras rotas para Vendedor, possibilitando uma filtragem de maneira mais eficiente:

GET `/sellers` - Retorna toda a listagem de vendedores

GET `/seller/seller_id` - Retorna um vendedor específico referente ao Id inserido

GET `/sellersBySector/sector` - Retorna uma lista de vendedores referentes ao setor inserido

GET `/sellersByName/name` - Retorna um ou mais vendedores que contenham o nome inserido

PUT `/seller/seller_id` - Atualiza o vendedor inserido com as informações passadas pelo corpo da requisição

DELETE - `/seller/seller_id` - Exclui o vendedor inserido pelo id

### Product (Produto)

Após a criação de pelo menos 1 Vendedor, é possível criar um produto, e atrela-lo ao vendedor criado acima utilizando:

POST `/product` - Passando as informações do produto pelo corpo da requisição

![Post-Produto](https://user-images.githubusercontent.com/71477357/199997239-06bed054-c17c-4da3-8408-3a38ef207cb3.JPG)

O Slug do produto é criado automaticamente com o auxilio do Slugify

Da mesma forma, existem outras rotas que podem ser utilizadas para uma melhor filtragem dos produtos:

GET `/products` - Retorna toda a listagem de produtos

GET `/product/[slug-do-produto]` - Retorna um produto específico baseado no slug inserido

GET `/product/id` - Retorna um produto específico baseado no id inserido

GET `/productsByName/name` - Retorna uma lista de produtos que contenham o nome inserido

GET `/productsByBrand/brand` - Retorna uma lista de produtos da marca inserida

GET `/productsBySeller/seller_id` - Retorna uma lista de produtos que foram atrelados ao vendedor inserido, como por exemplo, o vendedor que criamos acima, retornaria nosso produto `Iphone 13 Pro Max 512gb Cinza` ou demais produtos, caso houvesse mais de 1 produto cadastrado para este vendedor

GET `/productsByPriceRange/PriceRange` - Retorna uma lista de produtos que estejam dentro da faixa de preço inserida, como por exemplo:

- utilizando `/productsByPriceRange/1000-3000` nos traria uma listagem apenas dos produto que estejam na faixa de R$1000,00 a R$3000,00

PUT `/product/id` - Atualiza o produto inserido com as informações passadas pelo corpo da requisição

DELETE `/product/id` - Exclui o produto inserido pelo id

### :man: Autor

Feito por Lucas Nunes Duarte Do Nascimento :wave::wave: Entre em contato!🚀

[LinkedIn](https://www.linkedin.com/in/lucas-nunes-nascimento/)











