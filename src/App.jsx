import React,{useState} from "react";
import "./style.css";

const App = () => {

  ////////////////////////////////////////////
  
  const [username, setusername] = useState('')

  ///////////////////////////////////////////
  
  const submitHandler = (e) => {
    e.preventDefault();
  };

  ///////////////////////////////////////////
  
  return (
    <div>
      <form
        className="flex flex-col items-center"
        onSubmit={(e) => {
          submitHandler(e);
          console.log(username);
          setusername('')
        }}
      >
        <input
          value={username}
          type="text"
          onChange={(e)=>{
            setusername(e.target.value)
          }}
          className="border-rose-500 w-64 border-8 my-10 px-3 py-3 rounded-lg	"
          placeholder="Enteryour name"
        />
        <button
          className="bg-white border-4 my-10 w-24
 border-red-500 px-4 py-1 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
