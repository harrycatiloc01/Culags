import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { itemsData } from "./Items";

const availableSizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  const item = itemsData.find((p) => p.id === Number(id));

  if (!item) {
    return (
      <section className="products-section" style={{ textAlign: "center" }}>
        <div className="not-found-container">
          <div className="not-found-icon">??</div>
          <h1>Product not found</h1>
          <p>The product you are looking for does not exist.</p>
          <button className="buy-button" onClick={() => navigate("/")}>
            Back to Products
          </button>
        </div>
      </section>
    );
  }

  const numericPrice = Number(item.price.replace("$", ""));

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }
    const colorInfo = selectedColor ? ` in ${selectedColor.name}` : "";
    alert(`Successfully purchased ${quantity} ${item.title}(s)${colorInfo} in size ${selectedSize}!\nTotal: $${numericPrice * quantity}`);
  };

  return (
    <section className="products-section">
      <div className="detail-container">
        <div className="breadcrumb">
          <span onClick={() => navigate("/")} style={{cursor: "pointer"}}>Home</span>
          <span className="breadcrumb-separator"> / </span>
          <span onClick={() => navigate("/")} style={{cursor: "pointer"}}>Products</span>
          <span className="breadcrumb-separator"> / </span>
          <span className="breadcrumb-current">{item.title}</span>
        </div>

        <div className="detail-content">
          <div className="detail-image-section">
            <div className="detail-main-image">
              <img src={item.image} alt={item.title} className="detail-image" />
              <div className="image-badge">New Arrival</div>
            </div>
          </div>

          <div className="detail-info-section">
            <div className="detail-brand">SNEAKERS</div>
            <h1 className="detail-title">{item.title}</h1>

            <div className="detail-rating">
              <span className="stars">?????</span>
              <span className="rating-count">(128 reviews)</span>
            </div>

            <div className="detail-price">{item.price}</div>
            <p className="detail-description">{item.description}</p>

            {/* Color Selection */}
            {item.colors && item.colors.length > 0 && (
              <div className="color-section">
                <div className="color-header">
                  <span className="color-label">Select Color</span>
                  {selectedColor && <span className="color-name">{selectedColor.name}</span>}
                </div>
                <div className="color-swatches">
                  {item.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`color-swatch ${selectedColor === color ? "selected" : ""}`}
                      onClick={() => setSelectedColor(color)}
                      title={color.name}
                      style={{
                        background: `linear-gradient(135deg, ${color.hex} 50%, ${color.secondary} 50%)`
                      }}
                    >
                      {selectedColor === color && <span className="check-mark">?</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="size-section">
              <div className="size-header">
                <span className="size-label">Select Size</span>
                <span className="size-guide">Size Guide</span>
              </div>
              <div className="size-grid">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-section">
              <span className="quantity-label">Quantity</span>
              <div className="quantity-control">
                <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span className="qty-value">{quantity}</span>
                <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="add-to-cart-btn">?? Add to Cart</button>
              <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
            </div>

            <div className="total-section">
              <span>Total:</span>
              <span className="total-price">${numericPrice * quantity}</span>
            </div>

            <div className="features-grid">
              <div className="feature-item"><span className="feature-icon">??</span><span>Free Shipping</span></div>
              <div className="feature-item"><span className="feature-icon">??</span><span>30-Day Returns</span></div>
              <div className="feature-item"><span className="feature-icon">?</span><span>Authentic</span></div>
            </div>
          </div>
        </div>

        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === "description" ? "active" : ""}`} onClick={() => setActiveTab("description")}>Description</button>
            <button className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`} onClick={() => setActiveTab("reviews")}>Reviews (128)</button>
            <button className={`tab-btn ${activeTab === "shipping" ? "active" : ""}`} onClick={() => setActiveTab("shipping")}>Shipping</button>
          </div>
          <div className="tabs-content">
            {activeTab === "description" && (
              <div className="tab-panel">
                <p>{item.description}</p>
                <ul className="features-list">
                  <li>Premium leather upper for durability</li>
                  <li>Cushioned midsole for all-day comfort</li>
                  <li>Rubber outsole for excellent traction</li>
                  <li>Padded collar and tongue for added comfort</li>
                </ul>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="tab-panel">
                <div className="review-item">
                  <div className="review-header"><span className="reviewer">John D.</span><span className="review-stars">?????</span></div>
                  <p>Amazing shoes! Super comfortable and looks exactly like the photos.</p>
                </div>
                <div className="review-item">
                  <div className="review-header"><span className="reviewer">Maria S.</span><span className="review-stars">?????</span></div>
                  <p>Great quality, shipping was fast. Would recommend!</p>
                </div>
              </div>
            )}
            {activeTab === "shipping" && (
              <div className="tab-panel">
                <p><strong>Free Standard Shipping:</strong> 5-7 business days</p>
                <p><strong>Express Shipping:</strong> 2-3 business days ($15)</p>
                <p><strong>Next Day Delivery:</strong> Order before 2PM ($25)</p>
              </div>
            )}
          </div>
        </div>

        <button className="back-btn" onClick={() => navigate(-1)}>? Back to Products</button>
      </div>
    </section>
  );
}

