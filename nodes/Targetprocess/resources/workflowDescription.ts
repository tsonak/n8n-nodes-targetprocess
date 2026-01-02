import type { INodeProperties } from 'n8n-workflow';

export const workflowDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['workflow'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'List workflows',
				action: 'List workflows',
				routing: {
					request: {
						method: 'GET',
						url: '/Workflows',
					},
				},
			},
		],
		default: 'list',
	},
];
