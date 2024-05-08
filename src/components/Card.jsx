const Card = ({ children, title }) => {
	return (
		<>
			<b>{title}</b>
			{children}
		</>
	);
};
export default Card;
