import "./App.css";
import Products from './components/Products';
import NewProduct from "./components/NewProduct";
function App(props) {
  const products = [
    {
      id:'p1',
      title: "Nirma",
      amount:"100",
      date: new Date(2021, 8, 10)
    },
    {
      id:'p2',
      title: "SurfExcel",
      amount: "120",
      date: new Date(2000,7,9)
    },
    {
      id:'p3',
      title: "555",
      amount:"150",
      date: new Date(2005,9,22)
    },{
      id:'p4',
      title: "Tide",
      amount:"108",
      date: new Date(2008,3,16)
    }
  ];

  function printProductData(data){
    console.log("I am inside App.js")
    console.log(data);
  }
  return (
    <div>
      <NewProduct printProduct = {printProductData}/>
      <Products item={products}/>
    </div>
  );
}

export default App;
