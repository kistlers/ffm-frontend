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
// import { useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export const PlayerList = (props: any) => {
  const isSmall = false; //useMediaQuery((theme: any) => theme.breakpoints.down("xs"));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(player: Player) => player.firstName}
          secondaryText={(player: Player) => player.lastName}
          tertiaryText={(player: Player) => playerPosition2Text[player.position]}
        />
      ) : (
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
}));
