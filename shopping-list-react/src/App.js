import DataInput from "./components/DataInput";
import Button from "./components/Button";
import TableItems from "./components/TableItems";

function App() {
  return (
    <div className="container">
      <div className="card main-card">
        <div className="card-body">
          <div className="card-title">React Shopping List</div>
          <div className="card-text">
            <DataInput />
            <Button className="btn-success" id="add" />
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
