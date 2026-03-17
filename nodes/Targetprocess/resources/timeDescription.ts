import type { INodeProperties } from 'n8n-workflow';
import { descriptionProperty } from '../shared/commonProperties';

export const timeDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['time'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a time entry',
				action: 'Create a time entry',
				routing: {
					request: {
						method: 'POST',
						url: '/Times',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a time entry by ID',
				action: 'Get a time entry',
				routing: {
					request: {
						method: 'GET',
						url: '=/Times/{{$parameter["timeId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List time entries',
				action: 'List time entries',
				routing: {
					request: {
						method: 'GET',
						url: '/Times',
					},
				},
			},
		],
		default: 'create',
	},
	{
		displayName: 'Time ID',
		name: 'timeId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['time'],
				operation: ['get'],
			},
		},
		default: 0,
	},
	{
		displayName: 'Spent',
		name: 'spent',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['time'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'The number of hours spent',
		routing: {
			send: {
				type: 'body',
				property: 'Spent',
			},
		},
	},
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['time'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'The ID of the assignable entity (User Story, Task, Bug, etc.)',
		routing: {
			send: {
				type: 'body',
				property: 'Assignable.Id',
			},
		},
	},
	{
		...descriptionProperty,
		displayOptions: {
			show: {
				resource: ['time'],
				operation: ['create'],
			},
		},
	},
];
