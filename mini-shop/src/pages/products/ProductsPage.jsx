import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./productsPage.css";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { addAllProducts } from "../../store/actions/productsActions";
import startFirebase from "../../config/firebase";

const db = startFirebase();

export default function ProductsPage() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const starCountRef = ref(db, "products/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // console.log(data);
      dispatch(addAllProducts(data));
      // console.log("ok");
    });

    console.log(products);
  }, []);
  console.log(products);

  const renderProductCard = (card) => {
    return (
      <ProductCard
        name={card.name}
        description={card.description}
        price={card.price}
      />
    );
  };
  // console.log(products.products.length);
  return (
    <div>
      <div className="pageMargin">
        {products.length ? products.map(renderProductCard) : <p>No products</p>}
      </div>
    </div>
  );
}
