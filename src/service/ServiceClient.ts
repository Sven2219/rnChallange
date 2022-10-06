import { AxiosInstance } from 'axios';

export enum AxiosRequestType {
	GET = 'GET',
	POST = 'POST',
	DELETE = 'DELETE',
	PUT = 'PUT',
}

export class ServiceClient {
	private url;
	private token;
	private axiosInstance;

	constructor(url: string, token: string, axiosInstance: AxiosInstance) {
		this.url = url;
		this.token = token;
		this.axiosInstance = axiosInstance;
	}

	call(axiosRequestType: AxiosRequestType, method: string, params?: object, queryParams?: string) {
		if (axiosRequestType === AxiosRequestType.GET) {
			return this.axiosInstance.get(`${this.url}${method}`, {
				headers: { Authorization: `Bearer ${this.token}` },
				params,
			});
		}
		const query = queryParams ? `/${queryParams}` : '';
		return this.axiosInstance({
			url: `${this.url}${method}${query}`,
			headers: { Authorization: `Bearer ${this.token}` },
			method: axiosRequestType,
			data: {
				...params,
			},
		});
	}
}
