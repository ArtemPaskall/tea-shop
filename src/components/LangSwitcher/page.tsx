'use client'

import styles from './lang-switcher.module.scss'
import { useChangeLocale } from '../../../locales/client'

const LangSwitcher = () => {
  const changeLocale = useChangeLocale()

  return (
    <div>
      <span className={styles['span-UA']} onClick={() => changeLocale('uk')}>
        UK
      </span>
      |
      <span className={styles['span-RU']} onClick={() => changeLocale('ru')}>
        RU
      </span>
    </div>
  )
}

export default LangSwitcher
