import { useState } from "react";

function Body(){
  const data = ["Coding", "Hiking", "Sleeping"]
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <>
      <div className="w-full h-full my-4">
        <div>
        </div>
        <ul>
          {data.map( (e,i) => {
            return <ListItem key={i} item={e} even={i % 2 === 0} isSelected={selectedItem === e} onClick={() => selectedItem === e ? setSelectedItem(null) : setSelectedItem(e)} />
          })}
        </ul>
      </div>
    </>
  )
}

function ListItem({ item, even, isSelected, onClick }){
  return (
    <li className="my-2 relative hover:cursor-pointer" onClick={onClick}>
      <div className={`${ even ? 'bg-slate-100' : 'bg-slate-200'} p-4 h-16 rounded-xl flex w-full absolute`}>
        <div className="flex gap-4 items-center">
          <input type="checkbox" className="" id="" />
          <h2>{item}</h2>
        </div>
        <div>
        </div>
      </div>
      <div className={`w-full ${isSelected ? 'h-40 pt-16' : 'h-16 pt-0'} transition-all  bg-slate-50 rounded-xl`}>
      </div>
    </li>

  )
}

export default Body;
