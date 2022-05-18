import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, MainContainer, CreateContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useStateValue } from "./components/context/StateProvider";
import { actionType } from "./components/context/reducer";

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchFoodItems = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <div>
          <Header />

          <main className="mt-14 px-4 md:mt-20 md:px-16 py-4 w-full">
            <Routes>
              <Route path="/*" element={<MainContainer />} />
              <Route path="/createItem" element={<CreateContainer />} />
            </Routes>
          </main>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
