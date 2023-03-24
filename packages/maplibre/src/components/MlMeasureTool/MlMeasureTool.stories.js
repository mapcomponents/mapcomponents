import React, { useState } from 'react';

import MlMeasureTool from './MlMeasureTool';

import mapContextDecorator from '../../decorators/MapContextDecorator';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, MenuItem, Select } from '@mui/material';
import Sidebar from '../../ui_components/Sidebar';
import TopToolbar from '../../ui_components/TopToolbar';

const storyoptions = {
	title: 'MapComponents/MlMeasureTool',
	component: MlMeasureTool,
	argTypes: {},
	decorators: mapContextDecorator,
};
export default storyoptions;

const Template = () => {
	const [openSidebar, setOpenSidebar] = useState(true);
	const [unit, setUnit] = useState('kilometers');
	const handleChange = (event) => {
		setUnit(event.target.value);
	};

	return (
		<>
			<TopToolbar
				buttons={
					<Button
						variant={openSidebar ? 'contained' : 'outlined'}
						onClick={() => setOpenSidebar(!openSidebar)}
						sx={{ marginRight: { xs: '0px', sm: '10px' } }}
					>
						Measure Tool
					</Button>
				}
			/>
			<Sidebar
				open={openSidebar}
				setOpen={setOpenSidebar}
				name={'Measure Tool'}
			>
				<div style={{ width: '200px', position: 'absolute', zIndex: 105 }}>
					<Select
						name={'units'}
						onChange={handleChange}
						label={'Unit for measurement'}
						defaultValue={'kilometers'}
					>
						<MenuItem value={'kilometers'}>Kilometers</MenuItem>
						<MenuItem value={'miles'}>Miles</MenuItem>
					</Select>
					<Grid
						container
						style={{
							textAlign: 'left',
							alignItems: 'center',
						}}
					>
						<SquareFootOutlinedIcon />
						<h4 style={{ margin: '0px' }}>Measure Polygon</h4>
					</Grid>

					<Box m={2} style={{ textAlign: 'left' }}>
						Area: <MlMeasureTool measureType={'polygon'} unit={unit} />
					</Box>
				</div>
			</Sidebar>
		</>
	);
};

const LineTemplate = () => {
	const [openSidebar, setOpenSidebar] = useState(true);
	const [unit, setUnit] = useState('kilometers');
	const handleChange = (event) => {
		setUnit(event.target.value);
	};

	return (
		<>
			<TopToolbar
				buttons={
					<Button
						variant={openSidebar ? 'contained' : 'outlined'}
						onClick={() => setOpenSidebar(!openSidebar)}
						sx={{ marginRight: { xs: '0px', sm: '10px' } }}
					>
						Measure Tool
					</Button>
				}
			/>
			<Sidebar
				open={openSidebar}
				setOpen={setOpenSidebar}
				name={'Measure Tool'}
			>
				<div style={{ width: '200px', position: 'absolute', zIndex: 105 }}>
					<Select
						name={'units'}
						onChange={handleChange}
						label={'Unit for measurement'}
						defaultValue={'kilometers'}
					>
						<MenuItem value={'kilometers'}> Kilometers</MenuItem>
						<MenuItem value={'miles'}> Miles</MenuItem>
					</Select>
					<Grid
						container
						style={{
							textAlign: 'left',
							alignItems: 'center',
						}}
					>
						<StraightenOutlinedIcon />
						<h4 style={{ margin: '0px' }}>Measure Line</h4>
					</Grid>

					<Box m={2} style={{ textAlign: 'left' }}>
						Length: <MlMeasureTool measureType={'line'} unit={unit} />
					</Box>
				</div>
			</Sidebar>
		</>
	);
};

export const MeasureLine = LineTemplate.bind({});
MeasureLine.parameters = {};
MeasureLine.args = {};

export const MeasurePolygon = Template.bind({});
MeasurePolygon.parameters = {};
MeasurePolygon.args = {};
