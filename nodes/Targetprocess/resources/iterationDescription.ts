import type { INodeProperties } from 'n8n-workflow';

export const iterationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['iteration'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get an iteration by ID',
				action: 'Get an iteration',
				routing: {
					request: {
						method: 'GET',
						url: '=/Iterations/{{$parameter["iterationId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List iterations',
				action: 'List iterations',
				routing: {
					request: {
						method: 'GET',
						url: '/Iterations',
					},
				},
			},
		],
		default: 'list',
	},
	{
		displayName: 'Iteration ID',
		name: 'iterationId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['iteration'],
				operation: ['get'],
			},
		},
		default: 0,
	},
];
