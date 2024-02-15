function App() {
  return (
    <>
      <div className="flex gap-4 justify-center items-center h-screen">
        <button className="px-4 py-2 rounded bg-green-500 text-white text-xl">
          increment
        </button>
        <h1 className="text-4xl">0</h1>
        <button className="px-4 py-2 rounded bg-green-500 text-white text-xl">
          decrement
        </button>
      </div>
    </>
  );
}

export default App;
