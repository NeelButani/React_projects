import { BASE_URL, MAX_PRODUCTS_LIMIT } from "../constant";

export const fetchProducts = async () => {
    const data = await fetch(`${BASE_URL}/products?limit=${MAX_PRODUCTS_LIMIT}`);
    if (!data.ok) {
        throw new Error('Failed to fetch products');
    }

    const json = await data.json();
    return json.products;
}

