import React, { useState } from "react";
import ReactDOM from "react-dom";
import Keypad from "./Keypad";
import History from "./History";
import {FaHistory,FaReact} from 'react-icons/fa';
import uuidv4 from 'uuid/v4';
import "./styles.css";


function App() {
  const state = {
    issign: false,
    expression: "",
    result: "",
    isresult: false
  };

  const [cstate, setcstate] = useState(state);
  const [history, sethistory] = useState([]);
  const [ishistory, setIshistory] = useState(false);

  const toggleHistory = () => {
    setIshistory(!ishistory);
  };
  const isoperator = op => {
    let ops = ["*", "+", "-", "/"];
    // console.log("isoperator: ", ops.indexOf(op));
    return ops.indexOf(op) !== -1;
  };

  const handleNum = e => {
    
    // console.log(e.target.textContent);
    let result=e.target.textContent;
    if(!cstate.isresult){result=cstate.result+result}
  
    setcstate({ ...cstate, result: result,isresult:false });
  };
  const handleOp = e => {
    // console.log(e.target.textContent);
    let operator = e.target.textContent;
    if (operator === "x") {
      operator = "*";
    } else if (operator === "÷") {
      operator = "/";
    }

    const last = cstate.result.slice(-1);
    // console.log("last", last);
    if (!isoperator(last)) {
      const result = cstate.result + operator;
      setcstate({ ...cstate, result: result,isresult:false });
    }
  };
  const handleSign = e => {
    // console.log(e.target.textContent);
    let result = cstate.result;
    if (cstate.issign) {
      result = result.slice(1);
    } else {
      result = "-" + result;
    }

    const issign = !cstate.issign;
    setcstate({ ...cstate, result, issign ,isresult:false});
  };

  const handleEqual = e => {
    const expression = cstate.result;
    // console.log(expression);
    const result = eval(expression).toString();
    // console.log(result);
    // const newhistory=history.push()
    const id=uuidv4();
    sethistory([...history, { id,expression, result }]);
    setcstate({ ...cstate, expression: expression, result: result,isresult:true });
  };

  const handleClear = () => {
    setcstate({ ...cstate, ...state,isresult:false });
  };

  const handleClearEntry = e => {
    handleClear();
    sethistory([]);
  };

  const handleLeftClear = e => {
    const length = cstate.result.length;
    const result = cstate.result.slice(0, length - 1);
    setcstate({ ...cstate, result: result,isresult:false });
  };

  const clearHistory = () => {
    sethistory([]);
  };

  const deleteHistory=(e,id)=>{
    e.stopPropagation();
    const newhistory=history.filter(h=>h.id!==id);
    sethistory([...newhistory]);
  }

  const populateHistory=(id)=>{
    let hitem=history.find(h=>h.id===id);
    // console.log(hitem,id,history);
    setcstate({...cstate,expression:'',result:hitem.expression});
    setIshistory(false);
  }
  return (
    <div className="App">
      <h1 className="header"><span><FaReact color='lightblue' size='1.6em'/></span>&nbsp; Calculator</h1>
      
      <div className="calculator">
        <div className="display_wrapper">
          <div className="expression">{cstate.expression}</div>
          <div className="result">{cstate.result}</div>
        </div>
        <div className="history_toggle" onClick={toggleHistory}>
        <FaHistory size='1.6rem' color='grey' />
        </div>
        {ishistory ? (
          <History history={history} populateHistory={populateHistory} clearHistory={clearHistory} deleteHistory={deleteHistory}/>
        ) : (
          <Keypad
            handleClear={handleClear}
            handleClearEntry={handleClearEntry}
            handleLeftClear={handleLeftClear}
            handleEqual={handleEqual}
            handleNum={handleNum}
            handleOp={handleOp}
            handleSign={handleSign}
          />
        )}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
