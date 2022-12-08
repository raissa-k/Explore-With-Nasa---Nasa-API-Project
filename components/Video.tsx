import styles from "../styles/Video.module.css"

interface VideoProps {
	src: string;
}

const Video = (props: VideoProps) => {
	let newSource = props.src.slice(0, -5) + 'controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=' + props.src.slice(30,41)
	return (
		<div className={styles.videohero}>
			<iframe src={newSource} tabIndex={-1}></iframe>
		</div>
	);
};

export default Video