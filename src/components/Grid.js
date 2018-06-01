import React from 'react';

import '../css/Grid.css';
import { range } from 'd3-array';

import Gap from './Gap';
import Output from './Output';

const initial_state = {
	columns: ['1fr', '1fr', '1fr', '1fr'],
	rows: ['1em', '50%', '50px', '1fr'],
	columnGap: 10,
	rowGap: 10
};

class Grid extends React.Component {

	constructor(props) {
		super(props);
		this.state = initial_state;
		this.setColumnGap = this.setColumnGap.bind(this);
		this.setRowGap = this.setRowGap.bind(this);
	}

	setColumnGap({dx, dy}) {
		this.setState({ columnGap: Math.max(0, dx * 2) });
	}

	setRowGap({dx, dy}) {
		this.setState({ rowGap: Math.max(0, dy) });
	}

	render() {

		let {
			columns,
			rows,
			columnGap,
			rowGap
		} = this.state;

		return (
			<React.Fragment>
				<div className='grid' style={
					{
						gridTemplateColumns: columns.join(' '),
						gridTemplateRows: rows.join(' '),
						gridColumnGap: columnGap,
						gridRowGap: rowGap
					}
				}>
					{ 
						range(columns.length * rows.length).map(i => 
							<div 
								className='cell'
								key={`cell_${i}`}
								style={
									{
										gridColumn: (i % columns.length + 1),
										gridRow: (Math.floor(i / columns.length) + 1)
									}
								}
							></div>
						) 
					}
					
					{ 
						range(rows.length - 1).map(i => 
							<Gap 
								key={`gap__row__${i}`} 
								type='row' 
								index={i} 
								length={rows.length}
								size={rowGap}
								onChange={this.setRowGap}
							/>
						) 
					}

					{ 
						range(columns.length - 1).map(i => 
							<Gap 
								key={`gap__column__${i}`} 
								type='col' 
								index={i} 
								length={columns.length}
								size={columnGap}
								onChange={this.setColumnGap}
							/>
						) 
					}
				</div>
				<Output {...this.state}/>
			</React.Fragment>
		);
	}
};

export default Grid;