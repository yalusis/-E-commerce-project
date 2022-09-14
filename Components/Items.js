import React from 'react'
import Item from './Item'

export default function Items(props) {
  return (
    <main>
        {props.items.map(el => (
            <Item key={el.id} onShowItem={props.onShowItem} item={el} onAdd={props.onAdd}/>
        ))}
    </main>
  )
}
