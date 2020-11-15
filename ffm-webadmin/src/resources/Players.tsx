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
    required,
    SelectField,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput
} from "react-admin";
import InputWrapper from "../customComponents/InputWrapper";
import Grid from "@material-ui/core/Grid";

export const PlayerList = (props: any) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="firstName" label="Vorname"/>
                <TextField source="lastName" label="Nachname"/>
                <NumberField source="playerNumber" label="#"/>
                <SelectField
                    source="position"
                    label="Position"
                    choices={playerPositions}
                    optionText="name"
                    optionValue="id"
                />
                <NumberField source="yearOfBirth" label="Jahrgang"/>
            </Datagrid>
        </List>
    );
};

const PlayerForm = (props: any) => (
    <SimpleForm {...props} redirect="list">
        <InputWrapper wrapperType={Grid} wrapperOptions={{container: true, spacing: 3}}>
            <InputWrapper wrapperType={Grid} wrapperOptions={{item: true, xs: 12, md: 6, lg: 4}} addDiv>
                <TextInput source="firstName" label="Vorname" validate={required()}/>
                <TextInput source="lastName" label="Nachname" validate={required()}/>
                <NumberInput source="playerNumber" label="Rückennummer"/>
                <SelectInput
                    source="position"
                    label="Position"
                    choices={playerPositions}
                    optionText="name"
                    optionValue="id"
                    validate={required()}
                />
                <NumberInput source="yearOfBirth" label="Jahrgang"/>
            </InputWrapper>
            <InputWrapper wrapperType={Grid} wrapperOptions={{item: true, xs: 12, md: 6, lg: 4}} addDiv>
                <ImageInput source="image" label="Bild (PNG)" accept="image/png" multiple={false}>
                    <ImageField source="data"/>
                </ImageInput>
            </InputWrapper>
        </InputWrapper>
    </SimpleForm>
);

export const PlayerEdit = (props: any) => (
    <Edit {...props} title={<PlayerTitle/>}>
        <PlayerForm/>
    </Edit>
);

export const PlayerCreate = (props: any) => (
    <Create {...props} title="Neuer Spieler">
        <PlayerForm/>
    </Create>
);

const PlayerTitle = ({record}: { record?: Player }) => {
    return <span>Spieler: {`${record?.firstName} ${record?.lastName}`}</span>;
};

type Player = {
    id: number,
    firstName: string,
    lastName: string,
    playerNumber: number,
    position: PlayerPosition,
    yearOfBirth: string,
    imageMime: string,
    image: PlayerImageContainer
};

type PlayerImageContainer = {
    data: string
};

enum PlayerPosition {
    FIELD = "FIELD", GOAL = "GOAL", STAFF = "STAFF"
}

const playerPosition2Text = {
    [PlayerPosition.GOAL as string]: "Torhüter",
    [PlayerPosition.FIELD as string]: "Feldspieler",
    [PlayerPosition.STAFF as string]: "Staff"
};

const playerPositions: { id: string, name: string }[] = Object.keys(PlayerPosition).map(key => ({
        id: key, name: playerPosition2Text[key]
    }
));
