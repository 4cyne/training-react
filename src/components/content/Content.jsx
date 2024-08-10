import styles from './Content.module.scss'
import BestSellers from './bestSellers/BestSellers'
import Collections from './collections/Collections'
import FollowUs from './followUs/FollowUs'

const Content = () => {
	return (
		<div className={styles.contentContainer}>
			<BestSellers />
			<Collections />
			<FollowUs />
		</div>
	)
}

export default Content
