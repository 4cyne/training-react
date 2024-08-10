import Content from '../content/Content'
import Footer from '../footer/Footer'
import Header from '../header/header'
import Hero from '../hero/Hero'
import styles from './layout.module.scss'

const Layout = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<Hero />
			<Content />
			<Footer />
		</div>
	)
}

export default Layout
