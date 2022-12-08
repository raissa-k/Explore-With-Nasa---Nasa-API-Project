import { useNasa } from '../hooks/NasaContext'
import styles from '../styles/Hero.module.css'
import HeroBackground from './HeroBackground'
import Title from './Title'
import Video from './Video'

export default function Hero(): JSX.Element {
	const { nasaData } = useNasa()
	const isImage = nasaData?.media_type === "image"

	return (
		<>
		<Title />
		{ isImage ? (
			<HeroBackground src={nasaData.url} />
			) : <Video src={nasaData?.url ?? "https://www.youtube.com/watch?v=nq4tT68UoCg"} />
		}
		<main className={styles.main}>
			<div className={styles.grid}>
				<div className={styles.card}>
					<h2>{nasaData?.title}</h2>
					{ nasaData?.copyright ?
					<p className={styles.small}>Copyright: {nasaData?.copyright}</p>
					: null
					}
					<p className={styles.small}>{nasaData?.date}</p>
					<a href={"#content"}>↓ learn more</a>
				</div>
			</div>
		</main>
		</>
	)}