import type { INodeProperties } from 'n8n-workflow';

export const commentDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['comment'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Append a new comment to an existing entity',
				action: 'Create a comment',
				routing: {
					request: {
						method: 'POST',
						url: '/Comments',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a comment by ID',
				action: 'Get a comment',
				routing: {
					request: {
						method: 'GET',
						url: '=/Comments/{{$parameter["commentId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List comments',
				action: 'List comments',
				routing: {
					request: {
						method: 'GET',
						url: '/Comments',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing comment',
				action: 'Update a comment',
				routing: {
					request: {
						method: 'POST',
						url: '=/Comments/{{$parameter["commentId"]}}',
					},
				},
			},
		],
		default: 'create',
	},
	{
		displayName: 'Comment ID',
		name: 'commentId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['get', 'update'],
			},
		},
		default: 0,
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['comment'],
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
		displayName: 'General ID',
		name: 'generalId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'The ID of the entity to comment on',
		routing: {
			send: {
				type: 'body',
				property: 'General.Id',
			},
		},
	},
	{
		displayName: 'Is Private',
		name: 'isPrivate',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['create'],
			},
		},
		description: 'Whether the comment should be hidden from Requesters in the Service Desk',
		routing: {
			send: {
				type: 'body',
				property: 'IsPrivate',
			},
		},
	},
];
