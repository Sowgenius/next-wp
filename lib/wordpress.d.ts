export type Post = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  sticky: boolean;
  template: string;
  format:
    | "standard"
    | "aside"
    | "chat"
    | "gallery"
    | "link"
    | "image"
    | "quote"
    | "status"
    | "video"
    | "audio";
  meta: any[];
  categories: number[];
  tags: number[];
};

export type Category = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: "category";
  parent: number;
  meta: any[];
};

export type Tag = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: "post_tag";
  meta: any[];
};

export type Page = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  template: string;
  meta: any[];
};

export type Author = {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    [key: string]: string;
  };
  meta: any[];
};

export type BlockType = {
  api_version: number;
  title: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  keywords: string[];
  parent: string[];
  supports: {
    [key: string]: any;
  };
  styles: {
    name: string;
    label: string;
    isDefault: boolean;
  }[];
  textdomain: string;
  example: {
    [key: string]: any;
  };
  attributes: {
    [key: string]: any;
  };
  provides_context: {
    [key: string]: string;
  };
  uses_context: string[];
  editor_script: string;
  script: string;
  editor_style: string;
  style: string;
};

export type EditorBlock = {
  id: string;
  name: string;
  attributes: {
    [key: string]: any;
  };
  innerBlocks: EditorBlock[];
  innerHTML: string;
  innerContent: string[];
};

export type TemplatePart = {
  id: string;
  slug: string;
  theme: string;
  type: string;
  source: string;
  origin: string;
  content: string | EditorBlock[];
  title: {
    raw: string;
    rendered: string;
  };
  description: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  wp_id: number;
  has_theme_file: boolean;
  author: number;
  area: string;
};

export type SearchResult = {
  id: number;
  title: string;
  url: string;
  type: string;
  subtype: string;
  _links: {
    self: {
      embeddable: boolean;
      href: string;
    }[];
    about: {
      href: string;
    }[];
  };
};

export type FeaturedMedia = {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: {
      [key: string]: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
  };
  source_url: string;
};

type FilterBarProps = {
  authors: Author[];
  tags: Tag[];
  categories: Category[];
  selectedAuthor?: string;
  selectedTag?: string;
  selectedCategory?: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: string | null;
  date_on_sale_from_gmt: string | null;
  date_on_sale_to: string | null;
  date_on_sale_to_gmt: string | null;
  price_html: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: any[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number | null;
  stock_status: string;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  sold_individually: boolean;
  weight: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  related_ids: number[];
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  tags: {
    id: number;
    name: string;
    slug: string;
  }[];
  images: {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
  }[];
  attributes: {
    id: number;
    name: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
  }[];
  default_attributes: {
    id: number;
    name: string;
    option: string;
  }[];
  variations: number[];
  grouped_products: number[];
  menu_order: number;
  meta_data: {
    id: number;
    key: string;
    value: string;
  }[];
};

export type Order = {
  id: number;
  parent_id: number;
  number: string;
  order_key: string;
  created_via: string;
  version: string;
  status: string;
  currency: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  discount_total: string;
  discount_tax: string;
  shipping_total: string;
  shipping_tax: string;
  cart_tax: string;
  total: string;
  total_tax: string;
  prices_include_tax: boolean;
  customer_id: number;
  customer_ip_address: string;
  customer_user_agent: string;
  customer_note: string;
  billing: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
  };
  shipping: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  payment_method: string;
  payment_method_title: string;
  transaction_id: string;
  date_paid: string | null;
  date_paid_gmt: string | null;
  date_completed: string | null;
  date_completed_gmt: string | null;
  cart_hash: string;
  meta_data: {
    id: number;
    key: string;
    value: string;
  }[];
  line_items: {
    id: number;
    name: string;
    product_id: number;
    variation_id: number;
    quantity: number;
    tax_class: string;
    subtotal: string;
    subtotal_tax: string;
    total: string;
    total_tax: string;
    taxes: {
      id: number;
      total: string;
      subtotal: string;
    }[];
    meta_data: {
      id: number;
      key: string;
      value: string;
    }[];
    sku: string;
    price: number;
  }[];
  tax_lines: {
    id: number;
    rate_code: string;
    rate_id: number;
    label: string;
    compound: boolean;
    tax_total: string;
    shipping_tax_total: string;
    meta_data: any[];
  }[];
  shipping_lines: {
    id: number;
    method_title: string;
    method_id: string;
    instance_id: string;
    total: string;
    total_tax: string;
    taxes: {
      id: number;
      total: string;
      subtotal: string;
    }[];
    meta_data: any[];
  }[];
  fee_lines: any[];
  coupon_lines: any[];
  refunds: any[];
};

export type Customer = {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  username: string;
  billing: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
  };
  shipping: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  is_paying_customer: boolean;
  avatar_url: string;
  meta_data: {
    id: number;
    key: string;
    value: string;
  }[];
};

export type ProductCategory = {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image: {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
  } | null;
  menu_order: number;
  count: number;
};

export type ProductTag = {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
};

export type ProductReview = {
  id: number;
  date_created: string;
  date_created_gmt: string;
  product_id: number;
  status: string;
  reviewer: string;
  reviewer_email: string;
  review: string;
  rating: number;
  verified: boolean;
  reviewer_avatar_urls: {
    [key: string]: string;
  };
};
