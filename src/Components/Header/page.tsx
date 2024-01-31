'use client'
import MainNavigation from '../MainNavigation/page'
import HeaderTopPanel from '../HeaderTopPanel/page'
import Image from 'next/image'
// import styles from './header.module.scss'
import { useCurrentLocale } from '../../../locales/client'
import Link from 'next/link'

function Header() {
  const currentLocale = useCurrentLocale()

  return (
    <div>
      asdfasdf
    </div>
    // <header>
    //   <HeaderTopPanel />
    //   <div className={styles.header}>
    //     <Image src="/logo.jpg" alt="Tea Shop Logo" width={60} height={60} priority />
    //     <input
    //       className={styles['input-search']}
    //       type="text"
    //       placeholder={currentLocale === 'uk' ? 'Знайди свій чай' : 'Найди свой чай'}
    //     />
    //     <div className="flex">
    //       <Link href={`/${currentLocale}/login`}>
    //         <Image
    //           src="/profile-icon.png"
    //           alt="Profile Image"
    //           width={18}
    //           height={18}
    //           className={styles.profile}
    //         />
    //       </Link>
    //       <Image
    //         src="/cart-icon.png"
    //         alt="Cart Image"
    //         width={20}
    //         height={20}
    //         className={styles.cart}
    //       />
    //     </div>
    //   </div>
    //   <MainNavigation />
    // </header>
  )
}

export default Header