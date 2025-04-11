import { CiTrash } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { useModal } from "../contexts/ModalContext";
import { useList } from "../contexts/ListContext";
import { deleteList, editList } from "../utils/FormUtils";

export default function ListItem({ list, even, isSelected, onClick, index }){
  const colors = ["red", "green", "blue"];
  const { listDispatch } = useList();
  const { modalDispatch } = useModal();

  return (
    <li className="my-2 relative hover:cursor-pointer" onClick={onClick}>
      <div className={`${ even ? 'bg-slate-100' : 'bg-slate-200'} items-center p-4 h-16 rounded-xl flex justify-between w-full absolute`}>
        <div className="flex gap-4 items-center">
          <input onClick={ e => e.stopPropagation()} onChange={() => {
            editList(listDispatch, list, {...list, status: !list.status} )
          }} type="checkbox" className="h-4 w-4" id="" />
          <h2>{list.title}</h2>
        </div>
        <div className={`py-1 px-2 font-bold text-${colors[index]}-500 bg-${colors[index]}-200 rounded-md`}>
          {list.category}
        </div>
        <div>
          test
        </div>
      </div>
      <div className={`w-full flex ${isSelected ? 'h-40 pt-18 border-b-8 border-green-500 pb-2' : 'h-16 pt-0'} px-4 transition-all  bg-slate-50 rounded-xl`}>
        <div className="w-full">
          {list.description}
        </div>
        <div className="mx-2 h-full w-auto flex flex-col justify-around items-end">
          <CiTrash className="text-xl" onClick={() => deleteList(listDispatch, list.title) } />
          <FaEdit onClick={() => {
            modalDispatch({ type: "OPEN_FORM", form: "EDIT", list});
          }}  />
        </div>
      </div>
    </li>
  )
}
