import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

export default function Header(props) {
let [cart_Open, set_cart_Open] = useState(false)

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += ( Number.parseFloat(el.price) * el.amount));
  return(
    <div>
      {props.orders.map(el => (
        <Order state={props.state} set_state={props.set_state}  orders={props.orders} onChangeState={props.onChangeState} onDelete={props.onDelete} key={el.id} item={el}/>
      ))}
      <p className='summa'>Сума: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  )
}

const showNothing = () => {
   return( <div className='empty'>
        <h2>Товарів немає</h2>
   </div>

   )
}

  return (
    <header>
        <div>
            <span className='logo'>
                House Staff
            </span>
            <ul className='nav'>
               <li>Про нас</li>
               <li>Контакти</li>
               <li>Кабінет</li>
            </ul>
            <FaShoppingCart onClick={() => set_cart_Open(cart_Open = !cart_Open)} className={`shop-cart-button ${cart_Open && 'active'}`} />
            {cart_Open && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? 
                showOrders(props) : showNothing()}
              </div>
            )}
            
            <div className='presentation'></div>
        </div>
    </header>
  )
}
