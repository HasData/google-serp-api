"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doRequest = void 0;
class RequestFailed extends Error {
    constructor(response) {
        super(`Request failed with status code ${response.status}`);
        this.response = response;
    }
}
const doRequest = async (url, headers, params) => {
    const urlParams = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${urlParams}`;
    const options = {
        headers: {
            ...headers,
            'Accept-Encoding': 'gzip, deflate, br',
        },
    };
    try {
        const response = await fetch(fullUrl, options);
        if (!response.ok) {
            throw new RequestFailed(response);
        }
        return await response.text();
    }
    catch (err) {
        throw err;
    }
};
exports.doRequest = doRequest;
//# sourceMappingURL=http.js.map