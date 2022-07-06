import './App.css';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        product: state.product,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price
      }
      break;
    case 'REMOVE_FROM_CART':
      return {
        product: state.product,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      }
      break; 
    default: return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    product: [
      {
        id: 1,
        name: 'Product 1',
        price: 1000,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 2000,
      },
      {
        id: 3,
        name: 'Product 3',
        price: 3000,
      },
    ],
    cart: [],
    total: 0,
  })
  return (
    <div className="App">
      {
        state.product.map(item => {
          return (
            <div key={item.id}>
              {item.name} - <button onClick={() => {
                dispatch({ type: 'ADD_TO_CART', payload: item })
              }} >Add to Cart</button>
            </div>
          )
        })
      }
      <div>
        {state.cart.map(item => {
          return (
            <div key={item.id}>
              {item.name} - <button onClick={() => {
                dispatch({ type: 'REMOVE_FROM_CART', payload: item })
              }} >Remove from Cart</button>
            </div>
          )
        })}
      </div>
      {state.total}
    </div>
  );
}

export default App;
