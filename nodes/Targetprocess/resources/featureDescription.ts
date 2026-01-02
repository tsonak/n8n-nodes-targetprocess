import type { INodeProperties } from 'n8n-workflow';

export const featureDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['feature'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a feature',
				action: 'Create a feature',
				routing: {
					request: {
						method: 'POST',
						url: '/Features',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a feature by ID',
				action: 'Get a feature',
				routing: {
					request: {
						method: 'GET',
						url: '=/Features/{{$parameter["featureId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List features',
				action: 'List features',
				routing: {
					request: {
						method: 'GET',
						url: '/Features',
					},
				},
			},
		],
		default: 'create',
	},
	{
		displayName: 'Feature ID',
		name: 'featureId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['feature'],
				operation: ['get'],
			},
		},
		default: 0,
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['feature'],
				operation: ['create'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'Name',
			},
		},
	},
	{
		displayName: 'Project Name or ID',
		name: 'projectId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		modes: [
			{
				displayName: 'List',
				name: 'list',
				type: 'list',
				placeholder: 'Select a Project...',
				typeOptions: {
					searchListMethod: 'getProjects',
					searchFilterRequired: true,
					searchable: true,
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				placeholder: '123',
			},
		],
		displayOptions: {
			show: {
				resource: ['feature'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'Project.Id',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['feature'],
				operation: ['create'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'Description',
			},
		},
	},
];
