import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./categories.scss";
import { useEffect, useState } from "react";
import { APP_CONSTANT } from "../../globals";
import { getCategories } from "../../firebase";
import Datatable from "../../components/datatable/Datatable";
import { categoryColumns } from "../../datatablesource";

const Categories = () => {
  const [categories, setCategories] = useState()
  useEffect(() => {
    await getCategories().then(categories => setCategories(categories))
  }, [])
  return (
    <div className="categories">
      <Sidebar />
      <div className="categoriesContainer">
        <Navbar />
        <div className="title">
          {APP_CONSTANT.TEXT.ADD_NEW_CATEGORY}
          <Link to={`/${PAGE.ADD_NEW_CATEGORY}/new`} className="link">
            {APP_CONSTANT.TEXT.ADD_NEW}
          </Link>
        </div>
        <div className="content">
          <Datatable rows={categories} columns={categoryColumns} />
        </div>
      </div>
    </div>
  );
};
export default Categories;