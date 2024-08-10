import { useGetHeroImageQuery } from '../../services/malApi'
import styles from './Hero.module.scss'

const Hero = () => {
	const { isLoading, data: hero, error } = useGetHeroImageQuery(1)

	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				{error ? (
					<>Oh no, there was an error</>
				) : isLoading ? (
					<>Loading...</>
				) : hero ? (
					<>
						<div
							className={styles.hero_content}
							style={{
								backgroundImage: `url(${hero.image})`,
								height: '600px',
								backgroundSize: 'cover',
								backgroundPosition: 'center center',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<h1 className={styles.hero__title}>
								Elegance in simplicity,
								<br /> Earth’s harmony
							</h1>
							<button>New in</button>
						</div>
					</>
				) : null}
			</div>
		</section>
	)
}

export default Hero
