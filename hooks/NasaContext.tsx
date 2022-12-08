import { useState, useEffect, createContext, ReactNode, useContext } from 'react';

interface NasaProviderPropTypes {
	children: ReactNode;
}

interface NasaContextDataTypes {
	nasaData: nasaData | undefined;
	newDate: (date: string) => void;
}

export interface nasaData {
	title: string;
	explanation: string;
	date: string;
	media_type: string;
	url: string;
	hd_url?: string;
	copyright?: string;
}

interface initialDateType {
	date: string;
}

const initialDate: initialDateType = {
	date: new Date().toISOString().split('T')[0],
};

export const formatDate = (date: string | Date) => {
	const newDate = new Date(date)
	const year = newDate.getFullYear().toString();
	const month = (newDate.getMonth() + 101).toString().substring(1);
	const day = (newDate.getDate() + 100).toString().substring(1);
	return year + "-" + month + "-" + day;
}

export const NasaContext = createContext<NasaContextDataTypes>({} as NasaContextDataTypes);

export default function NasaProvider({ children }: NasaProviderPropTypes) {
	const [nasaData, setNasaData] = useState<nasaData>();
	const [date, setDate] = useState(initialDate);

	const newDate = (date: string) => {
		const userDate = formatDate(date)
		const convertedDate = {
			date: userDate
		}
		setDate(convertedDate);
	};

	useEffect(() => {
		async function fetchData(): Promise<void> {
			// Add the date to the end of the URL
			const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASAKEY}&date=${date.date}`;
			const response = await fetch(url);
			let data: nasaData
			if (response.status === 200) {
				data = await response.json();
			} else {
				data = {
					title: "404",
					explanation: "Could not fetch data for this day",
					date: "Invalid date",
					media_type: "image",
					url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
					copyright: "NASA"
				}
			}
			setNasaData(data);
		}
		fetchData();
	}, [date]);

	return (
		<NasaContext.Provider value={{ nasaData, newDate }}>
			{children}
		</NasaContext.Provider>
	);
};

export function useNasa() {
	return useContext(NasaContext);
}

