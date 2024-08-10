import { useGetSvgiconsQuery } from '../../../services/malApi'
import styles from './Buttons.module.scss'

const Buttons = () => {
	const { error, isLoading, data: icons } = useGetSvgiconsQuery()

	return (
		<div className={styles.buttonsContainer}>
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : icons ? (
				<>
					{icons.slice(0, 4).map(item => (
						<button key={item.id}>
							<img src={item.image} alt='icon' />
						</button>
					))}
				</>
			) : null}
		</div>
	)
}

export default Buttons
