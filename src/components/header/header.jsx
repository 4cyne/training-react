import styles from './Header.module.scss'
import Buttons from './buttons/Buttons'
import Logo from './logo/logo'
import Navigation from './navigation/Navigation'
import TopInfo from './top-info/TopInfo'

const Header = () => {
	return (
		<div className={styles.header}>
			<TopInfo />
			<div className={styles.header_row}>
				<Logo />
				<Navigation />

				<Buttons />
			</div>
		</div>
	)
}

export default Header
