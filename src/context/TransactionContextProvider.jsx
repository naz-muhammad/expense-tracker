import { createContext, useEffect, useState } from "react";

export const TrasactionContext = createContext()

function TransactionContextProvider({children}) {

  const [transaction , setTransaction] = useState(()=> {
     const savedTransaction = localStorage.getItem("transaction");

     return savedTransaction 
     ? JSON.parse(savedTransaction)
     : []
  });

  useEffect(()=> {
    localStorage.setItem("transaction" , JSON.stringify(transaction))
  }, [transaction])

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
