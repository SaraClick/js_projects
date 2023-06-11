// {value} parameter in Square function declaration is the info passed from the Board parent in App.js onto the Square children components
// onSquareClick function is passed from Board parent to Square children. This is because childrens cannot update parent components but the other way around
export default function Square({ value, onSquareClick }) {
  // value is a Js variable hence {}
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
