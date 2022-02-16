import infoContext from '../src/components/store/info-context'
import './App.css';
import Form from './components/Form';
import Quote from './components/Quote';
import React, {useState} from 'react';
import Button from './components/Button';
import  {Route, Link} from 'react-router-dom';
import Testt from './components/Testt';
import Quotes from './components/Quotes';

function App() {

  const [data, setData] = useState([]);

  const dataFunc = (dataGot) => {
    let newArr = [...data];
    newArr.push(dataGot);
    setData(newArr);
    console.log(newArr);
  }

  return (
    <infoContext.Provider
    value={{data: data, parseData:dataFunc}}>
      <div className="app">
        <Route path="/" exact>
          <h1 className='text'>Record your Quote</h1>
          <Form parseData={dataFunc}/>
          <Quotes/>
          <Link to="/testpath"><Button buttonName="See Others'"/></Link>
        </Route>

        <Route path="/testpath" exact>
          <Testt/>
        </Route>
      </div>
    </infoContext.Provider>
  );
}

export default App;
