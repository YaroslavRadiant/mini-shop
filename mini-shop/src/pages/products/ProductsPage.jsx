import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./productsPage.css";

export default function ProductsPage() {
  return (
    <div>
      <div className="pageMargin">
        <ProductCard
          name="Iphone x"
          description="Це майбутнє на найближчі 10 років - так представив ювілейну, десяту версію iPhone"
          price="550"
        ></ProductCard>
        <ProductCard
          name="Iphone x"
          description="Це майбутнє на найближчі 10 років - так представив ювілейну, десяту версію iPhone"
          price="550"
        ></ProductCard>
        <ProductCard
          name="Iphone x"
          description="Це майбутнє на найближчі 10 років - так представив ювілейну, десяту версію iPhone"
          price="550"
        ></ProductCard>
        <ProductCard
          name="Iphone x"
          description="Це майбутнє на найближчі 10 років - так представив ювілейну, десяту версію iPhone"
          price="550"
        ></ProductCard>
      </div>
    </div>
  );
}
