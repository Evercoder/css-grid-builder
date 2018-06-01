import React from 'react';
import '../css/Gap.css';

const position = ({ type, index, length, size }) => (
	type === 'row' ? {
		gridColumn: `1 / ${length + 1}`,
		gridRow: index + 1,
		height: size
	} : {
		gridRow: `1 / ${length + 1}`,
		gridColumn: index + 1,
		width: size
	}
);

class Gap extends React.Component {
	render() {

		return (
			<div
				className={`
					gap 
					${ this.props.type === 'row' ? 'gap--row' : 'gap--column' }
				`}
				style={position(this.props)}
			/>
		);
	}
};

export default Gap;