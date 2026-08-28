import { createContext, useState } from "react";

export const TrasactionContext = createContext()

function TransactionContextProvider({children}) {

  const [transaction , setTransaction] = useState([]);

  return (
    <TrasactionContext.Provider value={{transaction , setTransaction}}>
      {children}
    </TrasactionContext.Provider>
  )


}

export default TransactionContextProvider;
