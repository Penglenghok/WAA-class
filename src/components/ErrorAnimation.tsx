import Lottie from "lottie-react";
import animation from "../error-animation.json";

interface Props {
  text: string;
}

export default function ErrorAnimation({ text }: Props) {
  return (
    <div>
      <Lottie animationData={animation} loop={true} style={{ height: 400 }} />
      <h1 style={{ textAlign: "center" }}>{text}</h1>
    </div>
  );
}
