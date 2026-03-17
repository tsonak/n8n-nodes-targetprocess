import type {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	JsonObject,
	IHttpRequestMethods,
	IHttpRequestOptions,
	INodeListSearchResult,
	INodeListSearchItems,
} from 'n8n-workflow';

export async function targetprocessApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: any = {},
	qs: JsonObject = {},
	uri?: string,
): Promise<any> {
	const credentials = await this.getCredentials('targetprocessApi');
	const account = credentials.account as string;

	const options: IHttpRequestOptions = {
		method,
		url: uri || `https://${account}.tpondemand.com/api/v1${endpoint}`,
		qs,
		body,
	};

	if (Object.keys(body as JsonObject).length === 0) {
		delete options.body;
	}

	return await this.helpers.httpRequestWithAuthentication.call(this, 'targetprocessApi', options);
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

export async function targetprocessListSearch(
	this: ILoadOptionsFunctions,
	endpoint: string,
	filter?: string,
): Promise<INodeListSearchResult> {
	const qs: JsonObject = {
		take: 100,
	};

	if (filter) {
		qs.where = `Name contains '${filter}'`;
	}

	const responseData = await targetprocessApiRequest.call(this, 'GET', endpoint, {}, qs);

	const items = (responseData.Items as Array<{ Name: string; Id: number }>) || [];
	const results: INodeListSearchItems[] = items.map((item) => ({
		name: item.Name,
		value: item.Id,
	}));

	return { results };
}
