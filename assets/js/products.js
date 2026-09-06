/*
 * Catálogo de produtos "Tudo Sobre Vasco da Gama".
 *
 * Cada item vira um link de busca patrocinado na Amazon (com o seu tag de
 * afiliado anexado em affiliate.js). Isso evita links quebrados de ASIN e
 * sempre manda a pessoa para resultados reais e atualizados na Amazon.
 *
 * Para adicionar um produto novo, copie um objeto do array e ajuste os campos.
 * category:  usada nos filtros de categoria (bata com CATEGORIES abaixo)
 * audience:  "adulto" | "infantil" | "unissex"
 * keywords:  texto usado na busca da Amazon (seja específico, mas natural)
 * img:       nome do arquivo em assets/img/products/ (foto ilustrativa,
 *             gerada digitalmente — ver README para detalhes)
 */

const CATEGORIES = [
  { id: "camisas", label: "Camisas e Uniformes", icon: "👕" },
  { id: "moletons", label: "Moletons e Casacos", icon: "🧥" },
  { id: "infantil", label: "Roupas e Itens Infantis", icon: "🧒" },
  { id: "bones", label: "Bonés, Chapéus e Acessórios", icon: "🧢" },
  { id: "canecas", label: "Canecas e Copos", icon: "☕" },
  { id: "chaveiros", label: "Chaveiros, Pins e Bótons", icon: "🔑" },
  { id: "bandeiras", label: "Bandeiras e Flâmulas", icon: "🚩" },
  { id: "decoracao", label: "Quadros e Decoração", icon: "🖼️" },
  { id: "livros", label: "Livros e Biografias", icon: "📚" },
  { id: "brinquedos", label: "Brinquedos, Bonecos e Jogos", icon: "🎲" },
  { id: "capinhas", label: "Capinhas de Celular", icon: "📱" },
  { id: "papelaria", label: "Papelaria e Escritório", icon: "✏️" },
  { id: "casa", label: "Casa, Cama e Almofadas", icon: "🛋️" },
  { id: "relogios", label: "Relógios e Pulseiras", icon: "⌚" },
  { id: "colecionaveis", label: "Miniaturas e Colecionáveis", icon: "🏆" },
];

const PRODUCTS = [
  // Camisas e Uniformes
  { name: "Camisa Oficial do Vasco da Gama I 24/25", category: "camisas", audience: "adulto", keywords: "camisa oficial vasco da gama I 2024 2025 masculina", desc: "Manto sagrado, modelo jogo/torcedor da temporada atual.", img: "camisa-oficial" },
  { name: "Camisa Vasco Retrô 1898", category: "camisas", audience: "adulto", keywords: "camisa retro vasco da gama 1898", desc: "Homenagem ao centenário e à história cruzmaltina.", img: "camisa-retro" },
  { name: "Camisa Vasco Feminina", category: "camisas", audience: "adulto", keywords: "camisa vasco da gama feminina oficial", desc: "Corte feminino, licenciada, para torcer com estilo.", img: "camisa-feminina" },
  { name: "Camisa Goleiro Vasco", category: "camisas", audience: "adulto", keywords: "camisa goleiro vasco da gama oficial", desc: "Réplica do uniforme usado pelos goleiros do clube.", img: "camisa-goleiro" },
  { name: "Short Vasco da Gama Oficial", category: "camisas", audience: "unissex", keywords: "short vasco da gama oficial licenciado", desc: "Complemento perfeito para o uniforme completo.", img: "short-oficial" },
  { name: "Kit Camisa + Short Vasco", category: "camisas", audience: "unissex", keywords: "kit camisa e short vasco da gama", desc: "Conjunto completo para jogar ou torcer.", img: "kit-camisa-short" },

  // Moletons e Casacos
  { name: "Moletom Vasco da Gama com Capuz", category: "moletons", audience: "adulto", keywords: "moletom vasco da gama capuz oficial", desc: "Ideal para os dias mais frios torcendo pelo Gigante da Colina.", img: "moletom-capuz" },
  { name: "Jaqueta Corta-Vento Vasco", category: "moletons", audience: "adulto", keywords: "jaqueta corta vento vasco da gama oficial", desc: "Proteção contra o vento com o escudo do Vasco no peito.", img: "jaqueta-corta-vento" },
  { name: "Blusa de Frio Vasco Careca", category: "moletons", audience: "adulto", keywords: "blusa moletom careca vasco da gama", desc: "Estilo básico e confortável para o dia a dia.", img: "blusa-frio-careca" },

  // Infantil
  { name: "Camisa Vasco Infantil Oficial", category: "infantil", audience: "infantil", keywords: "camisa vasco da gama infantil oficial", desc: "Para o pequeno cruzmaltino torcer com a camisa do coração.", img: "camisa-infantil" },
  { name: "Body de Bebê do Vasco da Gama", category: "infantil", audience: "infantil", keywords: "body bebe vasco da gama licenciado", desc: "Presente perfeito para apresentar o bebê ao clube.", img: "body-bebe" },
  { name: "Conjunto Infantil Vasco (Camisa + Short)", category: "infantil", audience: "infantil", keywords: "conjunto infantil vasco da gama camisa short", desc: "Uniforme completo em tamanhos infantis.", img: "conjunto-infantil" },
  { name: "Mochila Escolar do Vasco da Gama", category: "infantil", audience: "infantil", keywords: "mochila escolar vasco da gama oficial", desc: "Para levar a paixão vascaína para a escola.", img: "mochila-escolar" },
  { name: "Pijama Infantil Vasco da Gama", category: "infantil", audience: "infantil", keywords: "pijama infantil vasco da gama licenciado", desc: "Conforto e amor ao clube até na hora de dormir.", img: "pijama-infantil" },

  // Bonés e Acessórios
  { name: "Boné Vasco da Gama Aba Curva", category: "bones", audience: "unissex", keywords: "bone vasco da gama aba curva oficial", desc: "Acessório clássico para completar o visual cruzmaltino.", img: "bone-aba-curva" },
  { name: "Boné Vasco Aba Reta Snapback", category: "bones", audience: "unissex", keywords: "bone vasco da gama aba reta snapback", desc: "Estilo streetwear com o escudo do Gigante da Colina.", img: "bone-aba-reta" },
  { name: "Gorro de Lã Vasco da Gama", category: "bones", audience: "unissex", keywords: "gorro de la vasco da gama oficial", desc: "Para enfrentar o frio sem abrir mão da camisa do coração.", img: "gorro-la" },
  { name: "Máscara/Bandana Vasco da Gama", category: "bones", audience: "unissex", keywords: "bandana mascara vasco da gama estampada", desc: "Acessório estampado com as cores e o escudo do clube.", img: "bandana" },
  { name: "Óculos de Sol Vasco da Gama", category: "bones", audience: "unissex", keywords: "oculos de sol vasco da gama licenciado", desc: "Proteção solar com identidade visual do clube.", img: "oculos-sol" },

  // Canecas e Copos
  { name: "Caneca Personalizada Vasco da Gama", category: "canecas", audience: "unissex", keywords: "caneca personalizada vasco da gama porcelana", desc: "Para tomar aquele café com a cara do Vascão.", img: "caneca-personalizada" },
  { name: "Caneca Térmica Vasco da Gama", category: "canecas", audience: "unissex", keywords: "caneca termica vasco da gama viagem", desc: "Mantém a bebida na temperatura certa em qualquer lugar.", img: "caneca-termica" },
  { name: "Copo Americano Vasco da Gama (Kit)", category: "canecas", audience: "unissex", keywords: "copo americano vasco da gama kit personalizado", desc: "Kit de copos para o dia a dia ou para servir os amigos no jogo.", img: "copo-americano" },
  { name: "Squeeze/Garrafa Vasco da Gama", category: "canecas", audience: "unissex", keywords: "squeeze garrafa esportiva vasco da gama", desc: "Hidratação com estilo cruzmaltino nos treinos ou no trabalho.", img: "squeeze-garrafa" },

  // Chaveiros, Pins e Bótons
  { name: "Chaveiro Escudo Vasco da Gama", category: "chaveiros", audience: "unissex", keywords: "chaveiro escudo vasco da gama metal", desc: "Detalhe discreto para levar o Vasco em qualquer chave.", img: "chaveiro-escudo" },
  { name: "Kit Bótons Vasco da Gama", category: "chaveiros", audience: "unissex", keywords: "kit botons vasco da gama colecionavel", desc: "Ótimo para personalizar mochilas, jaquetas e bonés.", img: "kit-botons" },
  { name: "Pin Esmaltado Vasco da Gama", category: "chaveiros", audience: "unissex", keywords: "pin esmaltado vasco da gama colecionavel", desc: "Peça de colecionador para fãs de acessórios do clube.", img: "pin-esmaltado" },

  // Bandeiras e Flâmulas
  { name: "Bandeira Oficial do Vasco da Gama", category: "bandeiras", audience: "unissex", keywords: "bandeira oficial vasco da gama grande", desc: "Para tremular no Maracanã, São Januário ou em casa.", img: "bandeira-oficial" },
  { name: "Flâmula Vasco da Gama", category: "bandeiras", audience: "unissex", keywords: "flamula vasco da gama decorativa", desc: "Item clássico e nostálgico para decorar qualquer ambiente.", img: "flamula" },
  { name: "Bandeira de Carro Vasco da Gama", category: "bandeiras", audience: "unissex", keywords: "bandeira de carro vasco da gama janela", desc: "Mostre sua torcida também no trânsito.", img: "bandeira-carro" },

  // Decoração
  { name: "Quadro Decorativo Vasco da Gama", category: "decoracao", audience: "unissex", keywords: "quadro decorativo vasco da gama escudo", desc: "Decore a Caverna com o escudo do Vasco na parede.", img: "quadro-decorativo" },
  { name: "Luminária Escudo Vasco da Gama", category: "decoracao", audience: "unissex", keywords: "luminaria led escudo vasco da gama", desc: "Iluminação temática para o cantinho do torcedor.", img: "luminaria-escudo" },
  { name: "Tapete/Capacho Vasco da Gama", category: "decoracao", audience: "unissex", keywords: "capacho tapete vasco da gama porta", desc: "Recepção cruzmaltina para quem entra em casa.", img: "tapete-capacho" },
  { name: "Adesivo de Parede Vasco da Gama", category: "decoracao", audience: "unissex", keywords: "adesivo de parede vasco da gama escudo", desc: "Aplicação fácil para transformar o quarto do torcedor mirim ou não.", img: "adesivo-parede" },
  { name: "Relógio de Parede Vasco da Gama", category: "decoracao", audience: "unissex", keywords: "relogio de parede vasco da gama oficial", desc: "Marque o tempo até o próximo jogo com estilo.", img: "relogio-parede" },

  // Livros
  { name: "Livro: A História do Vasco da Gama", category: "livros", audience: "adulto", keywords: "livro historia do vasco da gama futebol", desc: "Mergulhe na trajetória centenária do clube de São Januário.", img: "livro-historia" },
  { name: "Biografia de Ídolos do Vasco", category: "livros", audience: "adulto", keywords: "livro biografia idolos vasco da gama", desc: "As histórias por trás dos maiores nomes que vestiram o Gigante da Colina.", img: "biografia-idolos" },
  { name: "Livro Infantil: Meu Primeiro Vasco", category: "livros", audience: "infantil", keywords: "livro infantil futebol vasco da gama meu primeiro time", desc: "Apresente o Vasco para as crianças de um jeito lúdico.", img: "livro-infantil" },
  { name: "Álbum de Figurinhas Vasco da Gama", category: "livros", audience: "infantil", keywords: "album de figurinhas vasco da gama times do coracao", desc: "Diversão para colecionar e completar com a família.", img: "album-figurinhas" },

  // Brinquedos e Jogos
  { name: "Bola de Futebol Vasco da Gama", category: "brinquedos", audience: "infantil", keywords: "bola de futebol oficial vasco da gama", desc: "Para bater uma pelada com a bola do time do coração.", img: "bola-futebol" },
  { name: "Boneco/Mascote do Vasco da Gama", category: "brinquedos", audience: "infantil", keywords: "boneco mascote vasco da gama pelucia", desc: "Pelúcia fofa para os pequenos torcedores.", img: "boneco-mascote" },
  { name: "Jogo de Botão Vasco da Gama", category: "brinquedos", audience: "infantil", keywords: "jogo de botao futebol de mesa vasco da gama", desc: "Diversão retrô para reviver clássicos em família.", img: "jogo-botao" },
  { name: "Quebra-Cabeça Escudo do Vasco", category: "brinquedos", audience: "infantil", keywords: "quebra cabeca vasco da gama escudo", desc: "Passatempo divertido para todas as idades.", img: "quebra-cabeca" },
  { name: "Jogo de Cartas Vasco da Gama", category: "brinquedos", audience: "infantil", keywords: "jogo de cartas futebol vasco da gama", desc: "Reúna a torcida para jogar em casa.", img: "jogo-cartas" },

  // Capinhas
  { name: "Capinha de Celular Vasco da Gama", category: "capinhas", audience: "unissex", keywords: "capinha de celular vasco da gama personalizada", desc: "Proteja o celular com a cruz de malta.", img: "capinha-celular" },
  { name: "Pop Socket Vasco da Gama", category: "capinhas", audience: "unissex", keywords: "pop socket suporte celular vasco da gama", desc: "Acessório prático com a identidade do clube.", img: "pop-socket" },
  { name: "Skin/Adesivo para Notebook Vasco", category: "capinhas", audience: "unissex", keywords: "skin adesivo notebook vasco da gama", desc: "Personalize seus equipamentos com o escudo cruzmaltino.", img: "skin-notebook" },

  // Papelaria
  { name: "Caderno Vasco da Gama", category: "papelaria", audience: "unissex", keywords: "caderno universitario vasco da gama oficial", desc: "Para anotar tudo com estilo vascaíno na escola ou trabalho.", img: "caderno" },
  { name: "Caneta Personalizada Vasco da Gama", category: "papelaria", audience: "unissex", keywords: "caneta personalizada vasco da gama escudo", desc: "Detalhe simples e charmoso para o dia a dia.", img: "caneta" },
  { name: "Agenda/Planner Vasco da Gama", category: "papelaria", audience: "adulto", keywords: "agenda planner vasco da gama personalizado", desc: "Organização com a cara do seu time do coração.", img: "agenda-planner" },

  // Casa
  { name: "Jogo de Cama Vasco da Gama", category: "casa", audience: "unissex", keywords: "jogo de cama vasco da gama estampado", desc: "Durma respirando o clima cruzmaltino.", img: "jogo-cama" },
  { name: "Almofada Vasco da Gama", category: "casa", audience: "unissex", keywords: "almofada decorativa vasco da gama escudo", desc: "Conforto e decoração para o sofá do torcedor.", img: "almofada" },
  { name: "Toalha de Banho Vasco da Gama", category: "casa", audience: "unissex", keywords: "toalha de banho vasco da gama oficial", desc: "Para sair do banho com o escudo do Gigante da Colina.", img: "toalha-banho" },
  { name: "Tapete para Sala Vasco da Gama", category: "casa", audience: "unissex", keywords: "tapete de sala vasco da gama decorativo", desc: "Deixe a sala com a cara da torcida vascaína.", img: "tapete-sala" },

  // Relógios
  { name: "Relógio de Pulso Vasco da Gama", category: "relogios", audience: "adulto", keywords: "relogio de pulso vasco da gama oficial", desc: "Elegância cruzmaltina no seu pulso.", img: "relogio-pulso" },
  { name: "Pulseira Vasco da Gama", category: "relogios", audience: "unissex", keywords: "pulseira vasco da gama silicone oficial", desc: "Acessório simples para mostrar a torcida todos os dias.", img: "pulseira" },

  // Colecionáveis
  { name: "Réplica da Taça do Vasco", category: "colecionaveis", audience: "adulto", keywords: "replica de taca vasco da gama colecionavel", desc: "Para os fãs que querem uma taça de campeão em casa.", img: "replica-taca" },
  { name: "Miniatura de Ônibus do Vasco", category: "colecionaveis", audience: "adulto", keywords: "miniatura onibus vasco da gama colecionavel", desc: "Item de colecionador para quem ama os detalhes do clube.", img: "miniatura-onibus" },
  { name: "Estatueta/Boneco Colecionável Vasco", category: "colecionaveis", audience: "adulto", keywords: "estatueta colecionavel vasco da gama jogador", desc: "Peça de destaque para a estante do torcedor.", img: "estatueta-colecionavel" },
  { name: "Camisa Autografada Réplica Vasco", category: "colecionaveis", audience: "adulto", keywords: "camisa replica autografada vasco da gama colecionavel", desc: "Para quem é apaixonado por memorabilia do clube.", img: "camisa-autografada" },
];
