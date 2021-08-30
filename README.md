<p align="center"><img width='150px' src='https://github.com/AdaoBJr/GoShoesRedux/blob/main/src/files/images/shoes-animation.gif' />
<h1 align="center"> GoShoes-Redux Project - Responsive Page </h1>
<h2 align="center">GitHub Pages:</h2>
 
 <div align="center">
   <a href="https://adaobjr.github.io/GoShoesRedux/" target="_blank">
    <img width='100px' src='https://image.flaticon.com/icons/png/512/5222/5222347.png' target="_blank" />
 </div>
 
<h5 align="center">Clique na imagem</h5>

## 🧑🏻‍💻👩🏾‍💻Desenvolvido por

@[AdaoBJr](https://github.com/AdaoBJr)
<br>


---

# Objetivos do Projeto

Uma versão simplificada, sem persistência no banco de dados, de uma **Loja Online de Sapatos**.
A partir dessas demandas, desenvolvi uma aplicação onde os usuários poderão:
  - Visualizar produtos na categoria de calçados a partir da _API do Mercado Livre_;
  - Cadastrar um nome de usuário, e-mail e senha na tela de Login para ter acesso ao carrinho de compras e favoritos;
  - Visualizar os detalhes do produto escolhido clicando na imagem do produto;
  - Ter um perfil único dentro da tela de perfil com o cadastro realizado na tela de Login;
  - Poder trocar a foto de perfil;
  - Interagir com os produtos recebidos pela API de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Dar sequência no processo de compra indo para a Tela de Pagamento onde o usuário deve inserir os seus dados de cartão de crédito para confirmar a compra;
  - Interagir com os produtos recebidos pela API de modo a adicioná-los e removê-los da página de itens favoritos;
  - Interagir com os produtos através da paginação das telas;
  - Realizar Filtros com base nos valores e fretes dos produtos clicando no ícone de filtro na tela principal da aplicação;
  - Trocar o modo de exibição entre LightMode e DarkMode;
  - Interação da aplicação com a construção de testes unitários (RTL) para os componentes das telas;
  - E por fim, finalizar a compra (simulada) dos itens selecionados sendo dirigido para uma Tela de Compra Realizada (podendo iniciar todo processo, caso queira).

## Víde de Demonstração da Aplicação
<div align="center">
   <a href="https://youtu.be/RZ52lNzavYQ" target="_blank">
    <img width='600px' src='https://github.com/AdaoBJr/GoShoesRedux/blob/main/src/files/images/img-youtube.png' target="_blank" />
 </div>
 
 
## Documentação da API do Mercado Livre

A página _web_ consome os dados da API do _Mercado Livre_ com o seguinte _endpoint_:

- Para buscar itens de uma categoria por termo:
  - Tipo da requisição: `GET`
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

Se você quiser aprender mais sobre a API do _Mercado Livre_, veja a [documentação](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas).
 
 
