import * as React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import PeopleIcon from "@material-ui/icons/Group";
import Dashboard from "./dashboard";
import authProvider from "./authProvider/authProvider";
import dataProvider from "./dataProvider/dataProvider";

// const dataProvider = dataProvider;
const App = () => (
  <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
    {/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>*/}
    {/*<Resource name="users" list={UserList} icon={UserIcon}/>*/}
    <Resource name="players" list={ListGuesser} icon={PeopleIcon}/>
  </Admin>
);
export default App;
