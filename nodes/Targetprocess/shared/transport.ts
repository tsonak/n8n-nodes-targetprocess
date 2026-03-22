import type {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	INodeListSearchResult,
	INodeListSearchItems,
	IDataObject,
} from 'n8n-workflow';

export async function targetprocessApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	uri?: string,
): Promise<unknown> {
	const credentials = await this.getCredentials('targetprocessApi');
	const account = credentials.account as string;

	const options: IHttpRequestOptions = {
		method,
		url: uri || `https://${account}.tpondemand.com/api/v1${endpoint}`,
		qs,
		body,
	};

	if (Object.keys(body).length === 0) {
		delete options.body;
	}

	return await this.helpers.httpRequestWithAuthentication.call(this, 'targetprocessApi', options);
}

export async function targetprocessApiRequestAllItems(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<IDataObject[]> {
	const returnData: IDataObject[] = [];
	let responseData: { Items: IDataObject[]; Next?: string };

	qs.take = 1000;
	qs.skip = 0;

	do {
		responseData = (await targetprocessApiRequest.call(this, method, endpoint, body, qs)) as {
			Items: IDataObject[];
			Next?: string;
		};
		if (responseData.Items) {
			returnData.push(...responseData.Items);
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
	const qs: IDataObject = {
		take: 100,
	};

	if (filter) {
		qs.where = `Name contains '${filter}'`;
	}

	const responseData = (await targetprocessApiRequest.call(this, 'GET', endpoint, {}, qs)) as {
		Items: Array<{ Name: string; Id: number }>;
	};

	const items = responseData.Items || [];
	const results: INodeListSearchItems[] = items.map((item) => ({
		name: item.Name,
		value: item.Id,
	}));

	return { results };
}
