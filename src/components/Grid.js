import React from 'react';

import '../css/Grid.css';
import { range } from 'd3-array';

import Gap from './Gap';

class Grid extends React.Component {
	render() {

		let {
			columns,
			rows,
			columnGap,
			rowGap
		} = this.props;

		return (
			<div className='grid' style={
				{
					gridTemplateColumns: this.props.columns.join(' '),
					gridTemplateRows: this.props.rows.join(' '),
					gridColumnGap: this.props.columnGap,
					gridRowGap: this.props.rowGap
				}
			}>
				{ 
					range(columns.length * rows.length).map(i => 
						<div 
							className='cell'
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
						/>
					) 
				}
			</div>
		);
	}
};

Grid.defaultProps = {
	columns: ['1fr', '1fr', '1fr', '1fr'],
	rows: ['1em', '50%', '50px', '1fr'],
	columnGap: '1em',
	rowGap: '1.5rem'
};

export default Grid;