import { useState } from "react";
import { useList } from "../contexts/ListContext";
import ListItem from "./ListItem";

function Body(){
  const { listState } = useList();
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <>
      <div className="w-full h-full my-4">
        <div className="flex w-full items-center gap-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className={`bg-slate-600 h-2 rounded-full w-${countState(listState)}/${listState.length}`}></div>
          </div>
          <div className="flex gap-4">
            <h3 className="text-sm text-slate-500"> {countState(listState)}/{listState.length}</h3>
            <h3 className="text-sm text-slate-500">Completed</h3>
          </div>
        </div>
        <ul>
          {listState.map( (e,i) => {
            return <ListItem key={i} index={Math.floor(Math.random() * 3)} list={e} even={i % 2 === 0} isSelected={selectedItem === e.title} onClick={() => selectedItem === e.title ? setSelectedItem(null) : setSelectedItem(e.title)} />
          })}
        </ul>
      </div>
    </>
  )
}

function countState(state){
  const result = state.filter( e => e.status === true);
  return result.length;
}

export default Body;
