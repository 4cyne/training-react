import { useGetLogoQuery } from '../../../services/malApi'
import styles from './Logo.module.scss'

const Logo = () => {
	const { data: logo, error, isLoading } = useGetLogoQuery(1)
	return (
		<div className={styles.logo}>
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : logo ? (
				<>
					<img src={logo.image} alt='logo' />
				</>
			) : null}
		</div>
	)
}

export default Logo
