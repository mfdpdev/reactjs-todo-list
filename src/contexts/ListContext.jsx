import { createContext, useContext, useReducer } from "react";

const ListContext = createContext(null)

//custom hook
export function useList(){
  return useContext(ListContext)
}

export default function ListProvider({ children }){

  const initialState = [];
  const listReducer = (state, action) => {
    switch(action.type){
      case 'CREATE':
        const exists = state.some( e => e.title === action.payload.title);
        if(exists){
          return state;
        }
        return [...state, action.payload];
      case 'DELETE':
        return state.filter( e => e.id !== action.id);
      case 'EDIT':
        const result = state.map( e => {
          if(e.id === action.id){
            return action.payload;
          }

          return e;
        });
        return result;
      default:
        return state;
    }
  }

  const [listState, listDispatch] = useReducer(listReducer, initialState)
  const data = {
    listState,
    listDispatch,
  }

  return (
    <>
      <ListContext.Provider value={data}>
        {children}
      </ListContext.Provider>
    </>
  )
}
