import { useState } from "react";
import { useList } from "../contexts/ListContext";
import ListItem from "./ListItem";
import flat from "../assets/images/flat-1.jpg";

function Body(){
  const { listState } = useList();
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <>
      <hr className="w-full text-slate-300 mt-4" />
      <div className="flex w-full items-center gap-6 my-4">
        { listState.length > 0 &&
          <>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className={`bg-slate-600 h-2 rounded-full w-${countState(listState)}/${listState.length}`}></div>
            </div>
            <div className="flex gap-4">
              <h3 className="text-sm text-slate-500"> {countState(listState)}/{listState.length}</h3>
              <h3 className="text-sm text-slate-500">Completed</h3>
            </div>
          </>
        }
      </div>
      <div className="w-full h-full overflow-auto">
        {listState.length < 1 ? 
          <>
            <div className="w-3/5 sm:w-4/5 mx-auto h-full grid place-items-center">
              <img className="" alt="" src={flat} />
            </div>
          </>
          : 
          <>
            <ul className="flex flex-col gap-4">
              {listState.map( (e,i) => {
                return <ListItem key={i} list={e} even={i % 2 === 0} isSelected={selectedItem === e.title} onClick={() => selectedItem === e.title ? setSelectedItem(null) : setSelectedItem(e.title)} />
              })}
            </ul>
          </>}
      </div>
    </>
  )
}

function countState(state){
  const result = state.filter( e => e.status === true);
  return result.length;
}

export default Body;
