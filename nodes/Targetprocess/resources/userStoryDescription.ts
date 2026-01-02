import type { INodeProperties } from 'n8n-workflow';

export const userStoryDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['userStory'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a user story',
				action: 'Create a user story',
				routing: {
					request: {
						method: 'POST',
						url: '/UserStories',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a user story by ID',
				action: 'Get a user story',
				routing: {
					request: {
						method: 'GET',
						url: '=/UserStories/{{$parameter["storyId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List user stories',
				action: 'List user stories',
				routing: {
					request: {
						method: 'GET',
						url: '/UserStories',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a user story',
				action: 'Update a user story',
				routing: {
					request: {
						method: 'POST',
						url: '=/UserStories/{{$parameter["storyId"]}}',
					},
				},
			},
		],
		default: 'create',
	},
	{
		displayName: 'Story ID',
		name: 'storyId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['userStory'],
				operation: ['get', 'update'],
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
				resource: ['userStory'],
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
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['userStory'],
				operation: ['update'],
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
				resource: ['userStory'],
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
		displayName: 'Project Name or ID',
		name: 'projectId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
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
				resource: ['userStory'],
				operation: ['update'],
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
				resource: ['userStory'],
				operation: ['create', 'update'],
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
		displayName: 'Iteration Name or ID',
		name: 'iterationId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		modes: [
			{
				displayName: 'List',
				name: 'list',
				type: 'list',
				placeholder: 'Select an Iteration...',
				typeOptions: {
					searchListMethod: 'getIterations',
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
				resource: ['userStory'],
				operation: ['create', 'update'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'Iteration.Id',
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
				resource: ['userStory'],
				operation: ['create', 'update'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'Release.Id',
			},
		},
	},
	{
		displayName: 'Feature Name or ID',
		name: 'featureId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		modes: [
			{
				displayName: 'List',
				name: 'list',
				type: 'list',
				placeholder: 'Select a Feature...',
				typeOptions: {
					searchListMethod: 'getFeatures',
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
				resource: ['userStory'],
				operation: ['create', 'update'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'Feature.Id',
			},
		},
	},
];
