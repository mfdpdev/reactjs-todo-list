import { CiTrash } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { useModal } from "../contexts/ModalContext";
import { useList } from "../contexts/ListContext";
import { deleteList, editList } from "../utils/FormUtils";

export default function ListItem({ list, even, isSelected, onClick }){
  const { listDispatch } = useList();
  const { modalDispatch } = useModal();

  return (
    <li className="relative hover:cursor-pointer" onClick={onClick}>
      <div className={`${ even ? 'bg-slate-100' : 'bg-slate-200'} items-center p-4 h-16 rounded-xl flex justify-between w-full absolute`}>
        <div className="flex gap-4 items-center">
          <div className="inline-flex items-center">
            <label className="flex items-center cursor-pointer relative">
              <input type="checkbox" onChange={() => {
                editList(listDispatch, list, {...list, status: !list.status} )
              }} onClick={(e) => e.stopPropagation()} className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-400 checked:bg-slate-800 checked:border-slate-800" id="check" />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
          </div> 
          <h2 className={`${list.status && "line-through"}`}>{list.title}</h2>
        </div>
        <div className={`py-1 px-2 font-bold text-red-500 bg-red-200 rounded-md`}>
          {list.category}
        </div>
        <div>
          <p className="text-sm sm:text-base text-slate-500">
            12/12/2025
          </p>
        </div>
      </div>
      <div className={`w-full flex ${isSelected ? 'h-40 pt-18 border-b-8 border-slate-600 pb-2' : 'h-16 pt-0'} px-4 transition-all  bg-slate-50 rounded-xl`}>
        <div className="w-full">
          {list.description}
        </div>
        <div className="mx-2 h-full w-auto flex flex-col justify-around items-end">
          <CiTrash className="text-xl" onClick={() => deleteList(listDispatch, list.id) } />
          <FaEdit onClick={() => {
            modalDispatch({ type: "OPEN_FORM", form: "EDIT", list});
          }}  />
        </div>
      </div>
    </li>
  )
}
