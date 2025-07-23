const Calendar = ({ dateString }) => {
  const date = new Date(dateString.replace(/(\d+)\s(\w+)\s(\d+)/, '$2 $1, $3'));
  
  const month = date.toLocaleString('id-ID', { month: 'short' }).toUpperCase();
  const day = date.getDate();

  return (
    <div className="bg-zinc-700 rounded-lg shadow-md w-20 text-center overflow-hidden">
      <div className="bg-amber-400 text-zinc-900 px-2 py-1 text-xs font-bold">
        {month}
      </div>
      <div className="text-white text-3xl font-bold py-2">
        {day}
      </div>
    </div>
  );
};

export default Calendar;