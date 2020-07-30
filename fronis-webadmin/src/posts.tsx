import * as React from "react";
import {
    List,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    Filter,
    SelectInput,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton
} from 'react-admin';
import {useMediaQuery} from "@material-ui/core";

export const PostList = (props: any) => {
    const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
    return (
        <List filters={<PostFilter/>} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={({title}: {title: string}) => title}
                    secondaryText={({views}: {views: number}) => `${views} views`}
                    tertiaryText={({published_at}: {published_at: string}) => new Date(published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <TextField source="id"/>
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name"/>
                    </ReferenceField>
                    <TextField source="title"/>
                    <TextField source="body"/>
                    <EditButton/>
                </Datagrid>
            )}
        </List>
    );
}

export const PostEdit = (props: any) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Create>
);

const PostTitle = ({record}: {record?: any}) => {
    return <span>Post {`"${record?.title}"`}</span>;
};

const PostFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>
);