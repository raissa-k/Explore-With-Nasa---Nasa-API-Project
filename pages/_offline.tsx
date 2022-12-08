export default function Offline() {
  return (
	<div style={{"backgroundColor": "#1C2833", "display": "flex", "flexDirection": "column", "justifyContent":"flex-start", "alignItems": "center", "height": "100vh"}}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52px" height="52px" viewBox="0 0 52 52" aria-hidden="true" style={{"height": "10rem", "width":"auto", "marginTop":"10rem"}} enable-background="new 0 0 52 52" fill="#EBF0F7" xmlSpace="preserve">
			<g>
				<path d="M34.7,36.1c0.5-0.5,0.5-1.3,0-1.8l-1.8-1.8c-0.5-0.5-1.3-0.5-1.8,0l-4.4,4.4c-0.3,0.3-0.9,0.3-1.2,0   l-4.4-4.4c-0.5-0.5-1.3-0.5-1.8,0l-1.8,1.8c-0.5,0.5-0.5,1.3,0,1.8l4.4,4.4c0.3,0.3,0.3,0.9,0,1.2l-4.4,4.4c-0.5,0.5-0.5,1.3,0,1.8   l1.8,1.8c0.5,0.5,1.3,0.5,1.8,0l4.4-4.4c0.3-0.3,0.9-0.3,1.2,0l4.4,4.4c0.5,0.5,1.3,0.5,1.8,0l1.8-1.8c0.5-0.5,0.5-1.3,0-1.8   l-4.4-4.4c-0.3-0.3-0.3-0.9,0-1.2L34.7,36.1z"/>
				<path d="M47.7,11.6c-5.5-6.1-13.3-9.5-21.6-9.5S10,5.5,4.5,11.6C4.1,12,4.2,12.7,4.6,13l3,2.6C8,16,8.6,15.9,9,15.5   c4.4-4.7,10.6-7.4,17.1-7.4s12.7,2.7,17.1,7.4c0.4,0.4,1,0.4,1.4,0.1l3-2.6C48,12.6,48.1,12,47.7,11.6z"/>
				<path d="M26.1,16.1c-4.2,0-8.2,1.8-11,5c-0.4,0.4-0.3,1.1,0.1,1.5l3.2,2.4c0.4,0.3,1,0.3,1.3-0.1   c1.7-1.8,4-2.8,6.4-2.8s4.7,1,6.3,2.7c0.3,0.4,0.9,0.4,1.3,0.1l3.2-2.4c0.5-0.4,0.5-1,0.1-1.5C34.3,17.9,30.3,16.1,26.1,16.1z"/>
			</g>
		</svg>
		<h1 style={{"color": "#EBF0F7", "textAlign": "center", "fontSize":"xx-large", "fontFamily": "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"}}>Oops... You are offline!<br/> Please connect to a network to use this app.</h1>
	</div>
  );
}