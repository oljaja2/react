import { useState } from "react";

function Settings() {
  const [count, setCount] = useState(0);

  return (
    <div className="row">
      <div className="col-6">
        <p>Клики: {count}</p>
      </div>
      <div className="col-6">
        <button
          className="btn btn-warning"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          нажимай тут
        </button>
      </div>
    </div>
  );
}

export default Settings;
