import * as React from "react";
import {
    Create,
    Datagrid,
    Edit,
    ImageField,
    ImageInput,
    List,
    NumberField,
    NumberInput,
    regex,
    required,
    SimpleForm,
    TextField,
    TextInput
} from "react-admin";
import InputWrapper from "../customComponents/InputWrapper";
import Grid from "@material-ui/core/Grid";

export const urlValidation = regex(/(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?/&=]*)/, "Bitte korrekte URL eingeben (https://example.com)");

export const SponsorList = (props: any) => {
    return (
        <List {...props} perPage={25}>
            <Datagrid rowClick="edit">
                <TextField source="name" label="Name"/>
                <TextField source="url" label="Url"/>
                <NumberField source="ordering" label="Sortierung"/>
            </Datagrid>
        </List>
    );
};

const SponsorForm = (props: any) => (
    <SimpleForm {...props} redirect="list">
        <InputWrapper wrapperType={Grid} wrapperOptions={{container: true, spacing: 3}}>
            <InputWrapper wrapperType={Grid} wrapperOptions={{item: true, xs: 12, md: 6, lg: 4}} addDiv>
                <TextInput source="name" label="Name" validate={required()}/>
                <TextInput source="url" label="Url" validate={urlValidation} initialValue="https://"/>
                <NumberInput source="ordering" label="Sortierung" validate={required()} initialValue="0"/>
            </InputWrapper>
            <InputWrapper wrapperType={Grid} wrapperOptions={{item: true, xs: 12, md: 6, lg: 4}} addDiv>
                <ImageInput source="image" label="Bild (SVG)" accept="image/svg+xml" multiple={false}>
                    <ImageField source="data"/>
                </ImageInput>
            </InputWrapper>
        </InputWrapper>
    </SimpleForm>
);

export const SponsorEdit = (props: any) => (
        <Edit title={<SponsorTitle/>} {...props}>
            <SponsorForm/>
        </Edit>
    )
;

export const SponsorCreate = (props: any) => (
    <Create title="Neuer Sponsor" {...props}>
        <SponsorForm/>
    </Create>
);

const SponsorTitle = ({record}: { record?: Sponsor }) => {
    return <span>Sponsor: {`${record?.name}`}</span>;
};

type Sponsor = {
    id: number,
    name: string,
    url: string,
    image: SponsorImageContainer,
    ordering: number
};

type SponsorImageContainer = {
    data: string
};
