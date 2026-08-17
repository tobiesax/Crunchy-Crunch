import type { Product } from "./types";

export const MERCHANT_ID = "crunch-and-crumbs";

export const products: Product[] = [
  { id: "cookie-stack", merchantId: MERCHANT_ID, name: "Chocolate Chip Cookies", description: "Soft, chewy and loaded with chocolate chips.", price: 50, image: "/assets/products/cookie-stack.jpg", active: true },
  { id: "classic-chinchin", merchantId: MERCHANT_ID, name: "Classic Chinchin", description: "Crispy, golden and perfectly sweetened.", price: 100, image: "/assets/products/bowl-chinchin.jpg", active: true },
  { id: "red-velvet", merchantId: MERCHANT_ID, name: "Red Velvet Cookies", description: "Rich red velvet with white chocolate chips.", price: 50, image: "/assets/products/cookie-single.jpg", active: true },
  { id: "coconut-chinchin", merchantId: MERCHANT_ID, name: "Coconut Chinchin", description: "Coconut-infused chinchin with a delightful crunch.", price: 50, image: "/assets/products/coconut-chinchin.jpg", active: true },
  { id: "mix-combo", merchantId: MERCHANT_ID, name: "Mix Combo Pack", description: "A gift-ready mix of cookies and chinchin favourites.", price: 50, image: "/assets/products/mix-combo.png", active: true },
  { id: "gift-box", merchantId: MERCHANT_ID, name: "Celebration Gift Box", description: "A beautifully packed selection made for sharing and gifting.", price: 300, image: "/assets/products/gift-box.jpg", active: true },
  { id: "plantain-chips-ripe", merchantId: MERCHANT_ID, name: "Plantain Chips – Ripe", description: "Sweet, golden plantain chips, sliced and fried to a perfect crisp.", price: 150, image: "/assets/products/plantain-chips-ripe.png", active: true },
  { id: "plantain-chips-unripe", merchantId: MERCHANT_ID, name: "Plantain Chips – Unripe", description: "Savoury unripe plantain chips with a satisfying crunch in every bite.", price: 150, image: "/assets/products/plantain-chips-unripe.png", active: true },
  { id: "plantain-chips-salted", merchantId: MERCHANT_ID, name: "Plantain Chips – Salted", description: "Crispy plantain chips finished with a touch of sea salt.", price: 150, image: "/assets/products/plantain-chips-salted.png", active: true },
];
