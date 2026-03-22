import type { INodeProperties } from 'n8n-workflow';
import { descriptionProperty, projectIdProperty } from '../shared/commonProperties';

export const bugDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bug'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a bug',
				action: 'Create a bug',
				routing: {
					request: {
						method: 'POST',
						url: '/Bugs',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a bug by ID',
				action: 'Get a bug',
				routing: {
					request: {
						method: 'GET',
						url: '=/Bugs/{{$parameter["bugId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List bugs',
				action: 'List bugs',
				routing: {
					request: {
						method: 'GET',
						url: '/Bugs',
					},
				},
			},
		],
		default: 'create',
	},
	{
		displayName: 'Bug ID',
		name: 'bugId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['bug'],
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
				resource: ['bug'],
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
		...projectIdProperty,
		displayOptions: {
			show: {
				resource: ['bug'],
				operation: ['create'],
			},
		},
	},
	{
		...descriptionProperty,
		displayOptions: {
			show: {
				resource: ['bug'],
				operation: ['create'],
			},
		},
	},
];
