import React from 'react';
import { BiTrash } from "react-icons/bi";

export default function Order(props) {
  return (
    <div className='item'>
        <img src={props.item.img} alt={props.item.title} />
        <h2>{props.item.title}</h2>
        <p>{props.item.price}$</p>
        <BiTrash className='delete-icon' onClick={() => props.onDelete(props.item.id)}/>
    </div>
  )
}
