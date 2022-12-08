import { useNasa } from '../hooks/NasaContext'
import styles from '../styles/Content.module.css'

export default function Content(): JSX.Element {
	const { nasaData } = useNasa()
	const explanation = nasaData?.explanation

	return (
		<article className={styles.article}>
			<h3 id={"content"} className='decorator'>{nasaData?.title}</h3>
			<p className={styles.small}>On {nasaData?.date} {nasaData?.copyright ? `by ${nasaData.copyright}` : ""}</p>
			<ul aria-label={"Today's explanation."} className={styles.infolist}>
						{explanation?.split(". ").map((element, index) => {
							return <li key={index}><p>{element}.</p></li>
						})}
					</ul>
			<a href={"#title"}>↑ back to top</a>
		</article>
	)}