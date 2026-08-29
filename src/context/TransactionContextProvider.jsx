import { createContext, useState } from "react";

export const TrasactionContext = createContext()

function TransactionContextProvider({children}) {

  const [transaction , setTransaction] = useState([]);

  const deleteTransaction = (itemId) => {
    setTransaction(
      (prev) => (
        prev.filter((elem) => elem.id !== itemId)
      )
    )
  }

  const updateTransaction = (updatedTransaction) => {
  setTransaction((prev) =>
    prev.map((item) =>
      item.id === updatedTransaction.id
        ? updatedTransaction
        : item
    )
  );
};

  return (
    <TrasactionContext.Provider value={{transaction , setTransaction , deleteTransaction , updateTransaction}}>
      {children}
    </TrasactionContext.Provider>
  )


}

export default TransactionContextProvider;
