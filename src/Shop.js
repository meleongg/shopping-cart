import React, { useState } from 'react';
import uniqid from 'uniqid';
import Item from './components/Item';
import Cart from './components/Cart';

const Shop = () => {
    const [items, setItems] = useState([
        {id: uniqid(), imageName: 'foam-roller.jpeg', name: 'Foam Roller', price: 20, quantity: 0},
        {id: uniqid(), imageName: 'vessi.jpeg', name: 'Vessi Footwear', price: 80, quantity: 0},
        {id: uniqid(), imageName: 'clam-soup.jpeg', name: 'Clam Soup', price: 5, quantity: 0}
    ]);

    const clearCart = () => {
        const newState = items.map(item => {
            return {...item, quantity: 0};
        });

        setItems(newState);
    }

    const updateCart = (id, quantity) => {
        const newState = items.map(item => {
            if (item.id === id) {
                return {...item, quantity: quantity};
            }

            return item; 
        });

        setItems(newState);
    }

    const itemsList = items.map((item) => {
        return <Item key={item.id} id={item.id} imageName={item.imageName} name={item.name} price={item.price} quantity={item.quantity} updateCart={updateCart} />
    });

    return (
        <div id='shop-container'>
            <Cart items={items} clearCart={clearCart} updateCart={updateCart} />
            <h1 id='items-container-header'>Hot Deals</h1>
            <div id='items-container'>
                <ul id='items-list'>
                    { itemsList }
                </ul>
            </div>
        </div>
    );
}

export default Shop; 