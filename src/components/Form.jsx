import { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { useModal } from "../contexts/ModalContext";
import { useList } from "../contexts/ListContext";
import { clearForm, createList, editList } from "../utils/FormUtils";
import { createId } from "../utils/utils";

export default function Form(){
  const { listDispatch } = useList();
  const { modalState, modalDispatch } = useModal();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("personal");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if(modalState.form === "EDIT"){
      setTitle(modalState.list.title);
      setCategory(modalState.list.category);
      setDescription(modalState.list.description);
    }else{
      clearForm(setTitle, setCategory, setDescription);
    }
  }, [modalState]);

  return (
    <>
      <div className={`${modalState.modal ? 'bottom-0' : '-bottom-full'} z-10 left-0 w-full rounded-2xl rounded-b-none h-auto bg-white absolute px-4 py-6 pt-4 duration-500`} >
        <hr className="w-1/3 mx-auto border-2 text-slate-300 mb-6" />
        <div className="">
          <div className="">
            <h1 className="text-xl font-bold text-center my-6">New Task ToDo</h1>
            <hr className="w-full my-4 text-slate-200" />
          </div>
          <div className="">
            <h1 className="text-base font-bold">Title Task</h1>
            <div className="my-2 w-full max-w-full min-w-[200px]">
              <input onChange={(e) => setTitle(e.target.value)} value={title} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300" placeholder="Add Task Name..." />
            </div>
          </div>
          <div>
            <h1 className="text-base font-bold mt-4">Category</h1>
            <div className="w-full h-16 font-bold flex gap-2 bg-slate-50 rounded-lg my-2 p-2 hover:cursor-pointer">
              <div onClick={() => setCategory("personal")} className={`w-full h-full ${category === "personal" ? "bg-red-500 text-white" : "bg-none text-slate-500"} rounded-lg flex items-center gap-4 justify-center`}>
                <IoMdPerson />
                Personal
              </div>
              <div onClick={() => setCategory("team")} className={`w-full h-full ${category === "team" ? "bg-red-500 text-white" : "bg-none text-slate-500"} rounded-lg flex items-center gap-4 justify-center`}>
                <MdGroups className="text-2xl" />
                Team
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-base font-bold mt-4">Description</h1>
            <div className="my-2 w-full max-w-full min-w-[200px]">
              <textarea 
                className="w-full resize-none bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300" 
                placeholder="Add Descriptions..." 
                rows="4"
                value={description}
                onChange={ e => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="flex">

          </div>
          <div className="flex gap-2">
            <button onClick={() => {
              modalDispatch({ type: "CLOSE_FORM", form: "CREATE" });
              clearForm(setTitle, setCategory, setDescription);
            }} className="w-full bg-white hover:bg-red-500 hover:text-white text-red-500 border border-red-500 font-bold p-3 rounded-xl">
              Close
            </button>
            <button onClick={() => {
              if(modalState.form == "CREATE"){
                createList(listDispatch, { id: createId(), title, category, description, status: false });
              }else{
                editList(listDispatch, modalState.list.id, {...modalState.list, title, category, description} )
              }

              modalDispatch({ type: "CLOSE_FORM" });
              clearForm(setTitle, setCategory, setDescription);
            }}className="w-full bg-red-500 hover:bg-red-600 text-white font-bold p-3 rounded-xl">
              {modalState.form}
            </button>
          </div>
        </div>
      </div>
      <div onClick={() => {
        modalDispatch({ type: "CLOSE_FORM", form: "CREATE" })
        clearForm(setTitle, setCategory, setDescription);
      }} className={`${modalState.modal ? 'visible opacity-100' : 'invisible opacity-0'} duration-500 w-full h-full bg-slate-900/50 absolute left-0 bottom-0`}></div>
    </>
  )
}
