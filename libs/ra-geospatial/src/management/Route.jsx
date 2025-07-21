import {
	Create,
	Datagrid,
	Edit,
	List,
	Show,
	ShowButton,
	SimpleForm,
	SimpleShowLayout,
	TextField,
	TextInput,
} from 'react-admin';
import GeospatialInput from '../components/GeospatialInput';
import GeospatialShow from '../components/GeospatialShow';
import raGeospatialProps from './raGeospatialProps';

export const RouteList = () => (
	<List>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="title" />
			<ShowButton />
		</Datagrid>
	</List>
);

export const RouteEdit = () => (
	<Edit mutationMode="optimistic">
		<SimpleForm>
			<TextInput source="title" />
			<GeospatialInput {...raGeospatialProps} type="line" />
		</SimpleForm>
	</Edit>
);
export const RouteCreate = () => (
	<Create>
		<SimpleForm>
			<TextInput source="title" />
			<GeospatialInput {...raGeospatialProps} type="line" />
		</SimpleForm>
	</Create>
);

export const RouteShow = () => (
	<Show>
		<SimpleShowLayout>
			<TextField source="title" />
			<GeospatialShow {...raGeospatialProps} />
			<TextField source="id" />
		</SimpleShowLayout>
	</Show>
);
