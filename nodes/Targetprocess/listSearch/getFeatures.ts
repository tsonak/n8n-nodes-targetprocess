import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { targetprocessListSearch } from '../shared/transport';

export async function getFeatures(
	this: ILoadOptionsFunctions,
	filter?: string,
): Promise<INodeListSearchResult> {
	return await targetprocessListSearch.call(this, '/Features', filter);
}
