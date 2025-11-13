export default function Fruit({ name }) {
  return (
    <div
      className={
        "col-span-1 px-4 py-1 hover:bg-white cursor-pointer rounded-sm"
      }
      onClick={() => {
        alert(`${name} selected`);
      }}>
      {name}
    </div>
  );
}
