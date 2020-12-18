import {stringify} from "query-string";

const LOGIN_URL = process.env.REACT_APP_API_URL + "/login";
const LOGOUT_URL = process.env.REACT_APP_API_URL + "/logout";

export default {
    // called when the user attempts to log in
    login: ({username, password}: { username: string, password: string }) => {
        const request = new Request(`${LOGIN_URL}`, {
            method: "POST",
            credentials: "include",
            body: `${stringify({password, username})}`,
            headers: new Headers({
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            })
        });
        return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("authenticated", String(true));
            // return response.json();
            return Promise.resolve();
        });
    },
    // called when the user clicks on the logout button
    logout: () => {
        const request = new Request(`${LOGOUT_URL}`, {
            method: "DELETE",
            credentials: "include",
            headers: new Headers({
                Accept: "application/json"
            })
        });
        fetch(request).then(response => {
            console.log(response);
        });
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("authenticated");

        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({status}: { status: number }) => {
        if (status === 401 || status === 403) {
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("authenticated");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return sessionStorage.getItem("username") ? Promise.resolve() : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve()
};
