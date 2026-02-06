import React, { createContext, useState } from 'react'

export const DataContext = createContext();

const AppContext = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default AppContext