import type {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	JsonObject,
	IHttpRequestMethods,
	IRequestOptions,
} from 'n8n-workflow';

export async function targetprocessApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: any = {},
	qs: JsonObject = {},
	uri?: string,
	_option: JsonObject = {},
): Promise<any> {
	const credentials = await this.getCredentials('targetprocessApi');
	const account = credentials.account as string;

	const options: IRequestOptions = {
		method,
		uri: uri || `https://${account}.tpondemand.com/api/v1${endpoint}`,
		qs,
		body,
		json: true,
	};

	if (Object.keys(body).length === 0) {
		delete options.body;
	}

	return await this.helpers.requestWithAuthentication.call(this, 'targetprocessApi', options);
}

export async function targetprocessApiRequestAllItems(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: any = {},
	qs: JsonObject = {},
): Promise<any[]> {
	const returnData: any[] = [];
	let responseData;

	qs.take = 1000;
	qs.skip = 0;

	do {
		responseData = await targetprocessApiRequest.call(this, method, endpoint, body, qs);
		if (responseData.Items) {
			returnData.push(...(responseData.Items as any[]));
		}
		qs.skip = (qs.skip as number) + (qs.take as number);
	} while (responseData.Next);

	return returnData;
}
