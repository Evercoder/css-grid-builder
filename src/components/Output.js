import React from 'react';
import '../css/Output.css';

class Output extends React.PureComponent {
	render() {

		let {
			rows,
			columns,
			rowGap,
			columnGap
		} = this.props;

		return (
			<div className='output'>
{`.grid {
	grid-template-columns: ${columns.join(' ')};
	grid-template-rows: ${rows.join(' ')};
	grid-column-gap: ${columnGap}px;
	grid-row-gap: ${rowGap}px;	
}
`}
			</div>
		);
	}
}

export default Output;