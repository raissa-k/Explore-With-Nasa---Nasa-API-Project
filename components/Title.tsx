import { formatDate, useNasa } from '../hooks/NasaContext'
import styles from '../styles/Title.module.css'

export default function Title() {
	const { newDate } = useNasa()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		newDate(event.target.value);
	  }

	return (
		<div className={styles.container}>
			<h1 id={"title"} className={styles.title}>
				explore with nasa
			</h1>
			<input aria-label={"See the picture from a date between June 16, 1996, and today."} type={"date"} 
			defaultValue={formatDate(new Date())}  
			min={"1995-06-16"} 
			max={formatDate(new Date())}
			onChange={handleChange}/>
		</div>
	)
}
