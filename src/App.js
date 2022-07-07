import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from './action-creator'
import './App.css';




function App() {
  const account =  useSelector(state => state.account);
  const dispatch = useDispatch();


  const{depositMoney,withdrawMoney} = bindActionCreators(actionCreaters,dispatch)
  return(
    <div className='App'>
      <h3>{account}</h3>
      <button onClick={() => depositMoney(100)}>DEPOSIT</button>
      <button onClick={() => withdrawMoney(50)}>WITH DRAW</button>
    </div>
  )
}

export default App;
