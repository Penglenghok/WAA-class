import { ReactNode } from "react";
import "./../../App.css";
type Props = {
  children: ReactNode;
};

export default function index({ children }: Props) {
  return <ul className="todo-main">{children}</ul>;
}
