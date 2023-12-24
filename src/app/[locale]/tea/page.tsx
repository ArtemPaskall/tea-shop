'use client'

import React, { useEffect, useState } from 'react'
import { getAllDictionaries } from '@/../lib/getDictionary'
import { useGlobalContext } from '@/../lib/store'

export default function Tea() {
  const [dict, setDict] = useState<any>({}) 
  const {locale} = useGlobalContext()

  useEffect(() => {
    const fetchData = async () => {
      const dict = await getAllDictionaries()
      setDict(dict)
    };

    fetchData()
  }, [])

  console.log(locale)
  return (
    <>
      <h1>{dict[locale]?.tea}</h1>
      <h1>yyy</h1>
    </>
 )
}
