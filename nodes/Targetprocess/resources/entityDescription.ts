import type { INodeProperties } from 'n8n-workflow';

export const entityDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['entity'],
			},
		},
		options: [
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an entity',
				action: 'Delete an entity',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/Generals/{{$parameter["entityId"]}}',
					},
				},
			},
			{
				name: 'Change State',
				value: 'changeState',
				description: 'Change the state (Workflow Step) of an entity',
				action: 'Change state',
				routing: {
					request: {
						method: 'POST',
						url: '=/Generals/{{$parameter["entityId"]}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an entity by ID',
				action: 'Get an entity',
				routing: {
					request: {
						method: 'GET',
						url: '=/Generals/{{$parameter["entityId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List entities',
				action: 'List entities',
				routing: {
					request: {
						method: 'GET',
						url: '/Generals',
					},
				},
			},
		],
		default: 'delete',
	},
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['entity'],
			},
		},
		default: 0,
	},
	{
		displayName: 'State ID',
		name: 'stateId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['entity'],
				operation: ['changeState'],
			},
		},
		default: 0,
		routing: {
			send: {
				type: 'body',
				property: 'EntityState.Id',
			},
		},
	},
];
