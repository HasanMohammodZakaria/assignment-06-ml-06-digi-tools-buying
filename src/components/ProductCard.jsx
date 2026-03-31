
import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const tagTypeStyle = {
    popular: "bg-[#E1E7FF] text-[#9514FA]",
    "best-seller": "bg-[#FEF3C6] text-[#BB4D00]",
    new: "bg-[#DBFCE7] text-[#0A883E]"
}




const ProductCard = ({product, carts, setCarts}) => {

    const [isAddToCard, setIsAddToCard] = useState(false)

    const handleAddToCard = () => {
    setIsAddToCard(true);

    const haveCart = carts.find((cart) => cart.id === product.id)

    if(haveCart) {
        toast.error('Product already in cart!')
        return;
    }
    setCarts([...carts, product])
    toast.success ('Product added to cart')
}

    return (
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
              ${product.price}
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
            <button onClick={handleAddToCard} className={` text-[16px] font-semibold text-white px-5 py-3 rounded-4xl w-full ${isAddToCard 
            ? "bg-green-500 text-white"
            : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"

            }`}>
            {isAddToCard ? "Add to Card" : "Buy Now"}
            </button>
            <div className={`absolute top-4 right-4 badge px-3 py-4 rounded-4xl ${tagTypeStyle[product.tagType]}`}>{product.tag}</div>
          </div>
    );
};

export default ProductCard;