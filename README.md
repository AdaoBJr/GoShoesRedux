<p align="center"><img width='150px' src='https://github.com/AdaoBJr/GoShoesRedux/blob/main/src/files/images/shoes-animation.gif' />
<h1 align="center"> GoShoes-Redux Project - Responsive Page </h1>  </p>
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
  - Interagir com os produtos recebidos pela API de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Interagir com os produtos recebidos pela API de modo a adicioná-los e removê-los da página de itens favoritos;
  - Interagir com os produtos através da paginação das telas;
  - Trocar o modo de exibição entre LightMode e DarkMode;
  - E por fim, finalizar a compra (simulada) dos itens selecionados sendo dirigido para uma página de checkout (podendo iniciar todo processo, caso queira).

## Documentação da API do Mercado Livre

A página _web_ consome os dados da API do _Mercado Livre_ com o seguinte _endpoint_:

- Para buscar itens de uma categoria por termo:
  - Tipo da requisição: `GET`
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

Se você quiser aprender mais sobre a API do _Mercado Livre_, veja a [documentação](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas).
 
 
