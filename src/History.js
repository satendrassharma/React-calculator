import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const History = ({ history, clearHistory, deleteHistory, populateHistory }) => {
  return (
    <div className="history_wrapper">
      <div className="delete_all" onClick={clearHistory}>
        <FaTrashAlt color="red" size="1.6rem" />
      </div>
      {history.map(h => (
        <div
          className="history_item"
          key={h.id}
          onClick={() => populateHistory(h.id)}
        >
          <div className="expression_wrapper">
            <div className="delete" onClick={e => deleteHistory(e, h.id)}>
              <FaTrashAlt color="red" size="1.4rem" />
            </div>
            <div className="expression">{h.expression}</div>
          </div>
          <div className="result">= {h.result}</div>
        </div>
      ))}
    </div>
  );
};

export default History;
