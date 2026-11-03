import { useState } from "react";
import { Link } from "react-router-dom";

export const itemsData = [
  {
    id: 1,
    title: "Nike Cortez",
    size: "Size: 43",
    price: "$250",
    description:"Classic Nike Cortez with timeless design. Clean white leather upper with suede overlays and the iconic swoosh. Perfect for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    colors: [
      { name: "White/Red", hex: "#ffffff", secondary: "#dc2626" },
      { name: "White/Blue", hex: "#ffffff", secondary: "#2563eb" },
      { name: "Black/White", hex: "#1f2937", secondary: "#ffffff" },
    ],
  },
  {
    id: 2,
    title: "Adidas Samba",
    size: "Size: 38",
    price: "$95",
    description:"The legendary Adidas Samba. Classic soccer-inspired design with leather upper and rubber outsole. A streetwear staple since 1950.",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
    colors: [
      { name: "White/Black", hex: "#ffffff", secondary: "#1f2937" },
      { name: "Core Black", hex: "#1f2937", secondary: "#000000" },
      { name: "Cloud White", hex: "#f3f4f6", secondary: "#9ca3af" },
    ],
  },
  {
    id: 3,
    title: "Nike SB Dunk",
    size: "Size: 37",
    price: "$120",
    description:"Nike SB Dunk Low with padded collar and Zoom Air cushioning. Built for skateboarding, loved by sneakerheads worldwide.",
    image:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=400&h=300&fit=crop",
    colors: [
      { name: "Panda", hex: "#1f2937", secondary: "#ffffff" },
      { name: "University Blue", hex: "#2563eb", secondary: "#ffffff" },
      { name: "Travis Scott", hex: "#92400e", secondary: "#fcd34d" },
    ],
  },
  {
    id: 4,
    title: "Nike Air Force 1",
    size: "Size: 42",
    price: "$150",
    description:"The iconic Air Force 1. Clean white on white colorway with premium leather and Air cushioning. A true classic since 1982.",
    image:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=300&fit=crop",
    colors: [
      { name: "Triple White", hex: "#ffffff", secondary: "#f3f4f6" },
      { name: "Triple Black", hex: "#1f2937", secondary: "#000000" },
      { name: "Wheat", hex: "#d97706", secondary: "#92400e" },
    ],
  },
  {
    id: 5,
    title: "Adidas Ultraboost",
    size: "Size: 44",
    price: "$200",
    description:"Premium comfort with Boost midsole technology. Knit upper adapts to your foot for ultimate comfort during runs or casual wear.",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
    colors: [
      { name: "Core Black", hex: "#1f2937", secondary: "#000000" },
      { name: "Cloud White", hex: "#f3f4f6", secondary: "#9ca3af" },
      { name: "Night Indigo", hex: "#3730a3", secondary: "#1e1b4b" },
    ],
  },
  {
    id: 6,
    title: "Nike Air Jordan 1",
    size: "Size: 40",
    price: "$180",
    description:"The shoe that started it all. Air Jordan 1 High with premium leather and iconic silhouette. A must-have for any sneaker collection.",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop",
    colors: [
      { name: "Bred", hex: "#dc2626", secondary: "#1f2937" },
      { name: "Chicago", hex: "#dc2626", secondary: "#ffffff" },
      { name: "Royal Blue", hex: "#2563eb", secondary: "#1f2937" },
    ],
  },
  {
    id: 7,
    title: "Nike Air Max 90",
    size: "Size: 41",
    price: "$140",
    description:"Iconic Air Max 90 with visible Air unit and classic design. Lightweight cushioning and retro style make this a timeless choice.",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop",
    colors: [
      { name: "Infrared", hex: "#ffffff", secondary: "#ef4444" },
      { name: "Triple Black", hex: "#1f2937", secondary: "#000000" },
      { name: "Wolf Grey", hex: "#9ca3af", secondary: "#ffffff" },
    ],
  },
  {
    id: 8,
    title: "Adidas Stan Smith",
    size: "Size: 39",
    price: "$85",
    description:"Timeless tennis-inspired sneakers with clean leather upper. The Stan Smith is a minimalist icon loved by millions worldwide.",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop",
    colors: [
      { name: "White/Green", hex: "#ffffff", secondary: "#16a34a" },
      { name: "White/Navy", hex: "#ffffff", secondary: "#1e3a8a" },
      { name: "All White", hex: "#ffffff", secondary: "#f3f4f6" },
    ],
  },
  {
    id: 9,
    title: "Converse Chuck Taylor",
    size: "Size: 41",
    price: "$65",
    description:"Classic canvas high-top sneakers with timeless design. The Chuck Taylor All Star has been a cultural icon since 1917.",
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=300&fit=crop",
    colors: [
      { name: "Black", hex: "#1f2937", secondary: "#000000" },
      { name: "White", hex: "#ffffff", secondary: "#f3f4f6" },
      { name: "Red", hex: "#dc2626", secondary: "#7f1d1d" },
    ],
  },
  {
    id: 10,
    title: "New Balance 574",
    size: "Size: 42",
    price: "$110",
    description:"Classic New Balance 574 with ENCAP midsole cushioning. Perfect blend of style and comfort with premium suede and mesh upper.",
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=300&fit=crop",
    colors: [
      { name: "Grey", hex: "#6b7280", secondary: "#1f2937" },
      { name: "Navy", hex: "#1e3a8a", secondary: "#ffffff" },
      { name: "Burgundy", hex: "#7f1d1d", secondary: "#ffffff" },
    ],
  },
  {
    id: 11,
    title: "Vans Old Skool",
    size: "Size: 40",
    price: "$70",
    description:"Legendary Vans Old Skool with iconic side stripe. Durable canvas and suede construction with signature waffle outsole.",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=300&fit=crop",
    colors: [
      { name: "Black/White", hex: "#1f2937", secondary: "#ffffff" },
      { name: "Navy/White", hex: "#1e3a8a", secondary: "#ffffff" },
      { name: "Red/White", hex: "#dc2626", secondary: "#ffffff" },
    ],
  },
  {
    id: 12,
    title: "Puma Suede Classic",
    size: "Size: 43",
    price: "$75",
    description:"Classic Puma Suede with premium suede upper and iconic formstrip. A streetwear staple since 1968.",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=300&fit=crop",
    colors: [
      { name: "Black", hex: "#1f2937", secondary: "#000000" },
      { name: "Red", hex: "#dc2626", secondary: "#1f2937" },
      { name: "Blue", hex: "#2563eb", secondary: "#ffffff" },
    ],
  },
  {
    id: 13,
    title: "Reebok Classic Leather",
    size: "Size: 41",
    price: "$80",
    description:"Timeless Reebok Classic Leather with soft garment leather upper. Clean design with lightweight EVA midsole for all-day comfort.",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop",
    colors: [
      { name: "White", hex: "#ffffff", secondary: "#f3f4f6" },
      { name: "Black", hex: "#1f2937", secondary: "#000000" },
      { name: "Grey", hex: "#6b7280", secondary: "#ffffff" },
    ],
  },
  {
    id: 14,
    title: "Nike Blazer Mid",
    size: "Size: 38",
    price: "$105",
    description:"Retro basketball style with Nike Blazer Mid. Premium leather upper with vintage details and herringbone traction pattern.",
    image:
      "https://images.unsplash.com/photo-1578116922645-3976907a7671?w=400&h=300&fit=crop",
    colors: [
      { name: "White/Black", hex: "#ffffff", secondary: "#1f2937" },
      { name: "Red/White", hex: "#dc2626", secondary: "#ffffff" },
      { name: "Blue/White", hex: "#2563eb", secondary: "#ffffff" },
    ],
  },
  {
    id: 15,
    title: "Adidas Gazelle",
    size: "Size: 42",
    price: "$90",
    description:"Iconic Adidas Gazelle with premium suede upper. Originally a training shoe, now a streetwear classic with timeless appeal.",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=300&fit=crop",
    colors: [
      { name: "Blue/White", hex: "#2563eb", secondary: "#ffffff" },
      { name: "Black/White", hex: "#1f2937", secondary: "#ffffff" },
      { name: "Red/White", hex: "#dc2626", secondary: "#ffffff" },
    ],
  },
];

function Items() {
  const [search, setSearch] = useState("");

  const filteredItems = itemsData.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="products-section">
      <h2 className="products-heading">Our Products</h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
          }}
        />
      </div>

      <div className="products-grid">
        {filteredItems.map((item) => (
          <article className="product-card" key={item.id}>
            <Link to={`/products/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              
              <img
                src={item.image}
                alt={item.title}
                className="product-image"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="product-content">
                <h3>{item.title}</h3>
                <p className="product-size">{item.size}</p>
                <p className="product-price">{item.price}</p>
                <p>{item.description}</p>
                <button className="buy-button" type="button">
                  View Detail
                </button>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No products match "{search}".
        </p>
      )}
    </section>
  );
}

export default Items;