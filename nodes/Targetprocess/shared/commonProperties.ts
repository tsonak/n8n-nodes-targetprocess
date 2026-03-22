import type { INodeProperties } from 'n8n-workflow';

export const projectIdProperty: INodeProperties = {
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
	routing: {
		send: {
			type: 'body',
			property: 'Project.Id',
		},
	},
};

export const iterationIdProperty: INodeProperties = {
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
	routing: {
		send: {
			type: 'body',
			property: 'Iteration.Id',
		},
	},
};

export const releaseIdProperty: INodeProperties = {
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
	routing: {
		send: {
			type: 'body',
			property: 'Release.Id',
		},
	},
};

export const featureIdProperty: INodeProperties = {
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
	routing: {
		send: {
			type: 'body',
			property: 'Feature.Id',
		},
	},
};

export const descriptionProperty: INodeProperties = {
	displayName: 'Description',
	name: 'description',
	type: 'string',
	default: '',
	routing: {
		send: {
			type: 'body',
			property: 'Description',
		},
	},
};
