import React from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';

function GrassChart(props) {
	const CalTooltip: React.FunctionComponent<CalendarDayData> = (props) => {
		return (
			<div
				style={{
					padding: 12,
					color: 'black',
					background: 'gray',
					borderRadius: '5px 5px 5px 5px',
					boxShadow: '3px 3px 3px gray',
				}}
			>
				<strong>
					<span style={{ color: props.color }}>■ </span>
					{props.day} 총합: {props.value}
				</strong>
				<br />
				<strong>
					깃허브 : {props.data.commit} 백준 : {props.data.solve}
				</strong>
			</div>
		);
	};

	return (
		<div style={{ height: 500 }}>
			{props.data && (
				<span className="app">
					<strong style={{ fontSize: '2rem' }}> 깃허브, 백준 활동 내역 차트 </strong>
					<span> 1년간 총 활동 {props.commits+props.solves} ( 깃허브 : {props.commits} 백준 : {props.solves} )</span>
				</span>
			)}
			{props.data && (
				<ResponsiveCalendar
					data={props.data}
					from="2021-01-01"
					to="2021-12-31"
					emptyColor="#eeeeee"
					colors={['#99FF99', '#32CD32', '#008000', '#006400']}
					margin={{
						top: 40,
						right: 40,
						bottom: 40,
						left: 40,
					}}
					yearSpacing={60}
					monthBorderColor="#000000"
					monthLegendOffset={10}
					dayBorderWidth={2}
					dayBorderColor="#ffffff"
					tooltip={CalTooltip}
					legends={[
						{
							anchor: 'bottom-right',
							direction: 'row',
							translateY: 36,
							itemCount: 4,
							itemWidth: 34,
							itemHeight: 36,
							itemDirection: 'top-to-bottom',
						},
					]}
				/>
			)}
		</div>
	);
}

export default GrassChart;