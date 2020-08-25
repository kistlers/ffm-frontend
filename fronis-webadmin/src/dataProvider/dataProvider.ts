import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const API_URL = process.env.REACT_APP_API_URL;
// const TOKEN_URL = process.env.REACT_APP_AUTH_URL + "/token";
const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource: string, params: any) => {
    const {page, perPage} = params.pagination;
    const {field, order} = params.sort;
    const query = {
      ...params.filter,
      page: page - 1,
      perPage: perPage,
      field: field,
      order: order,
      query: params.filter.q,
      // filter: JSON.stringify({...params.filter})
    };

    const url = `${API_URL}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({headers, json}: any) => {
      return {
        data: json,
        total: parseInt(headers.get("Content-Range").split("/").pop(), 10),
      };
    });
  },

  getOne: (resource: string, params: any) =>
    httpClient(`${API_URL}/${resource}/${params.id}`).then(({json}: any) => ({
      data: json,
    })),

  getMany: (resource: string, params: any) => {
    const query = {
      filter: JSON.stringify({id: params.ids}),
    };
    const url = `${API_URL}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({json}: any) => ({data: json}));
  },

  getManyReference: (resource: string, params: any) => {
    const {page, perPage} = params.pagination;
    const {field, order} = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${API_URL}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({headers, json}: any) => ({
      data: json,
      total: parseInt(headers.get("Content-Range").split("/").pop(), 10),
    }));
  },

  update: (resource: string, params: any) =>
    httpClient(`${API_URL}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({json}: any) => ({data: json})),

  updateMany: (resource: string, params: any) => {
    const query = {
      filter: JSON.stringify({id: params.ids}),
    };
    return httpClient(`${API_URL}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({json}: any) => ({data: json}));
  },

  create: (resource: string, params: any) =>
    httpClient(`${API_URL}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({json}: any) => ({
      data: {...params.data, id: json.id},
    })),

  delete: (resource: string, params: any) =>
    httpClient(`${API_URL}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({json}: any) => ({data: json})),

  deleteMany: (resource: string, params: any) => {
    const query = {
      filter: JSON.stringify({id: params.ids}),
    };
    return httpClient(`${API_URL}/${resource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    }).then(({json}: any) => ({data: json}));
  }
};
