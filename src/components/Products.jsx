import { useState } from "react";

import ProductCard from "./ProductCard";
import Cart from "./Cart";

const Products = ({ products, carts, setCarts }) => {

  const [isActiveTab, setIsActiveTab] = useState("products");

  return (
    <div className="py-12 md:py20 lg:py-30 max-w-7xl mx-auto">
      <h3 className="text-2xl md:text-4xl lg:text-[48px] text-[#101727] font-extrabold text-center mt-2 md:mt-4">
        Premium Digital Tools
      </h3>
      <p className="text-[#627382] text-sm md:text-base leading-6 text-center mb-6 md:mb-10">
        Choose from our curated collection of premium digital products designed
        <br className="hidden md:block"/> to boost your productivity and creativity.
      </p>

      <div className="flex justify-center w-full max-w-md mx-auto bg-transparent border border-gray-100 rounded-full p-1">
        <input
          type="radio"
          name="my_tabs_1"
          checked={isActiveTab === "products"}
          onChange={() => setIsActiveTab("products")}
          className={`tab flex-1 py-2 md:py-3 px-4 md:px-6 font-bold text-sm md:text-base rounded-full ${
            isActiveTab === "products"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-transparent text-black"
          }`}
          aria-label="Products"
        />
        <input
          type="radio"
          name="my_tabs_1"
          checked={isActiveTab === "cart"}
          onChange={() => setIsActiveTab("cart")}
          className={`tab flex-1 py-2 md:py-3 px-4 md:px-6 font-bold text-sm md:text-base rounded-full ${
            isActiveTab === "cart"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-transparent text-black"
          }`}
          aria-label={`Cart ${carts.length > 0 ? `(${carts.length})` : ""}`}
        />
      </div>
      
      {isActiveTab === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mt-8 md:mt-10">
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
