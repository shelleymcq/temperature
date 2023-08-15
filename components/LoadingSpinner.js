import Image from "next/image";
import spinner from "../images/Spinner-1s-100px.gif";

const LoadingSpinner = () => {
  return (
    <div className="p-1 md:p-5">
      <Image src={spinner} alt="loading spinner" />
    </div>
  );
};

export default LoadingSpinner;
