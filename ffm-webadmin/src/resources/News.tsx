import * as React from "react";
import {
    Create,
    Datagrid,
    Edit,
    ImageField,
    ImageInput,
    List,
    required,
    SimpleForm,
    TextField,
    TextInput
} from "react-admin";
import {ImageContainer} from "./Common";
import DateTimeFieldDeCH from "../customComponents/DateTimeFieldDeCH";

export const NewsList = (props: any) => {
    return (
            <List {...props}>
                <Datagrid rowClick="edit">
                    <TextField source="title" label="Titel"/>
                    <TextField source="text" label="Text"/>
                    {/*<DateTimeFieldDeCH source="createdAt" label="erstellt am"/>*/}
                </Datagrid>
            </List>
    );
};

const NewsForm = (props: any) => (
        <SimpleForm {...props} redirect="list">
            <TextInput source="title" label="Titel" validate={required()} fullWidth/>
            <TextInput source="text" label="Text" validate={required()} multiline fullWidth/>
            {/*<DateTimeFieldDeCH source="createdAt" label="erstellt am" addLabel/>*/}
            <ImageInput source="image" label="Bild (PNG)" accept="image/png" multiple={false}>
                <ImageField source="data"/>
            </ImageInput>
        </SimpleForm>
);

export const NewsEdit = (props: any) => (
        <Edit {...props} title={<NewsTitle/>}>
            <NewsForm/>
        </Edit>
);

export const NewsCreate = (props: any) => (
        <Create {...props} title="Neue News">
            <NewsForm/>
        </Create>
);

const NewsTitle = ({record}: { record?: News }) => {
    return <span>{record?.title}</span>;
};

type News = {
    id: number,
    title: string,
    text: string,
    publishTimestamp: number,
    image: ImageContainer
};
