import styles from './header-navigation.module.scss'
import Link from 'next/link'

export default function MainNavigation() {
  return (
    <div>
      <ul className={styles['main-navigation__menu']}>
        <li className={styles['main-navigation__li']}>
          <Link href="/"  className={styles['main-navigation__link']}>Головна</Link>
        </li>
        <li>
          <Link href="/tea"  className={styles['main-navigation__link']}>Чай</Link>
        </li>
        <li>
          <Link href="/tea"  className={styles['main-navigation__link']}>Солодощі</Link>
        </li>
        <li>
          <Link href="/tea"  className={styles['main-navigation__link']}>Мед</Link>
        </li>
      </ul>
    </div>
  )
}