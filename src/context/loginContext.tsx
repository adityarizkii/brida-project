import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type DataUserType = {
  email: string;
  firstName: string;
  lastName: string;
};

interface ContextType {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
  data: DataUserType;
  setData: Dispatch<SetStateAction<DataUserType>>;
}

const LoginContext = createContext<ContextType>({
  status: false,
  setStatus: (): boolean => false,
  data: {
    email: "",
    firstName: "",
    lastName: "",
  },
  setData: (): DataUserType => ({
    email: "",
    firstName: "",
    lastName: "",
  }),
});

export const LoginContextProvider = ({ children }: any) => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState<DataUserType>({
    email: "",
    firstName: "",
    lastName: "",
  });

  return (
    <LoginContext.Provider value={{ status, setStatus, data, setData }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
