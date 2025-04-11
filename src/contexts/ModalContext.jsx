import { createContext, useContext, useState, useReducer } from "react";

const ModalContext = createContext(null)

//custom hook
export function useModal(){
  return useContext(ModalContext)
}

export default function ModalProvider({ children }){

  const [modal, setModal] = useState(false);
  const [type, setType] = useState(null);

  const initialState = {
    modal: false,
    form: "CREATE",
    payload: {},
  };
  const modalReducer = (state, action) => {
    switch(action.type){
      case 'CLOSE_FORM':
        return { ...state, modal: false }
      case 'OPEN_FORM':
        const temp = { ...state, modal: true };
        if(action.form === "CREATE"){
          return { ...temp, form: "CREATE", list: {} };
        }else{
          return { ...temp, form: "EDIT", list: action.list };
        }
      default:
        return state;
    }
  }

  const [modalState, modalDispatch] = useReducer(modalReducer, initialState)

  const data = {
    modalState,
    modalDispatch,
  }

  return (
    <>
      <ModalContext.Provider value={data}>
        {children}
      </ModalContext.Provider>
    </>
  )
}
