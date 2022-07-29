import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState } from "react";
import Items from "./Components/Items";
import Categories from "./Components/Categories";
import ShowFullItem from "./Components/ShowFullItem";

function App() {

  const [state, set_state] = useState({ 
    order: [ ],
    currentItems: [],
    showItem : false,
    item : [
    {
      id: 0,
      title: 'Сірий стілець',
      img: './image/grey-chair.jpg',
      desc: 'Зручний та стильний стілець, який неодмінно прикрашить ваш дім',
      category: 'chairs',
      price: '79.99'
    },
    {
      id: 1,
      title: 'Письмовий стіл',
      img: './image/desk.jpg',
      desc: 'Комфортний письмовий стіл, який неодмінно прикрашить ваш дім',
      category: 'desk',
      price: '99.99'
    },
    {
      id: 2,
      title: 'Ліжко',
      img: './image/bed.jpg',
      desc: 'Велике та комфортне ліжко, яке неодмінно прикрашить ваш дім',
      category: 'bed',
      price: '249.99'
    },
    {
      id: 3,
      title: 'Вішалки для одягу',
      img: './image/сlothes-hangers.jpg',
      desc: 'Практична вішалка для одягу, яка неодмінно прикрашить ваш дім',
      category: 'for-clothes',
      price: '49.99'
    },
    {
      id: 4,
      title: 'Настінні полиці',
      img: './image/wall-shelves.jpeg',
      desc: 'Практична настінна полиця, яка неодмінно прикрашить ваш дім',
      category: 'shelves',
      price: '99.99'
    },
    {
      id: 5,
      title: 'Гардеробні для одягу',
      img: './image/Wardrobes.jpg',
      desc: 'Велткі гардеробні для одягу, які неодмінно прикрашить ваш дім',
      category: 'for-clothes',
      price: '149.99'
    },
  ]})

  const [fullItem, set_Item] = useState()

  const chooseCategory = (category) => {
  if(category === 'all') {
    set_state({ ...state, currentItems : state.item})
    return
  }
    set_state({...state, currentItems : state.item.filter(el => el.category === category)}) 
  }

  const onAdd = (item) => {
    let item_in_a_cart = false
    state.order.forEach((el) => {
      if(el.id === item.id) {
          item_in_a_cart = true
      }
    })

    if(!item_in_a_cart) {
      copy.push(item)
      set_state({...state, order: copy})
    } else if (item_in_a_cart) {
      alert( item.title + " вже у кошику!")
    } }

  let copy = Object.assign([], state.order);

  return (
    <div className="wrapper">
      <Header orders={state.order} onDelete={(id) => {
        const basket = state.order.filter(el => el.id !== id)
        set_state({...state, order: basket})
      }}/>
      <Categories chooseCategory={chooseCategory}/>
      <Items onShowItem={(item) => { 
        set_Item({ fullItem : item})
        set_state({...state, showItem: !state.showItem})
      }} items={state.currentItems.length === 0 ? state.item : state.currentItems} onAdd={onAdd}/>
      {state.showItem && <ShowFullItem item={fullItem} onAdd={onAdd} onShowItem={() => {
                                                                    set_state({...state, showItem: !state.showItem})
                                                                    }}/>}
      <Footer />
    </div>
  );
}

export default App;
