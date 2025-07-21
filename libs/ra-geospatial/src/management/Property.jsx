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



export const PropertyList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ShowButton />
    </Datagrid>
  </List>
);
export const PropertyEdit = () => (
  <Edit mutationMode='optimistic'>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <GeospatialInput type="polygon" />
    </SimpleForm>
  </Edit>
);
export const PropertyCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <GeospatialInput type="polygon" />
    </SimpleForm>
  </Create>
);

export const PropertyShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <GeospatialShow  />
    </SimpleShowLayout>
  </Show>
);
