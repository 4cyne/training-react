import styles from './Collections.module.scss'
import CollectionsCardLeft from './columns/collectionColLeft/CollectionsCardLeft'
import CollectionsCardRight from './columns/collectionColRight/CollectionsCardRight'

const Collections = () => {
	return (
		<article className={styles.collectionsContainer}>
			<h1 className={styles.title}>Collections</h1>
			<div className={styles.collectionsCol}>
				<div className={styles.leftCol}>
					<CollectionsCardLeft />
				</div>
				<div className={styles.rightCol}>
					<CollectionsCardRight />
				</div>
			</div>
		</article>
	)
}

export default Collections
