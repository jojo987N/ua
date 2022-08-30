import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const Datatable = ({ rows, columns }) => {
  const handleDelete = (id) => {
    setTab({
      rows: tab.rows.filter((item) => item.id !== id),
      columns: tab.columns,
    });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: <b>Action</b>,
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {type !== "earnings" ? (
              <Link
                to={`/${type}/${
                  ((type === "users" || type === "drivers") &&
                    params.row.userId) ||
                  (type === "restaurants" && params.row.restaurantId) ||
                  params.row.id
                }`}
                style={{ textDecoration: "none" }}
              >
                <div className="viewButton">View</div>
              </Link>
            ) : (
              <></>
            )}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
