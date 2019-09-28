import React from 'react';

const Keypad=({handleClear,handleClearEntry,handleEqual,handleNum,handleOp,handleLeftClear,handleSign})=>{
  return(
    <div className="buttons">
          <div className="button cont" onClick={handleClearEntry}>
            CE
          </div>
          <div className="button cont" onClick={handleClear}>
            C
          </div>
          <div className="button cont" onClick={handleLeftClear}>
            &#11207;
          </div>
          <div className="button cont" onClick={handleOp}>
            &#247;
          </div>

          <div className="button num" onClick={handleNum}>
            7
          </div>
          <div className="button num" onClick={handleNum}>
            8
          </div>
          <div className="button num" onClick={handleNum}>
            9
          </div>
          <div className="button cont" onClick={handleOp}>
            x
          </div>

          <div className="button num" onClick={handleNum}>
            4
          </div>
          <div className="button num" onClick={handleNum}>
            5
          </div>
          <div className="button num" onClick={handleNum}>
            6
          </div>
          <div className="button cont" onClick={handleOp}>
            -
          </div>

          <div className="button num" onClick={handleNum}>
            1
          </div>
          <div className="button num" onClick={handleNum}>
            2
          </div>
          <div className="button num" onClick={handleNum}>
            3
          </div>
          <div className="button cont" onClick={handleOp}>
            +
          </div>

          <div className="button cont" onClick={handleSign}>
            +-
          </div>
          <div className="button num" onClick={handleNum}>
            0
          </div>
          <div className="button cont" onClick={handleNum}>
            .
          </div>
          <div className="button equal" onClick={handleEqual}>
            =
          </div>
        </div>
  )
}


export default Keypad;