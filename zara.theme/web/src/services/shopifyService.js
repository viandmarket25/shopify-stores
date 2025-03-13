import shopifyConfig from '../config/shopify';

export class ShopifyService {
  static async graphqlQuery(query) {
    try {
      const response = await fetch(`https://${shopifyConfig.domain}/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: {
          'X-Shopify-Storefront-Access-Token': shopifyConfig.storefrontAccessToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('GraphQL query error:', error);
      throw error;
    }
  }

  static async getProducts() {
    try {
      const query = `
        {
          products(first: 20) {
            edges {
              node {
                id
                title
                handle
                description
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      id
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;

      const data = await this.graphqlQuery(query);
      return data.products.edges.map(({ node }) => ({
        id: node.id,
        title: node.title,
        handle: node.handle,
        description: node.description,
        price: node.priceRange.minVariantPrice.amount,
        images: [{ src: node.images.edges[0]?.node.url }],
        variants: [{ price: node.variants.edges[0]?.node.price.amount }]
      }));
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  static async getProduct(handle) {
    try {
      const query = `
        {
          product(handle: "${handle}") {
            id
            title
            description
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      `;

      const data = await this.graphqlQuery(query);
      const product = data.product;
      
      return {
        id: product.id,
        title: product.title,
        description: product.description,
        images: product.images.edges.map(({ node }) => ({ src: node.url })),
        variants: product.variants.edges.map(({ node }) => ({
          id: node.id,
          title: node.title,
          price: node.price.amount
        }))
      };
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }
} 