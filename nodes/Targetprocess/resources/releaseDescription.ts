import type { INodeProperties } from 'n8n-workflow';

export const releaseDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['release'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a release by ID',
				action: 'Get a release',
				routing: {
					request: {
						method: 'GET',
						url: '=/Releases/{{$parameter["releaseId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List releases',
				action: 'List releases',
				routing: {
					request: {
						method: 'GET',
						url: '/Releases',
					},
				},
			},
		],
		default: 'list',
	},
	{
		displayName: 'Release ID',
		name: 'releaseId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['release'],
				operation: ['get'],
			},
		},
		default: 0,
	},
];
