import Axios, { AxiosRequestConfig } from 'axios';

import configValues from '../../configValues';
import { ServiceClient } from './ServiceClient';

export const AxiosInstance = Axios.create({ timeout: configValues.TIMEOUT * 1000 });

export function createURLFromSlug(curr: string) {
	return `${configValues.BACKEND_SCHEME}${curr}`;
}

export const serviceNames = ['users'] as const;

type ArrayToObject<Arr extends ReadonlyArray<string> = []> = {
	[K in Arr[number]]: ServiceClient;
};

export type ServiceInstances = ArrayToObject<typeof serviceNames>;
export type ServiceName = typeof serviceNames[number];

export type SendFn = (cl: AxiosRequestConfig) => Promise<unknown>;

export const services = serviceNames.reduce(
	(prev, curr) => ({
		...prev,
		[curr]: new ServiceClient(createURLFromSlug(curr), configValues.TOKEN, AxiosInstance),
	}),
	{} as ServiceInstances
);

export const UPLOAD_TIMEOUT_MS = 5 * 60 * 1000;
