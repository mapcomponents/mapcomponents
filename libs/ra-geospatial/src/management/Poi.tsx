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
  ShowButton,
} from "react-admin";
import GeospatialInput from '../components/GeospatialInput';
import GeospatialShow from '../components/GeospatialShow';

export const PoiList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ShowButton />
    </Datagrid>
  </List>
);
export const PoiEdit = () => (
  <Edit mutationMode='optimistic'>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <GeospatialInput source={""}/>
    </SimpleForm>
  </Edit>
);
export const PoiCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <GeospatialInput source={""} />
    </SimpleForm>
  </Create>
);

export const PoiShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <GeospatialShow source={""} />
    </SimpleShowLayout>
  </Show>
);
