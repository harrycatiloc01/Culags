import Items from "./Items";

export default function Body() {
  return (
    <main style={{ padding: "20px", minHeight: "80vh" }}>
      <h1 style={{ textAlign: "center" }}>Our Products</h1>
      <Items />
    </main>
  );
}