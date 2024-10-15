import Lottie from "lottie-react";
import animation from "./../search-animation.json";

export default function LoadingAnimation() {
  return (
    <Lottie animationData={animation} loop={true} style={{ height: 400 }} />
  );
}
