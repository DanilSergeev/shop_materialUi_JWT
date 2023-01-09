import { useEffect, useState } from "react";
import Delivery from "./components/Delivery";
import MapSection from "./components/MapSection";
import Products from "./components/Products";
import PurchaseCondition from "./components/PurchaseCondition";
import Snac from "./components/Snac";
import StartSection from "./components/StartSection";
import Trust from "./components/Trust";
import Footer from "./pages/block/Footer";
import Header from "./pages/block/Header";
import './style/style.css';
import { getAllDevice, getOneDevice } from "./http/deviceApi";
import { chack } from "./http/userApi";

function App() {
  const [products, setProducts] = useState([
    { id: 0, name: "None one", price: 1000, img: process.env.REACT_APP_BASE_URL + "" },
  ])

  const [listBascet, setListBascet] = useState([
    // { id: 0, name: "Не сокрушимый надежный оплот, где Ленин нас к комунизму ведет", price: 1000, count: 1},
  ])


  const [isOpenSnack, setIsOpenSnack] = useState(false);
  const [isAuth, setIsAuth] = useState(false)
  const [bascetCount, setBascetCount] = useState(0)

  const openSnackFun = (id) => {
    if(isAuth){

      setIsOpenSnack(true)
      
      getOneDevice(id).then(data => {
        if(listBascet.find(item=>(item.id===id))){
          setListBascet(prev => prev.map(item=>(item.id === id)?{id: item.id, name:item.name,price: item.price, count: item.count+1} :item))
        }else{
          data.count = 1
          setListBascet(prev => [...prev, data])
        }
      });
    }else{
      alert("Вы не авторизированы")
    }
    
  }
  useEffect(()=>{
    let bascetCounts = 0;
    listBascet.map(item=> bascetCounts += item.count)
    setBascetCount(bascetCounts)
  },[listBascet])

  useEffect(() => {
    getAllDevice().then(data => {
      setProducts(data.rows)
    });
  }, [])

  useEffect(() => {
    chack().then(data => {
      setIsAuth(true)
    })
  }, [])

  return (
    <>
      <Header setListBascet={setListBascet} listBascet={listBascet} bascetCount={bascetCount} isAuth={isAuth} setIsAuth={setIsAuth}></Header>
      <main>
        <StartSection></StartSection>
        <Trust></Trust>
        <Products isAuth={isAuth} products={products} openSnackFun={openSnackFun}></Products>
        <Delivery></Delivery>
        <PurchaseCondition></PurchaseCondition>
        <MapSection></MapSection>
      </main>
      <Footer></Footer>

      <Snac cartOpen={isOpenSnack} setIsOpenSnack={setIsOpenSnack}></Snac>
    </>
  );
}

export default App;
