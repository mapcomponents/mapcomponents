import React, { useState } from 'react';
import MlWmsLoader from './MlWmsLoader';
import { Button, TextField } from '@mui/material';
import mapContextDecorator from '../../decorators/MapContextDecorator';
import Sidebar from '../../ui_components/Sidebar';
import TopToolbar from '../../ui_components/TopToolbar';
import MlWmsLoaderInstructions from './utils/MlWmsLoaderInstructions';
import WMSLinks from './utils/WMSLinks';

const storyoptions = {
	title: 'MapComponents/MlWmsLoader',
	component: MlWmsLoader,
	argTypes: {
		url: {},
		layer: {},
	},
	decorators: mapContextDecorator,
};
export default storyoptions;

interface MlWmsLoaderStoryProps {
	url: string;
}
const Template = (props: MlWmsLoaderStoryProps) => {
	const [url, setUrl] = useState(props.url || '');
	const [demoMode, setDemoMode] = useState(false);
	const [guide, setGuide] = useState(false);
	const [openSidebar, setOpenSidebar] = useState(true);

	const openGuide = () => {
		setGuide(true);
		setTimeout(() => {
			setGuide(false);
		}, 5500);
	};

	const loader = (str: string) => {
		setUrl(str);
		setDemoMode(false);
	};

	return (
		<>
			<MlWmsLoaderInstructions open={guide} />
			<WMSLinks open={demoMode} close={() => setDemoMode(false)} load={loader} />
			<TopToolbar
				buttons={
					<>
						<Button
							variant={openSidebar ? 'contained' : 'outlined'}
							onClick={() => setOpenSidebar(!openSidebar)}
							sx={{ marginRight: { xs: '0px', sm: '10px' } }}
						>
							WMS Loader
						</Button>
						<br />
						<br />
						<Button
							variant={demoMode ? 'contained' : 'outlined'}
							onClick={() => {
								setDemoMode(!demoMode);
								setOpenSidebar(true);
							}}
							sx={{ marginRight: { xs: '0px', sm: '10px' } }}
						>
							Demo WMS
						</Button>
						<br />
						<br />
						<Button variant="contained" onClick={openGuide} sx={{ display: 'none' }}>
							Guide me through
						</Button>
					</>
				}
			/>

			<Sidebar
				open={openSidebar}
				setOpen={setOpenSidebar}
				name={'WMS Loader'}
			>
				<TextField
					id="wms_text_field"
					label="WMS Url"
					variant="standard"
					value={url}
					onChange={(ev) => setUrl(ev.target.value)}
				/>
				<MlWmsLoader mapId={'map_1'} url={url} />
			</Sidebar>
		</>
	);
};

export const ExampleConfig = Template.bind({});
ExampleConfig.parameters = {};
ExampleConfig.args = {};
