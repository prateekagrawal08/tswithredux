import {
  createContext,
  Profiler,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Provider } from "react-redux";

interface MyButtonProps {
  title: string;
  disabled: boolean;
}

interface State {
  count: number;
}

type CounterAction = {} | {};

type RequestStatus =
  | {
      status: "idle";
    }
  | { status: "pending" };
const [enabled, setEnabled] = useState<RequestStatus>({ status: "idle" });

type theme = "light" | "dark";
const ThemeContext = createContext<theme>("light");
const useTheme = () => useContext(ThemeContext);

function myApp() {
  const [theme, setTheme] = useState<theme>("light");
  return <ThemeContext.Provider value={theme}></ThemeContext.Provider>;
}

const [items, setItems] = useState([]);
useEffect(() => {

    return()=>{

    }
}, [items]);

const getItems = useCallback(()=>{

}, [items]);

function buttonDisplay({ title, disabled }: MyButtonProps) {}

export default buttonDisplay;


interface Admin{
role : string;
}

interface User {
email : string;
}

function Role(roleType : Admin | User){

}