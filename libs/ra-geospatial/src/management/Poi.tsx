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

export const PoiListInput = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);
export const PoiListShow = () => (
	<List>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="title" />
			<ShowButton />
		</Datagrid>
	</List>
);
export const PoiEdit = () => (
  <Edit mutationMode='optimistic'  resource="pois" id="0">
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <GeospatialInput {...raGeospatialProps} type="point"/>
    </SimpleForm>
  </Edit>
);
export const PoiEditWebGis = () => (
	<Edit mutationMode='optimistic'  resource="pois" id="0">
		<SimpleForm>
			<TextInput source="title" />
			<TextInput source="geom" />
			<GeospatialInput {...raGeospatialWebGisProps} type="point"/>
		</SimpleForm>
	</Edit>
);
export const PoiCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
			<GeospatialInput {...raGeospatialProps} type='point' />
    </SimpleForm>
  </Create>
);
export const PoiCreateWebGis = () => (
	<Create>
		<SimpleForm>
			<TextInput source="title" />
			<TextInput source="geom" />
			<GeospatialInput {...raGeospatialProps} type='point' />
		</SimpleForm>
	</Create>
);

export const PoiShow = () => (
  <Show resource="pois" id="0">
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <GeospatialShow {...raGeospatialProps} />
    </SimpleShowLayout>
  </Show>
);
export const PoiShowWebGis = () => (
	<Show resource="pois" id="0">
		<SimpleShowLayout>
			<TextField source="id" />
			<TextField source="title" />
			<GeospatialShow {...raGeospatialWebGisProps} />
		</SimpleShowLayout>
	</Show>
);
