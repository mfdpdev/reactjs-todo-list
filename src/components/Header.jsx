import { useList } from "../contexts/ListContext";
import { days, monthNames } from "../utils/utils";

function Header(){
  const current = new Date();
  const { listState } = useList();

  return (
    <>
      <div className="w-full bg-white shadow-md rounded-xl p-2 flex flex-col justify-around">
        <div className="w-full h-1/2 bg-white rounded-xl p-2 flex justify-between">
          <div className="">
            <h1 className="text-2xl sm:text-3xl text-red-400 mb-2" ><strong>{days[current.getDay()]},</strong> {current.getDate()}</h1>
            <h3 className="text-slate-500 text-base sm:text-xl" >{monthNames[current.getMonth()]}</h3>
          </div>
          <div className="">
            <h3 className="text-slate-500 text-sm sm:text-base"><strong>{listState.length}</strong> Tasks</h3>
          </div>
        </div>
        <hr className="w-full text-slate-300 mt-4" />
        <div className="w-full bg-slate-100 rounded-xl h-12 flex justify-around items-center py-7 mt-2">
          {days.map( (e, i) => {
            if(i == current.getDay()){
              return <div key={i} className="font-bold bg-white p-2 rounded-md shadow-sm text-slate-800">{e.substring(0,2)}</div>
            }
            return <div className="font-bold p-2 text-slate-500" key={i}>{e.substring(0,2)}</div>
          })}
        </div>
      </div>
    </>
  )
}

export default Header
