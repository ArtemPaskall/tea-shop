'use client'

import styles from './page.module.scss'
import { getAllDictionaries } from '@/../lib/getDictionary'
import { Locale } from '@/../i18n.config'
import { useGlobalContext } from '../../../lib/store'
import { useEffect, useState } from 'react'

export default function Home({ params } : { params: { locale: Locale }}) {
  const [dict, setDict] = useState<any>({}) 
  const {setLocale} = useGlobalContext()
  const {locale} = useGlobalContext()

  console.log(params)

  useEffect(() => {
    setLocale(params.locale)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const dict = await getAllDictionaries()
      setDict(dict)
    };

    fetchData()
  }, [])

  return (
    <>
      <h1>{dict[locale]?.helloWorld}</h1>
    </>
  )
}
