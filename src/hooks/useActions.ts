import { useDispatch } from "react-redux"; // useDispatch: gives access to the dispatch function inside of a component
import { bindActionCreators } from "redux";
import { actionCreators } from "../state"; // ? what is actionCreators referring to

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};