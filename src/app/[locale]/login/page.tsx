'use client'
import  styles from './login.module.scss'
import { useI18n } from '../../../../locales/client'

export default function Login() {
  const t = useI18n()
  console.log('t', t)
  console.log('useI18n', useI18n)

  return (
    <div className={styles['login-wrapper']}>
      <div className={styles.modal}>
        <div>{t('login.title')}</div>
      </div>
    </div>
  )
}

