import "./App.css";
import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list,setList] =useState([]);

  const [doList,setDoList] = useState([]); 

  function handleOnClick() {
    setList([...list,item])
    setItem("")
  }
  function handleOnClickReset(){
    setList([])
    setDoList([])
  }

  const ItemDeleteFromTo = (id)=>{
    // item remove from to list
    const updateditem = list.filter((ele,ind)=>{
      return ind!==id
    })

    // Item add in do list
    const doItem = list.filter((ele,ind)=>{
      return ind===id
    })

    setDoList([...doList,doItem])

    setList(updateditem);
  }

  const ItemDeleteFromDo =(id)=>{
    // delete from do list
    const updateditem = doList.filter((ele,ind)=>{
      return ind!=id
    })
    setDoList(updateditem)

    // Item add in to list
    const addItem = doList.filter((ele,ind)=>{
      return ind===id
    })
    setList([...list,addItem])
  }

  return (
    <div className="App">
      <div className="add-task">
        <input
          type="text"
          className="input-box"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="btn-add-task" onClick={handleOnClick}>
          Add task
        </button>
        <button className="btn-add-task" onClick={handleOnClickReset}>
          Reset
        </button>
      </div>
      <div className="to-do-block">
        <div className="to-list" id="to-list">
            {
              list.map((ele,id)=>{
                return (
                  <div className="keys" key={id}>
                  <h3>{ele}</h3>
                  <button className="material-symbols-outlined" onClick={()=>ItemDeleteFromTo(id)}>check</button>
                  </div>
                )
              })
            }
        </div>
        <div className="do-list">
          {
            doList.map((ele,id)=>{
              return (
                <div className="keys" key={id}>
                  <h3>{ele}</h3>
                  <button className="material-symbols-outlined" onClick={()=>ItemDeleteFromDo(id)}>delete</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
