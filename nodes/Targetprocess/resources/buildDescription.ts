import type { INodeProperties } from 'n8n-workflow';
import { projectIdProperty, releaseIdProperty } from '../shared/commonProperties';

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
		...projectIdProperty,
		displayOptions: {
			show: {
				resource: ['build'],
				operation: ['create'],
			},
		},
	},
	{
		...releaseIdProperty,
		displayOptions: {
			show: {
				resource: ['build'],
				operation: ['create'],
			},
		},
	},
];
