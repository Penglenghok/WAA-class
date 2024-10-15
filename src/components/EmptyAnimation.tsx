import Lottie from "lottie-react";
import animation from "../empty-animation.json";

export default function EmptyAnimation() {
  return (
   <div>
    <Lottie animationData={animation} loop={true} style={{ height: 400 }} />
    <h1 style={{ textAlign: "center" }}>No users here.</h1>
   </div> 
  );
}
