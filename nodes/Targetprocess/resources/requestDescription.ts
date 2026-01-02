import type { INodeProperties } from 'n8n-workflow';

export const requestDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['request'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a request',
				action: 'Create a request',
				routing: {
					request: {
						method: 'POST',
						url: '/Requests',
					},
				},
			},
			{
				name: 'Add Requester',
				value: 'addRequester',
				description: 'Add a requester to a request',
				action: 'Add a requester',
				routing: {
					request: {
						method: 'POST',
						url: '=/Requests/{{$parameter["requestId"]}}/Requesters',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a request by ID',
				action: 'Get a request',
				routing: {
					request: {
						method: 'GET',
						url: '=/Requests/{{$parameter["requestId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List requests',
				action: 'List requests',
				routing: {
					request: {
						method: 'GET',
						url: '/Requests',
					},
				},
			},
		],
		default: 'create',
	},
	{
		displayName: 'Request ID',
		name: 'requestId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['request'],
				operation: ['addRequester', 'get'],
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
				resource: ['request'],
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
				resource: ['request'],
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
				resource: ['request'],
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
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['request'],
				operation: ['addRequester'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'Id',
			},
		},
	},
];
