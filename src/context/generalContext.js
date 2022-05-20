import { createContext, useState, useEffect } from "react";

const GeneralContext = createContext();

const GeneralContextProvider = (props) => {
  const [state, setState] = useState();

  useEffect(() => {
    getShops();
  }, []);

  const getShops = async () => {
    const res = await fetch(
      "https://shy-puce-sea-urchin-boot.cyclic.app/api/shop"
    );
    const data = await res.json();
    console.log(data);
    setState([...state, data]);
  };

  return (
    <GeneralContext.Provider value={{ state }}>
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
