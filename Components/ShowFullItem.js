import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";

export default function ShowFullItem(props) {

  return (
    <div className='full-item'>
        <div>
            <TiDeleteOutline className='delete-show' onClick={() => props.onShowItem()} />
            <img src={props.item.fullItem.img} alt={props.item.fullItem.title}/>
            <h2>{props.item.fullItem.title}</h2>
            <p>{props.item.fullItem.desc}</p>
            <b>{props.item.fullItem.price}$</b>
            <div className='add-to-cart' onClick={() => props.onAdd(props.item.fullItem)}>+</div>
        </div>
    </div>
  )
}
