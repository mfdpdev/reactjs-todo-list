import { useState } from "react";

function Footer(){
  const [modal, setModal] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => {
          setModal(true);
        }} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold p-3 rounded-xl">
          + Create New
        </button>
      </div>
      <div onClick={() => setModal(false)} className={`w-full left-0 h-full ${modal ? 'bottom-0' : '-bottom-full'} absolute duration-500`} >
        <div onClick={(e) => e.stopPropagation()} className={`w-full rounded-2xl inset-shadow-sm rounded-b-none h-1/2 bg-white absolute bottom-0 px-4 py-6`} >
          <div className="h-full gap-4 grid grid-rows-4 grid-cols-2 items-end">
            <div className="col-span-2">
              <h1 className="text-center">New Task Todo</h1>
            </div>
            <div className="col-span-2"></div>
            <div></div>
            <div></div>
            <div>
              <button onClick={() => setModal(false)} className="w-full bg-white hover:bg-red-600 text-red-500 border border-red-500 font-bold p-3 rounded-xl">
                Close
              </button>
            </div>
            <div>
              <button onClick={() => setModal(false)} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold p-3 rounded-xl">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
