import ItemsListContainer from "./components/ItemsListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemsListContainer greeting={"Esta es la lista de productos"} />
    </>
  );
}

export default App;
