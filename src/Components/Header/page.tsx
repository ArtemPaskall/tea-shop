'use client'

import MainNavigation from "../Header-navigation/page"  
import HeaderTopPanel from "../Header-top-panel/page"
import Image from 'next/image'
import styles from './header.module.scss'
import { useGlobalContext } from "../../../lib/store"

export default function Header() {
  const { locale } = useGlobalContext() 
 
  return (
    <header>
      <HeaderTopPanel />
      <div className={styles.header}>
        <Image src='/logo.jpg' alt='Tea Shop Logo' width={60} height={60} />
        <input 
          className={styles['input-search']}
          type="text" 
          placeholder={locale === 'uk'?  'Знайди свій чай' : 'Найди свой чай'} 
        />
        <div>
          <Image src='/profile-icon.png' alt='Profile Image' width={18} height={18} className={styles.profile} />
          <Image src='/cart-icon.png' alt='Cart Image' width={20} height={20} className={styles.cart} />
        </div>
      </div>
      <MainNavigation />
    </header>
  )
}