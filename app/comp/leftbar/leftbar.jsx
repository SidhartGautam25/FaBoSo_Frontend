// components/Leftbar.js
const Leftbar = () => {
  return (
    <aside className="w-64 flex flex-col justify-between">
      {/* Upper Section - 6 equal parts */}
      <div className="flex flex-col border  justify-evenly h-3/5">
        <div className="flex items-center border justify-center h-1/6">
          Item 1
        </div>
        <div className="flex items-center border justify-center h-1/6">
          Item 1
        </div>
        <div className="flex items-center border justify-center h-1/6">
          Item 2
        </div>
        <div className="flex items-center border justify-center h-1/6">
          Item 3
        </div>
        <div className="flex items-center border justify-center h-1/6">
          Item 4
        </div>
        <div className="flex items-center border justify-center h-1/6">
          Item 5
        </div>
        <div className="flex items-center border justify-center h-1/6">
          Item 6
        </div>
      </div>

      {/* Lower Section - 4 equal parts */}
      <div className="flex flex-col border    shadow-lg justify-evenly h-2/5">
        <div className="flex items-center border justify-center h-1/5 bg-gray-100">
          Item 7
        </div>
        <div className="flex items-center border justify-center h-1/5 bg-gray-100">
          Item 7
        </div>
        <div className="flex items-center border justify-center h-1/5 bg-gray-100">
          Item 8
        </div>
        <div className="flex items-center border justify-center h-1/5 bg-gray-100">
          Item 9
        </div>
        <div className="flex items-center border justify-center h-1/5 bg-gray-100">
          Item 10
        </div>
      </div>
    </aside>
  );
};

export default Leftbar;
