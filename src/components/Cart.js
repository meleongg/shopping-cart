import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Cart = (props) => {
    const { items, clearCart, updateCart } = props;

    const cartItems = items.map((item) => {
        if (item.quantity > 0) {
            return (
                <div className='cart-item' key={item.id}>
                    <h1 className='cart-item-desc'>{item.name} at ${item.price}</h1>
                    <h1 className='cart-item-quant'>{item.quantity} units</h1>
                    <h1 className='cart-item-total'>${item.quantity * item.price}</h1>
                    <div className='add-subtract-from-cart'>
                        <i onClick={() => updateCart(item.id, item.quantity + 1)} className="fa-solid fa-plus"></i>
                        <i onClick={() => updateCart(item.id, item.quantity - 1)} className="fa-solid fa-minus"></i>
                    </div>
                </div>
            );
        } 
        return null;
    });

    useEffect(() => {
        const calculateTotal = () => {
            let total = 0;
            let totalQuant = 0;
    
            for (let i = 0; i < items.length; i++) {
                if (items[i].quantity > 0) {
                    total += items[i].price * items[i].quantity; 
                    totalQuant += parseInt(items[i].quantity); 
                }
            }
    
            return (total === 0) ? 'No items in cart!' : `${totalQuant} items for $${total}`;
        }

        document.getElementById('cart-total').textContent = calculateTotal();
    }, [items]);

    return (
        <div id='cart-container'>
            <h1 id='cart-heading'>My Cart</h1>
            { cartItems }
            <div id='divider'></div>
            <p id='cart-total'></p>
            <div id='cart-actions'>
                <button id='clear-cart-btn' onClick={() => clearCart()}>Clear Cart</button>
                <NavLink id='checkout-btn' activeclassname='is-active' to='/thanks'>
                    Checkout
                </NavLink>
            </div>
        </div>
    );
}

export default Cart; 