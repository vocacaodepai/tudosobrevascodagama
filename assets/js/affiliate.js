/*
 * CONFIGURAÇÃO DO AFILIADO AMAZON
 * --------------------------------
 * Troque o valor abaixo pelo SEU tag de afiliado da Amazon Associates
 * (ex.: "tudovasco-20") assim que a sua conta for aprovada.
 * Esse é o ÚNICO lugar do site que precisa ser alterado.
 */
const AFFILIATE_TAG = "SEU-TAG-AFILIADO";

// Domínio da Amazon a usar (amazon.com.br é o padrão para o público brasileiro)
const AMAZON_DOMAIN = "www.amazon.com.br";

/**
 * Monta um link de busca da Amazon já com o tag de afiliado aplicado.
 * Usar busca (em vez de ASIN fixo) evita links quebrados quando um
 * produto específico sai de linha ou muda de anúncio.
 */
function buildAmazonLink(keywords) {
  const query = encodeURIComponent(keywords.trim());
  return `https://${AMAZON_DOMAIN}/s?k=${query}&tag=${encodeURIComponent(AFFILIATE_TAG)}`;
}
