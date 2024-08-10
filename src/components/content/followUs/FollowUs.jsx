import { useGetFollowQuery } from '../../../services/malApi'
import styles from './FollowUs.module.scss'

const FollowUs = () => {
	const { data: follow, isLoading, error } = useGetFollowQuery()

	const filteredFollow = follow?.filter(items => items.id % 2 === 0)
	const firstImage = filteredFollow?.slice(0, 1)

	return (
		<div className={styles.followUs}>
			<h1 className={styles.title}>Follow us</h1>
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : follow ? (
				<div className={styles.followsContainer}>
					<div>
						{firstImage.map(item => (
							<img
								className={styles.bigImage}
								key={item.id}
								src={item.image}
								alt=''
							/>
						))}
					</div>
					<div className={styles.follows}>
						{filteredFollow.slice(1).map(item => (
							<img
								className={styles.smallImages}
								key={item.image}
								src={item.image}
								alt=''
							/>
						))}
					</div>
				</div>
			) : null}
		</div>
	)
}

export default FollowUs
