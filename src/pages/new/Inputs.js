import { categoryType } from "../../formSource"
import { roles } from "../../formSource";

const Inputs = ({ type, setState, state }) => {

    switch (type) {
        case "products":
            return (
                <></>
            )
            break
        case "transactions":
            return getOrdersFromFirebase()
                .then(orders => orders.filter(order => order.status === "Completed"))
            break
        case "orders":
            return getOrdersFromFirebase()
            break
        case "drivers":
            return getUsersFromFirebase()
                .then(users => users.filter(user => user.Role === "driver"))
            break
        case "restaurants":
            return getRestaurantsFromFirebase()
            break
        case "categories":
            return (
                <div className="formInput" >
                    <label>Category</label>
                    <Select
                        styles={customStyles}
                        options={categoryType}
                        placeholder={"Select Type"} />
                </div>
            )
            break
        case "earnings":
            return getEarnings()
            break
        default:
            return (
                <div className="formInput" >
                    <label>Role</label>
                    <Select
                        styles={customStyles}
                        options={roles}
                        onChange={(e) => setState({
                            inputs: {
                                ...state.inputs,
                                role: e.value
                            }
                        })}
                    />
                </div>
            )
    }

}

const customStyles = {
    control: (base) => ({
        ...base,
        border: 0,
        width: "100%",
        borderBottom: '1px solid gray',
    }),
}

export default Inputs;