import type { INodeProperties } from 'n8n-workflow';
import { descriptionProperty, projectIdProperty } from '../shared/commonProperties';

export const taskDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['task'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a task',
				action: 'Create a task',
				routing: {
					request: {
						method: 'POST',
						url: '/Tasks',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a task by ID',
				action: 'Get a task',
				routing: {
					request: {
						method: 'GET',
						url: '=/Tasks/{{$parameter["taskId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List tasks',
				action: 'List tasks',
				routing: {
					request: {
						method: 'GET',
						url: '/Tasks',
					},
				},
			},
		],
		default: 'create',
	},
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
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
				resource: ['task'],
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
		displayName: 'User Story Name or ID',
		name: 'userStoryId',
		type: 'resourceLocator',
		default: { mode: 'id', value: '' },
		required: true,
		modes: [
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				placeholder: '123',
			},
		],
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create'],
			},
		},
		description: 'The ID of the user story the task belongs to',
		routing: {
			send: {
				type: 'body',
				property: 'UserStory.Id',
			},
		},
	},
	{
		...projectIdProperty,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create'],
			},
		},
		description: 'The ID of the project the task belongs to',
	},
	{
		...descriptionProperty,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create'],
			},
		},
	},
];
