# Tudo Sobre Vasco da Gama — Loja do Torcedor

Site estático (HTML/CSS/JS puro, sem build) para vender produtos do Vasco da Gama
via link de afiliado da Amazon, com visual minimalista preto/branco (com o escudo
oficial do clube), filtro por categoria, público (adulto/infantil) e busca.

## Como colocar seu tag de afiliado

Edite **um único arquivo**: `assets/js/affiliate.js`

```js
const AFFILIATE_TAG = "SEU-TAG-AFILIADO"; // troque pelo seu tag da Amazon Associates
```

Assim que a sua conta na Amazon Associates for aprovada, troque esse valor pelo
seu tag (ex.: `tudovasco-20`) e todos os botões "Ver na Amazon" do site passam a
usar seu link de afiliado automaticamente.

Cada produto vira uma busca na Amazon (`amazon.com.br/s?k=...&tag=...`) em vez de
um link fixo de produto — isso evita links quebrados quando um anúncio específico
sai do ar, e sempre leva a pessoa para resultados atualizados.

## Como adicionar/editar produtos

Edite `assets/js/products.js`. Cada produto é um objeto assim:

```js
{
  name: "Camisa Vasco Retrô 1898",
  category: "camisas",       // precisa bater com um id em CATEGORIES
  audience: "adulto",        // "adulto" | "infantil" | "unissex"
  keywords: "camisa retro vasco da gama 1898", // usado na busca da Amazon
  desc: "Homenagem ao centenário e à história cruzmaltina.",
  img: "camisa-retro",       // nome do arquivo em assets/img/products/ (sem .jpg)
}
```

Para criar uma categoria nova, adicione um item em `CATEGORIES` no mesmo arquivo.
Para trocar a foto de um produto, salve um `.jpg` em `assets/img/products/` e
aponte o campo `img` para o nome do arquivo (sem extensão).

## Como publicar (grátis)

Qualquer uma dessas opções funciona sem precisar de servidor:

- **GitHub Pages**: suba os arquivos para um repositório e ative Pages nas
  configurações do repositório.
- **Netlify / Vercel**: arraste a pasta do projeto no painel deles (deploy manual)
  ou conecte o repositório Git.

Não há dependências, banco de dados nem processo de build — é só HTML/CSS/JS.

## Estrutura

```
index.html                     página única
assets/css/styles.css          visual (minimalista, preto/branco/vermelho)
assets/js/affiliate.js         configuração do tag de afiliado
assets/js/products.js          catálogo de produtos e categorias
assets/js/app.js               filtros, busca e renderização
assets/img/escudo-vasco.svg    escudo oficial do Vasco (usado no cabeçalho/hero)
assets/img/products/*.jpg      1 foto ilustrativa por produto (59 arquivos)
```

## Sobre as imagens

- **Escudo do Vasco**: é o brasão real do clube, usado apenas para identificação
  visual em um site de torcedores (o rodapé já deixa claro que o site não tem
  vínculo oficial com o clube).
- **Fotos de produto**: são imagens **ilustrativas geradas digitalmente**, uma
  para cada um dos 59 produtos do catálogo (sem o escudo — testamos aplicar o
  escudo nas fotos e o próprio gerador de imagem bloqueou por risco de violação
  de marca registrada). Não são fotos reais dos anúncios da Amazon: copiar foto
  de produto direto da Amazon (ou de qualquer loja) viola direito autoral de
  quem tirou a foto e o Contrato de Operação do Programa de Associados da
  Amazon, que só autoriza usar imagens de produto via Product Advertising API
  oficial (liberada depois que sua conta gerar as primeiras vendas
  qualificadas). Quando você tiver acesso a essa API, dá para trocar os
  arquivos em `assets/img/products/` pelas fotos oficiais de cada item (o campo
  `img` de cada produto em `products.js` aponta para o nome do arquivo).

## Compliance com a Amazon Associates

O rodapé já traz o aviso obrigatório de divulgação de afiliado. Antes de divulgar
o site, confirme se sua conta Amazon Associates está aprovada e ativa — contas
novas costumam ter um prazo (ex.: 180 dias) para gerar as primeiras vendas
qualificadas, senão são desativadas.
