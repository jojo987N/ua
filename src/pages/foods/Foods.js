import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./foods.scss";
import { useEffect, useState } from "react";
import { APP_CONSTANT } from "../../globals";
import { getFoods } from "../../utils";
import Datatable from "../../components/datatable/Datatable";
import { foodsColumns } from "../../datatablesource";

const Foods = () => {
  const [foods, setFoods] = useState()
  useEffect(() => {
    getFoods().then(foods => setFoods(foods))
  }, [])

  return (

    <div className="foods">
      <Sidebar />
      <div className="foodsContainer">
        <Navbar />

        <div className="title">
          {APP_CONSTANT.TEXT.FOODS}
        </div>
        <div className="content">
          <Datatable rows={foods} columns={foodsColumns} />
        </div>

      </div>
    </div>
  );
};

export default Foods;