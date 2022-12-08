import Hero from '../components/Hero'
import NasaProvider, { formatDate, nasaData } from '../hooks/NasaContext'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next';
import Content from '../components/Content';

// Add the getServerSideProps function
export const getServerSideProps: GetServerSideProps = async (context) => {
	const userDate = formatDate(new Date())
	const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASAKEY}&date=${userDate}`;
	const response = await fetch(url);
	let data: nasaData
	if (response.status === 200) {
		data = await response.json();
	} else {
		data = {
			title: "404",
			explanation: "Could not fetch data for this day.",
			date: "Invalid date",
			media_type: "image",
			url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
			copyright: "NASA"
		}
	}

	return {
		props: {
			nasaData: data
		}
	}
};

export default function Home({ nasaData }: { nasaData: nasaData }) {
	return (
		<NasaProvider>
			<div className={styles.container}>
				<Hero />
				<Content />
				<footer className={styles.footer}>
					<a
						href="https://github.com/raissa-k/Explore-With-Nasa---Nasa-API-Project"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="See source code on GitHub"
						title="See source code on GitHub"
					>
						<img aria-hidden="true" src="/github.svg" alt="" className={styles.logo} />
					</a>
				</footer>
			</div>
		</NasaProvider>
	)
}
