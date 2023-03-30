import React, {createContext, useContext, useEffect, useState } from 'react'

const GlobalStates = createContext()

const Context = ({children}) => {

  const [favoriteList, setfavoriteList] = useState(true)
  useEffect(() => {}, [favoriteList])

  return (
    <GlobalStates.Provider value={{favoriteList, setfavoriteList}}>
      {children}
    </GlobalStates.Provider>
  )
}

export default Context

export const useGlobalStates = () => useContext(GlobalStates)