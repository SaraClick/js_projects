import DataInput from "./components/DataInput";
import TableItems from "./components/TableItems";

function App() {
  let shoppingList = [
    { item: "Apples", qty: 4 },
    { item: "Banana", qty: 6 },
    { item: "Eggs", qty: 6 },
  ];

  return (
    <div className="container">
      <div className="card main-card">
        <div className="card-body">
          <div className="card-title">React Shopping List</div>
          <div className="card-text">
            <DataInput />
          </div>
          <div className="card-text">
            <TableItems />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
