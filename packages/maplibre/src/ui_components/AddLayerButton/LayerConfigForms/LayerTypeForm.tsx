import React from 'react';

import {
	Avatar,
	DialogTitle,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

export interface LayerTypeFormProps {
	onSelect: (type: string) => void;
}

const layerTypes = ['geojson', 'wms'] as const;

const LayerTypeForm = (props: LayerTypeFormProps) => {
	return (
		<>
			<DialogTitle>Select a layer type</DialogTitle>
			<List>
				{layerTypes.map((type) => (
					<ListItem disableGutters key={type}>
						<ListItemButton
							autoFocus
							onClick={() => {
								props.onSelect(type);
							}}
						>
							<ListItemAvatar>
								<Avatar>
									<DynamicFeedIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={type} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</>
	);
};

LayerTypeForm.defaultProps = {};

export default LayerTypeForm;
