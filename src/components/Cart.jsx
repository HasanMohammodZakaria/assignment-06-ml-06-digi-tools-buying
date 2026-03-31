import { ShoppingCart } from "lucide-react";
const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + Number(item.price), 0);

  const handlePayment = () => {
    setCarts([]);
  };

  const handleRemove = (item) => {
    const filterArray = carts.filter(card => card.id !== item.id)
    setCarts(filterArray)
  }


  return (
    <div className="max-w-7xl w-full mx-auto bg-white shadow-sm p-10 rounded-2xl">
      <h3 className="text-6 text-[#101727] font-bold mb-6">Your Cart</h3>

      {carts.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-5">
          <ShoppingCart className="w-20 h-20 text-gray-500 mb-4"/>
          <p className="text-black text-[18px]">Your Cart is Empty</p>
        </div>
      ) : (
        <>
          {carts.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-5 bg-[#F9FAFC] shadow-sm rounded-2xl mb-5"
            >
              <div className="flex justify-center items-center gap-6">
                <div className="w-15 h-15 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-10 h-10 object-contain block"
                  />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <h3 className="text-5 text-[#101727] font-semibold ">
                    {item.name}
                  </h3>
                  <p className="font-medium text-[#627382]">${item.price}</p>
                </div>
              </div>
              <button onClick={()=> handleRemove(item)} className="font-bold text-[#FF3980] cursor-pointer">Remove</button>
            </div>
          ))}

          <div className="flex justify-between p-4">
            <p className="text-[#627382]">Total</p>
            <h3 className="font-bold text-6 text-[#101727]">$ {totalPrice}</h3>
          </div>

          <button
            onClick={handlePayment}
            className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full px-4 py-3 rounded-full text-white font-bold"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
