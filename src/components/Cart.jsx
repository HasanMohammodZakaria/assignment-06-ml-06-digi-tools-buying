import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + Number(item.price), 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment Successful");
  };

  const handleRemove = (item) => {
    const filterArray = carts.filter((card) => card.id !== item.id);
    setCarts(filterArray);
    toast.success("Product Removed!");
  };

  return (
    <div className="max-w-7xl w-full mx-auto bg-white shadow-sm p-6 sm:p-8 md:p-10 rounded-2xl">
      <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#101727] font-bold mb-6">
        Your Cart
      </h3>

      {carts.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-5">
          <ShoppingCart className="w-16 sm:w-20 h-16 sm:h-20 text-gray-500 mb-4" />
          <p className="text-black text-base sm:text-lg md:text-[18px]">
            Your Cart is Empty
          </p>
        </div>
      ) : (
        <>
          {carts.map((item) => (
            <div
              key={item.id}
              className="flex flex-row justify-between items-center p-4 sm:p-5 bg-[#F9FAFC] shadow-sm rounded-2xl mb-5"
            >
             
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <h3 className="text-base sm:text-lg md:text-xl text-[#101727] font-semibold">
                    {item.name}
                  </h3>
                  <p className="font-medium text-[#627382] text-sm sm:text-base">
                    ${item.price}
                  </p>
                </div>
              </div>

            
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleRemove(item)}
                  className="font-bold text-[#FF3980] text-sm sm:text-base cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

         
          <div className="flex  sm:flex-row justify-between items-center p-4 border-t border-gray-200 mt-2">
            <p className="text-[#627382] text-sm sm:text-base mb-2 sm:mb-0">
              Total
            </p>
            <h3 className="font-bold text-[14px] sm:text-4 md:text-3xl text-[#101727]">
              $ {totalPrice}
            </h3>
          </div>

          <button
            onClick={handlePayment}
            className="mt-4 sm:mt-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full px-4 py-3 sm:py-4 rounded-full text-white font-bold text-base sm:text-lg"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
