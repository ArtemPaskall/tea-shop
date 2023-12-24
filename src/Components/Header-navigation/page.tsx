'use client'

import { useEffect, useState } from 'react'
import styles from './header-navigation.module.scss'
import Link from 'next/link'
import { useGlobalContext } from '../../../lib/store'

type Category = {
  name: string,
  uk: string,
  ru: string
}

const categories = [
  {name: 'tea', uk: 'чай', ru: 'чай'},
  {name: 'coffee', uk: 'кава', ru: 'кофе'},
  {name: 'honey', uk: 'мед', ru: 'мёд'},
  {name: 'sweets', uk: 'солодощі', ru: 'сладости'},
  {name: 'dried fruits', uk: 'сухофрукти', ru: 'сухофрукты'},
  {name: 'spices', uk: 'прянощі', ru: 'специи'},
  {name: 'gifts', uk: 'подарунки', ru: 'подарки'},
]

export default function MainNavigation() {
  const {locale, setLocale} = useGlobalContext() 
  // const [categories, setCategories] = useState<Category[]>([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const categories = await getAllCategories()
  //     console.log(categories)
  //     setCategories(categories)
  //   };

  //   fetchData();
  // }, [])

  return (
    <div>
      <ul className={styles['main-navigation__menu']}>
        {categories.map((category: Category, i) => {
          return (
            <li key={i} className={styles['main-navigation__li']}>
              <Link href={`/products/${i}`} className={styles['main-navigation__link']}>{category[locale]}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}