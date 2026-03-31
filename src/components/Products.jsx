import { useState } from "react";

import ProductCard from "./ProductCard";
import Cart from "./Cart";

const Products = ({ products, carts, setCarts }) => {
  //   const products = use(productPromise);

  const [isActiveTab, setIsActiveTab] = useState("products");

  return (
    <div className="py-30 max-w-7xl mx-auto">
      <h3 className="text-[48px] text-[#101727] font-extrabold text-center mt-4">
        Premium Digital Tools
      </h3>
      <p className="text-[#627382] leading-5 text-center mb-6">
        Choose from our curated collection of premium digital products designed
        <br /> to boost your productivity and creativity.
      </p>

      <div className="tabs tabs-box justify-center w-84 mx-auto bg-transparent border border-gray-100 rounded-full">
        <input
          type="radio"
          name="my_tabs_1"
          checked={isActiveTab === "products"}
          onChange={() => setIsActiveTab("products")}
          className={`tab rounded-full w-40 font-bold ${
            isActiveTab === "products"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-transparent text-black"
          }`}
          aria-label="Products"
          //   defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          checked={isActiveTab === "cart"}
          onChange={() => setIsActiveTab("cart")}
          className={`tab rounded-full w-40 font-bold ${
            isActiveTab === "cart"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-transparent text-black"
          }`}
          aria-label={`Cart ${carts.length > 0 ? `(${carts.length})` : ""}`}
        />
      </div>
      {isActiveTab === "products" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      )}

      {isActiveTab === "cart" && (
        <div className="mt-10">
          <Cart carts={carts} setCarts={setCarts}/>
        </div>
      )}
    </div>
  );
};

export default Products;
