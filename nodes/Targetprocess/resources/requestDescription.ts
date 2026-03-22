import type { INodeProperties } from 'n8n-workflow';
import { descriptionProperty, projectIdProperty } from '../shared/commonProperties';

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
		...projectIdProperty,
		displayOptions: {
			show: {
				resource: ['request'],
				operation: ['create'],
			},
		},
	},
	{
		...descriptionProperty,
		displayOptions: {
			show: {
				resource: ['request'],
				operation: ['create'],
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
