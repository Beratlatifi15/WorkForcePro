//to combine our reducers
import { combineReducers } from "redux";
import departmentReducer from "./departmentReducer";
import ErrorReducer from "./ErrorReducer";
import EmployeeReducer from "./EmployeeReducer";

const roorReducer = combineReducers({
  errorsReducerContent: ErrorReducer,
  departmentReducerContent: departmentReducer,
  employeeReducerContent: EmployeeReducer,
});
export default roorReducer;
