const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const STOREFRONT_ACCESS_TOKEN = import.meta.env.VITE_STOREFRONT_ACCESS_TOKEN;

const shopifyConfig = {
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: STOREFRONT_ACCESS_TOKEN
};

export default shopifyConfig; 