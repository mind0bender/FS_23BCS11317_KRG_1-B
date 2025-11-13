import Fruit from "./Fruit";

const fruits = ["Apple", "Banana", "Cherry", "Grapes", "Orange", "Mango"];

function App() {
  return (
    <div
      className={
        "w-full min-h-screen bg-blue-200 flex flex-col gap-8 justify-center items-center"
      }>
      <h2 className={"text-2xl font-semibold"}>Fruit Basket</h2>
      <div
        className={"grid grid-cols-3 gap-1 bg-blue-100 rounded-md px-4 py-3"}>
        {fruits.map((fruitName) => (
          <Fruit name={fruitName} />
        ))}
      </div>
    </div>
  );
}

export default App;
