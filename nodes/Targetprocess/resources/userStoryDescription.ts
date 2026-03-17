import type { INodeProperties } from 'n8n-workflow';
import {
	descriptionProperty,
	featureIdProperty,
	iterationIdProperty,
	projectIdProperty,
	releaseIdProperty,
} from '../shared/commonProperties';

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
		...projectIdProperty,
		displayOptions: {
			show: {
				resource: ['userStory'],
				operation: ['create'],
			},
		},
	},
	{
		...projectIdProperty,
		required: false,
		displayOptions: {
			show: {
				resource: ['userStory'],
				operation: ['update'],
			},
		},
	},
	{
		...descriptionProperty,
		displayOptions: {
			show: {
				resource: ['userStory'],
				operation: ['create', 'update'],
			},
		},
	},
	{
		...iterationIdProperty,
		displayOptions: {
			show: {
				resource: ['userStory'],
				operation: ['create', 'update'],
			},
		},
	},
	{
		...releaseIdProperty,
		displayOptions: {
			show: {
				resource: ['userStory'],
				operation: ['create', 'update'],
			},
		},
	},
	{
		...featureIdProperty,
		displayOptions: {
			show: {
				resource: ['userStory'],
				operation: ['create', 'update'],
			},
		},
	},
];
