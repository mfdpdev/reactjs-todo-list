function Header(){
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const current = new Date();
  const suffix = getSuffix(current);
  return (
    <>
      <div className="w-full bg-white shadow-md rounded-xl p-2 flex flex-col justify-between">
        <div className="w-full h-1/2 bg-white rounded-xl p-2 flex justify-between">
          <div className="">
            <h1 className="text-2xl sm:text-3xl text-red-400 mb-2" ><strong>{days[current.getDay()]},</strong> {current.getDate()}{suffix}</h1>
            <h3 className="text-slate-500 text-base sm:text-lg" >{monthNames[current.getMonth()]}</h3>
          </div>
          <div className="">
            <h3 className="text-slate-500 text-sm sm:text-base"><strong>12</strong> Tasks</h3>
          </div>
        </div>
        <div className="w-full bg-slate-100 rounded-xl h-12 flex justify-around items-center py-7 mt-4">
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

const getSuffix = (date) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const exceptions = [11, 12, 13];
  const lastDigit = date % 10;

  if (exceptions.includes(date % 100)) {
    return "th";
  }

  return suffixes[lastDigit] || "th";
};

export default Header
