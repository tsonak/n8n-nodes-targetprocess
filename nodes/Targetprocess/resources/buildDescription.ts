import type { INodeProperties } from 'n8n-workflow';

export const buildDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['build'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a build entity',
				action: 'Create a build',
				routing: {
					request: {
						method: 'POST',
						url: '/Builds',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a build by ID',
				action: 'Get a build',
				routing: {
					request: {
						method: 'GET',
						url: '=/Builds/{{$parameter["buildId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List builds',
				action: 'List builds',
				routing: {
					request: {
						method: 'GET',
						url: '/Builds',
					},
				},
			},
		],
		default: 'create',
	},
	{
		displayName: 'Build ID',
		name: 'buildId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['build'],
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
				resource: ['build'],
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
				resource: ['build'],
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
		displayName: 'Release Name or ID',
		name: 'releaseId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		modes: [
			{
				displayName: 'List',
				name: 'list',
				type: 'list',
				placeholder: 'Select a Release...',
				typeOptions: {
					searchListMethod: 'getReleases',
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
				resource: ['build'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'Release.Id',
			},
		},
	},
];
