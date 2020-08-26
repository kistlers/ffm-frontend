import * as React from "react";
import { Admin, Resource } from "react-admin";
import PeopleIcon from "@material-ui/icons/Group";
import Dashboard from "./dashboard";
import authProvider from "./authProvider/authProvider";
import dataProvider from "./dataProvider/dataProvider";
import { PlayerCreate, PlayerEdit, PlayerList } from "./resources/Players";

const App = () => (
  <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="players" list={PlayerList} edit={PlayerEdit} create={PlayerCreate} icon={PeopleIcon}/>
  </Admin>
);
export default App;
