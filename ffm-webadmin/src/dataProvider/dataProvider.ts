import {DataProvider, fetchUtils} from "react-admin";
import {stringify} from "query-string";

const API_URL = process.env.REACT_APP_API_URL + "/v1";

// const httpClient = fetchUtils.fetchJson;
const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: "application/json"});
    }
    options.credentials = "include";
    return fetchUtils.fetchJson(url, options);
};

const simpleDataProvider: DataProvider = {
    getList: (resource, params) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        const query = {
            ...params.filter,
            page: page - 1,
            perPage: perPage,
            field: field,
            order: order
        };

        const url = `${API_URL}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({headers, json}: any) => {
            return {
                data: json,
                total: parseInt(headers.get("Content-Range").split("/").pop(), 10)
            };
        });
    },

    getOne: (resource, params) =>
            httpClient(`${API_URL}/${resource}/${params.id}`).then(({json}: any) => ({
                        data: json
                    }
            )),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({id: params.ids})
        };
        const url = `${API_URL}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({json}: any) => ({data: json}
        ));
    },

    getManyReference: (resource, params) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        const query = {
            ...params.filter,
            page: page - 1,
            perPage: perPage,
            field: field,
            order: order,
            [params.target]: params.id
        };

        const url = `${API_URL}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({headers, json}: any) => ({
                    data: json,
                    total: parseInt(headers.get("Content-Range").split("/").pop(), 10)
                }
        ));
    },

    update: (resource, params) =>
            httpClient(`${API_URL}/${resource}/${params.id}`, {
                method: "PUT",
                body: JSON.stringify(params.data)
            }).then(({json}: any) => ({data: json}
            )),

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({id: params.ids})
        };
        return httpClient(`${API_URL}/${resource}?${stringify(query)}`, {
            method: "PUT",
            body: JSON.stringify(params.data)
        }).then(({json}: any) => ({data: json}
        ));
    },

    create: (resource, params) =>
            httpClient(`${API_URL}/${resource}`, {
                method: "POST",
                body: JSON.stringify(params.data)
            }).then(({json}: any) => ({
                        data: {...params.data, id: json.id}
                    }
            )),

    delete: (resource, params) =>
            httpClient(`${API_URL}/${resource}/${params.id}`, {
                method: "DELETE"
            }).then(({json}: any) => ({data: json}
            )),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({id: params.ids})
        };
        return httpClient(`${API_URL}/${resource}?${stringify(query)}`, {
            method: "DELETE"
        }).then(({json}: any) => ({data: json}
        ));
    }
};


type File = { rawFile: any };

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file: File) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;

            reader.readAsDataURL(file.rawFile);
        });

/**
 * If given, convert uploaded image in base64 and attach it to
 * the `image` property, with `data` attribute.
 */
function base64ConvertAndReturn<Params extends { data: { image: File } }>(dataProviderFunction: (resource: string, params: Params) => any, resource: string, params: Params) {
    return convertFileToBase64(params.data.image).then(base64Image =>
            dataProviderFunction(resource, {
                ...params,
                data: {
                    ...params.data,
                    image: {data: base64Image}
                }
            })
    );
}

const dataProvider: DataProvider = {
    ...simpleDataProvider,
    update: (resource, params) => {
        if (!params.data.image?.rawFile) {
            // fallback to the default implementation
            return simpleDataProvider.update(resource, params);
        }
        return base64ConvertAndReturn(simpleDataProvider.update, resource, params);
    },
    create: (resource, params) => {
        if (!params.data.image?.rawFile) {
            // fallback to the default implementation
            return simpleDataProvider.create(resource, params);
        }
        return base64ConvertAndReturn(simpleDataProvider.create, resource, params);
    }
};

export default dataProvider;
