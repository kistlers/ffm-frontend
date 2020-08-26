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
  SimpleList,
  TextField,
  TextInput
} from "react-admin";
import InputWrapper from "../customComponents/InputWrapper";
import { useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export const PlayerList = (props: any) => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("xs"));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={({firstName}: { firstName: string }) => firstName}
          secondaryText={({lastName}: { lastName: number }) => `${lastName}`}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="firstName" label="Vorname"/>
          <TextField source="lastName" label="Nachname"/>
          <TextField source="shortName" label="Spitzname"/>
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
      )}
    </List>
  );
};

export const PlayerEdit = (props: any) => (
    <Edit title={<PlayerTitle/>} {...props}>
      <SimpleForm>
        <InputWrapper wrapperType={Grid} wrapperOptions={{container: true, spacing: 3}}>
          <InputWrapper wrapperType={Grid} wrapperOptions={{item: true, xs: 12, md: 6, lg: 4}} addDiv>
            <TextInput source="firstName" label="Vorname" validate={required()}/>
            <TextInput source="lastName" label="Nachname" validate={required()}/>
            <TextInput source="shortName" label="Spitzname"/>
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
            <ImageInput source="image" label="Bild" accept="image/*" multiple={false}>
              <ImageField source="data"/>
            </ImageInput>
          </InputWrapper>
        </InputWrapper>
      </SimpleForm>
    </Edit>
  )
;

export const PlayerCreate = (props: any) => (
  <Create title="Neuer Spieler" {...props}>
    <SimpleForm>
      <InputWrapper wrapperType={Grid} wrapperOptions={{container: true, spacing: 3}}>
        <InputWrapper wrapperType={Grid} wrapperOptions={{item: true, xs: 12, md: 6, lg: 4}} addDiv>
          <TextInput source="firstName" label="Vorname" validate={required()}/>
          <TextInput source="lastName" label="Nachname" validate={required()}/>
          <TextInput source="shortName" label="Spitzname"/>
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
          <ImageInput source="image" label="Bild" accept="image/*" multiple={false}>
            <ImageField source="data"/>
          </ImageInput>
        </InputWrapper>
      </InputWrapper>
    </SimpleForm>
  </Create>
);

const PlayerTitle = ({record}: { record?: Player }) => {
  return <span>Spieler: {`${record?.firstName} ${record?.lastName}`}</span>;
};

type Player = {
  id: number,
  firstName: string,
  lastName: string,
  shortName: string,
  playerNumber: number,
  position: PlayerPosition,
  yearOfBirth: string,
  imageMime: string,
  image: string
};

enum PlayerPosition {
  FIELD = "FIELD", GOAL = "GOAL", STAFF = "STAFF"
}

const playerPositions = [
  {id: PlayerPosition.GOAL, name: "Torhüter"},
  {id: PlayerPosition.FIELD, name: "Feldspieler"},
  {id: PlayerPosition.STAFF, name: "Staff"}
];
