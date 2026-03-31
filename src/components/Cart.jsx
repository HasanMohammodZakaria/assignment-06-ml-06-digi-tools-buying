

const Cart = ({carts}) => {
    return (
        <div className='max-w-7xl w-full mx-auto bg-white shadow-md'>
            <h3>Your Cart</h3>
            {
                carts.map(item => 
                    <div key={item.id}>
                       <div>
                          <img src={item.icon} alt="" />
                       </div>
                        
                        
                    </div>

                )
            }

        </div>
    );
};

export default Cart;