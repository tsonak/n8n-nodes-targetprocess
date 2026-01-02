import type {
	ILoadOptionsFunctions,
	INodeListSearchItems,
	INodeListSearchResult,
} from 'n8n-workflow';
import { targetprocessApiRequest } from '../shared/transport';

export async function getIterations(
	this: ILoadOptionsFunctions,
	filter?: string,
): Promise<INodeListSearchResult> {
	const qs: any = {
		take: 100,
		where: filter ? `Name contains '${filter}'` : undefined,
	};

	const responseData = await targetprocessApiRequest.call(this, 'GET', '/Iterations', {}, qs);

	const results: INodeListSearchItems[] = (responseData.Items || []).map((item: any) => ({
		name: item.Name,
		value: item.Id,
	}));

	return { results };
}
