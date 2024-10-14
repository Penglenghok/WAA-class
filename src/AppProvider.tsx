import { useEffect, ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export const AppContext: any = createContext(null);

const AppProvider = (props: Props) => {
  const [comments, setcomments] = useState<Array<any>>([]);

  useEffect(() => {
    fetch("http://localhost:3004/comments").then((response) => {
      response.json().then((data) => {
        setcomments(data);
      });
    });
  }, []);

  return (
    <AppContext.Provider value={{ comments, setcomments }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
