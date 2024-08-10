import { useGetCollectionQuery } from '../../../../../services/malApi'
import styles from './CollectionsCardRight.module.scss'

const CollectionsCardRight = () => {
	const { data: collections, error, isLoading } = useGetCollectionQuery()

	const filteredData = collections?.filter(items => {
		return items.id % 2 === 0
	})

	// const firstBlock = filteredData?.slice(0, 2)
	const secondBlock = filteredData?.slice(2)

	return (
		<>
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : collections ? (
				<>
					{secondBlock.map(item => (
						<div key={item.id} className={styles.imageCardRight}>
							<img src={item.image} alt='' />
							<button className='button'>{item.title}</button>
						</div>
					))}
				</>
			) : null}
		</>
	)
}

export default CollectionsCardRight
