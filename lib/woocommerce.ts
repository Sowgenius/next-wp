import querystring from 'query-string';

import {
  Product,
  Order,
  Customer,
  ProductCategory,
  ProductTag,
  ProductReview,
} from "./wordpress.d";

// WooCommerce Config
const baseUrl = process.env.WOOCOMMERCE_URL;
const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;

function getUrl(path: string, query?: Record<string, any>) {
  const params = query ? querystring.stringify(query) : null;
  return `${baseUrl}/wp-json/wc/v3${path}${params ? `?${params}` : ""}`;
}

async function fetchWooCommerceAPI(url: string): Promise<any> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

// Products
export async function getAllProducts(query?: Record<string, any>): Promise<Product[]> {
  const url = getUrl("/products", query);
  return await fetchWooCommerceAPI(url);
}

export async function getProductById(id: number): Promise<Product> {
  const url = getUrl(`/products/${id}`);
  return await fetchWooCommerceAPI(url);
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const products = await getAllProducts({ slug });
  return products[0];
}

// Orders
export async function getAllOrders(query?: Record<string, any>): Promise<Order[]> {
  const url = getUrl("/orders", query);
  return await fetchWooCommerceAPI(url);
}

export async function getOrderById(id: number): Promise<Order> {
  const url = getUrl(`/orders/${id}`);
  return await fetchWooCommerceAPI(url);
}

// Customers
export async function getAllCustomers(query?: Record<string, any>): Promise<Customer[]> {
  const url = getUrl("/customers", query);
  return await fetchWooCommerceAPI(url);
}

export async function getCustomerById(id: number): Promise<Customer> {
  const url = getUrl(`/customers/${id}`);
  return await fetchWooCommerceAPI(url);
}

// Categories
export async function getAllCategories(query?: Record<string, any>): Promise<ProductCategory[]> {
  const url = getUrl("/products/categories", query);
  return await fetchWooCommerceAPI(url);
}

export async function getCategoryById(id: number): Promise<ProductCategory> {
  const url = getUrl(`/products/categories/${id}`);
  return await fetchWooCommerceAPI(url);
}

// Tags
export async function getAllTags(query?: Record<string, any>): Promise<ProductTag[]> {
  const url = getUrl("/products/tags", query);
  return await fetchWooCommerceAPI(url);
}

export async function getTagById(id: number): Promise<ProductTag> {
  const url = getUrl(`/products/tags/${id}`);
  return await fetchWooCommerceAPI(url);
}

// Reviews
export async function getAllReviews(query?: Record<string, any>): Promise<ProductReview[]> {
  const url = getUrl("/products/reviews", query);
  return await fetchWooCommerceAPI(url);
}

export async function getReviewById(id: number): Promise<ProductReview> {
  const url = getUrl(`/products/reviews/${id}`);
  return await fetchWooCommerceAPI(url);
}

