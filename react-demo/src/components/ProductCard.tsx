interface Product {
  name: string;
  price: number;
  imgUrl: string;
}

const product: Product = {
  name: "Wireless Headphones",
  price: 49.99,
  imgUrl: "https://picsum.photos/200/150",
};

export default function ProductCard() {
  return (
    // entire card is clickable via onClick on a div — not keyboard accessible
    <div
      onClick={() => (window.location.href = "/product/1")}
      style={{ border: "1px solid #ccc", padding: 16, width: 200, cursor: "pointer" }}
    >
      {/* image with empty alt even though it conveys product information */}
      <img src={product.imgUrl} alt="" style={{ width: "100%" }} />

      {/* heading skips from h2 in parent to h5 here */}
      <h5>{product.name}</h5>

      {/* price in low-contrast colour */}
      <p style={{ color: "#aaa" }}>${product.price}</p>

      {/* button has no type, defaults to submit inside any ancestor form */}
      <button>Add to cart</button>

      {/* meaningful icon with no text alternative */}
      <span aria-hidden="true">★★★★☆</span>
    </div>
  );
}
