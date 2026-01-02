import type { INodeProperties } from 'n8n-workflow';

export const projectDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['project'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a project by ID',
				action: 'Get a project',
				routing: {
					request: {
						method: 'GET',
						url: '=/Projects/{{$parameter["projectId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List projects',
				action: 'List projects',
				routing: {
					request: {
						method: 'GET',
						url: '/Projects',
					},
				},
			},
		],
		default: 'list',
	},
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['get'],
			},
		},
		default: 0,
	},
];
