import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/featurs/counter/counterSlice";

function App() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  return (
    <>
      <div className="flex gap-4 justify-center items-center h-screen">
        <button onClick={()=>dispatch(increment())} className="px-4 py-2 rounded bg-green-500 text-white text-xl">
          increment
        </button>
        <h1 className="text-4xl">{count}</h1>
        <button onClick={()=>dispatch(decrement())} className="px-4 py-2 rounded bg-green-500 text-white text-xl">
          decrement
        </button>
      </div>
    </>
  );
}

export default App;
