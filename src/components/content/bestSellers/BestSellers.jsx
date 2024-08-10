import { Swiper, SwiperSlide } from 'swiper/react'
import {
	useGetBestSellersQuery,
	useGetSvgiconsQuery,
} from '../../../services/malApi'

import 'swiper/css'
import 'swiper/css/effect-cards'
import { Pagination } from 'swiper/modules'
import styles from './BestSellers.module.scss'

const BestSellers = () => {
	const { data: best, error, isLoading } = useGetBestSellersQuery()
	const { data: icon } = useGetSvgiconsQuery()

	return (
		<div className={styles.bestSellers}>
			<div className={styles.titleBlock}>
				<h1 className={styles.title}>Best Sellers</h1>
				<p className={styles.right}>view all</p>
			</div>
			<div className={styles.best}>
				<Swiper
					spaceBetween={15}
					slidesPerView={3}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						400: {
							slidesPerView: 1,
						},
						700: {
							slidesPerView: 2,
						},
						1270: {
							slidesPerView: 3,
						},
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					loop={true}
					className='mySwiper'
				>
					{error ? (
						<>Oh no, there was an error</>
					) : isLoading ? (
						<>Loading...</>
					) : best ? (
						<>
							{best
								.filter(item => {
									return item.id % 2 === 0
								})
								.map(item => (
									<SwiperSlide key={item.id}>
										<div className={styles.card}>
											{icon.slice(2, 3).map(item => (
												<img
													key={item.id}
													className={styles.favorite}
													src={item.image}
													alt='icon'
													width={30}
													height={30}
												/>
											))}
											<img src={item.image} alt='best' />
											<div className={styles.descript}>
												<h2>{item.title}</h2>
												<div className={styles.priceDescription}>
													<p>{item.description}</p>
													<p>{item.price}$</p>
												</div>
												<div className={styles.colors}>
													{item.colors.map(color => (
														<div
															key={color}
															style={{
																backgroundColor: `${color}`,
																borderRadius: '50%',
																width: '30px',
																height: '30px',
															}}
														/>
													))}
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
						</>
					) : null}
				</Swiper>
			</div>
		</div>
	)
}

export default BestSellers
