import DataInput from "./components/DataInput";
import TableItems from "./components/TableItems";

function App() {
  // let shoppingList = [
  //   { item: "Apples", qty: 4, id: 1 },
  //   { item: "Banana", qty: 6, id: 2 },
  //   { item: "Eggs", qty: 6, id: 3 },
  // ];

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
