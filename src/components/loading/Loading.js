import { DotLoader } from "react-spinners";
import { COLORS } from "../../globals";

const Loading = () => {
    return (
        <div className="loading">
          <DotLoader color={COLORS.LOADING} loading={true} size={150} />
        </div>
      );
}

export default Loading