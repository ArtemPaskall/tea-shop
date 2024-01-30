import styles from './header-top-panel.module.scss'
import LangSwitcher from '../LangSwitcher/page'

const HeaderTopPanel = () => {
  return (
    <div className={styles.panel}>
      <LangSwitcher />
      <div>093 123 45 88</div>
    </div>
  )
}

export default HeaderTopPanel
