import React from 'react';

import '../css/Cell.css';

const cellStyle = props => ({
	gridColumn: props.column,
	gridRow: props.row
});

class Cell extends React.Component {
	render() {
		return (
			<div 
				className='cell'
				style={cellStyle(this.props)}
			>
				Cell
			</div>
		);
	}
}

export default Cell;