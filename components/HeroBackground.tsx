import styles from "../styles/HeroBackground.module.css"

interface HeroBackgroundProps {
	src: string | undefined;
}

const HeroBackground = (props: HeroBackgroundProps) => {
	return (
		<div className={styles.hero} style={{backgroundImage: `url('${props.src}')`}}>
		</div>
	);
};

export default HeroBackground;
