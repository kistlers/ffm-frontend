import * as React from "react";
import {
    Create,
    Datagrid,
    DateTimeInput,
    Edit,
    ImageField,
    ImageInput,
    List,
    required,
    SimpleForm,
    TextField,
    TextInput
} from "react-admin";
import InputWrapper from "../customComponents/InputWrapper";
import Grid from "@material-ui/core/Grid";
import {ImageContainer} from "./Common";
import DateTimeFieldDeCH from "../customComponents/DateTimeFieldDeCH";

export const NewsList = (props: any) => {
    return (
            <List {...props}>
                <Datagrid rowClick="edit">
                    <TextField source="title" label="Titel"/>
                    <TextField source="text" label="Text"/>
                    <DateTimeFieldDeCH source="publishTimestamp" label="publiziert ab"/>
                </Datagrid>
            </List>
    );
};

const NewsForm = (props: any) => (
        <SimpleForm {...props} redirect="list">
            <InputWrapper wrapperType={Grid} wrapperOptions={{container: true, spacing: 3}}>
                <InputWrapper wrapperType={Grid} wrapperOptions={{item: true, xs: 12, md: 6, lg: 4}} addDiv>
                    <TextInput source="title" label="Titel" validate={required()}/>
                    <TextInput source="text" label="Text" validate={required()}/>
                    <DateTimeInput source="publishTimestamp" label="publiziert ab"/>
                </InputWrapper>
                <InputWrapper wrapperType={Grid} wrapperOptions={{item: true, xs: 12, md: 6, lg: 4}} addDiv>
                    <ImageInput source="image" label="Bild (PNG)" accept="image/png" multiple={false}>
                        <ImageField source="data"/>
                    </ImageInput>
                </InputWrapper>
            </InputWrapper>
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
    return <span>{`${record?.title}`}</span>;
};

type News = {
    id: number,
    title: string,
    text: string,
    publishTimestamp: number,
    image: ImageContainer
};
