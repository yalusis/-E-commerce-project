import React from 'react';
import { BiTrash } from "react-icons/bi";

export default function Order(props) {
  function handleInput(event) {
    let copy  = Object.assign([], props.orders);
    let copy2 =  Object.assign([], props.state.item)
           props.orders.map(obj => {
            if (obj.id === Number(props.item.id)) {
              if(Number(event.target.value) < 0) {
                alert("Не може бути від'ємне число!")
              } else {
               obj.amount = event.target.value;
               props.set_state ({...props.state, item: copy2})
               props.set_state({...props.state, order : copy});
              }
            }

            return props.state.order;
          });
    
      
    }

  return (
    <div className='item'>
        <img src={props.item.img} alt={props.item.title} />
        <h2>{props.item.title}</h2>
        <p>{props.item.price}$</p>
        <BiTrash className='delete-icon' onClick={() => props.onDelete(props.item.id)}/>
        <input type='number' value={props.item.amount} onChange={handleInput} />
    </div>
  )
}
