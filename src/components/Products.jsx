import { use } from "react";
import { Check } from "lucide-react";

const Products = ({ productPromise }) => {
  const products = use(productPromise);


const tagTypeStyle = {
    popular: "bg-[#E1E7FF] text-[#9514FA]",
    "best-seller": "bg-[#FEF3C6] text-[#BB4D00]",
    new: "bg-[#DBFCE7] text-[#0A883E]"
}

  return (
    <div className="py-30 max-w-7xl mx-auto">
      <h3 className="text-[48px] text-[#101727] font-extrabold text-center mt-4">
        Premium Digital Tools
      </h3>
      <p className="text-[#627382] leading-5 text-center mb-6">
        Choose from our curated collection of premium digital products designed{" "}
        <br /> to boost your productivity and creativity.
      </p>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
        {products.map((product) => (
          <div className=" bg-white shadow-sm p-6 rounded-lg relative">
            <div className="w-15 h-15 border border-gray-300 rounded-full flex items-center justify-center mb-4">
              <img src={product.icon} alt="" className="w-10 h-10 " />
            </div>
            <h4 className="text-2xl text-[#101727] font-bold mb-3">
              {product.name}
            </h4>
            <p className="text-[#627382] leading-5 mb-6">
              {product.description}
            </p>
            <h2 className="text-[40px] font-bold text-[#101727] mb-6">
              {product.price}
              <span className="text-[20px] text-[#627382]">
                /{product.period}
              </span>
            </h2>
            <div className="mb-6">
              {product.features.map((feature, index) => (
                <div key={index} className="flex gap-1.5 mb-1">
                  <Check className="text-[#30B868]" />
                  <p className="text-[#627382] leading-5 font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[16px] font-semibold text-white px-5 py-3 rounded-4xl w-full mt-">
              Buy Now
            </button>
            <div className={`absolute top-4 right-4 badge px-3 py-4 rounded-4xl ${tagTypeStyle[product.tagType]}`}>{product.tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
