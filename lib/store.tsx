'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'
import { Locale } from '../i18n.config'

type ContextProps = {
  locale: Locale
  setLocale: Dispatch<SetStateAction<Locale>>
}

export const GlobalContext = createContext<ContextProps>({locale: 'uk', setLocale: () => {}})

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('uk')

  return (
    <GlobalContext.Provider value={{locale, setLocale}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const  useGlobalContext = () => useContext(GlobalContext)