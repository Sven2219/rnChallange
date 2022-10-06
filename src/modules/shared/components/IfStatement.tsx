interface Props {
	statement: boolean;
	children: JSX.Element;
}

function IF({ statement, children }: Props) {
	return statement ? children : null;
}

export default IF;
