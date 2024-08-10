import styles from './navigation.module.scss'

const nav = ['Collection', 'Modiweek', 'Plus Size', 'Sustainability']
const Navigation = () => {
	return (
		<div className={styles.navigate}>
			{nav.map(item => (
				<button key={item}>{item}</button>
			))}
		</div>
	)
}

export default Navigation
