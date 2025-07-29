import {
	Create,
	Edit,
	SimpleForm,
	TextInput,
	Show,
	SimpleShowLayout,
	TextField,
	Datagrid,
	List,
	ShowButton, EditButton,
} from 'react-admin';
import GeospatialInput from '../components/GeospatialInput';
import GeospatialShow from '../components/GeospatialShow';
import raGeospatialProps from './raGeospatialProps';
import raGeospatialWebGisProps from './raGeospatialWebGisProps';

export const PropertyListInput = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);
export const PropertyListShow = () => (
	<List>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="title" />
			<ShowButton />
		</Datagrid>
	</List>
);
export const PropertyEdit = () => (
	<Edit mutationMode="optimistic" resource="properties" id="0">
		<SimpleForm>
			<TextInput source="title" />
			<TextInput source="geom" />
			<GeospatialInput {...raGeospatialProps} type="polygon" />
		</SimpleForm>
	</Edit>
);
export const PropertyEditWebGis = () => (
	<Edit mutationMode="optimistic" resource="properties" id="0">
		<SimpleForm>
			<TextInput source="title" />
			<TextInput source="geom" />
			<GeospatialInput {...raGeospatialWebGisProps} type="polygon" />
		</SimpleForm>
	</Edit>
);
export const PropertyCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
			<GeospatialInput {...raGeospatialProps} type="polygon" />
    </SimpleForm>
  </Create>
);
export const PropertyCreateWebGis = () => (
	<Create>
		<SimpleForm>
			<TextInput source="title" />
			<TextInput source="geom" />
			<GeospatialInput {...raGeospatialWebGisProps} type="polygon" />
		</SimpleForm>
	</Create>
);

export const PropertyShow = () => (
	<Show resource="properties" id="0">
		<SimpleShowLayout>
			<TextField source="id" />
			<TextField source="title" />
			<GeospatialShow {...raGeospatialProps} />
		</SimpleShowLayout>
	</Show>
);
export const PropertyShowWebGis = () => (
	<Show resource="properties" id="0">
		<SimpleShowLayout>
			<TextField source="id" />
			<TextField source="title" />
			<GeospatialShow {...raGeospatialWebGisProps} />
		</SimpleShowLayout>
	</Show>
);
