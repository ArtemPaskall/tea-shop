// 'use client'

import { useRouter } from 'next/navigation'
import styles from './lang-switcher.module.scss'
import { useGlobalContext } from '../../../lib/store'
import { Locale } from '@/../i18n.config' 


const LangSwitcher = () => {
  const router = useRouter()
  const {locale, setLocale} = useGlobalContext()

  const switchLangHandler = (e: React.MouseEvent) => {
    if (e.currentTarget.textContent) {
      console.log(e.currentTarget.textContent.toLowerCase())
      const newLocale = e.currentTarget.textContent.toLowerCase() as Locale
      setLocale(newLocale)

      router.push(`http://localhost:3000/${newLocale}/tea`);
    }
  }

  return (
    <div>
      <span className={styles['span-UA']} onClick={switchLangHandler}>UK</span>
      | 
      <span className={styles['span-RU']} onClick={switchLangHandler}>RU</span>
    </div>
  )
}


export default LangSwitcher