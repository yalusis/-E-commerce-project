import React, { useState } from 'react'

export default function Categories(props) {

  const [state] = useState({categories : [
    {
      key: 'all',
      name: 'Все'
    },
    {
      key: 'chairs',
      name: 'Стільці'
    },
    {
      key: 'desk',
      name: 'Столи'
    },
    {
      key: 'bed',
      name: 'Ліжка'
    },
    {
      key: 'shelves',
      name: 'Полиці'
    },
    {
      key: 'for-clothes',
      name: 'Для одягу'
    }
  ]})
  return (
    <div className='categories'>
      {state.categories.map(el => (
        <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
      ))}
    </div>
  )
}
