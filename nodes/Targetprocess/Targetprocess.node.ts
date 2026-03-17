import {
	NodeConnectionTypes,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';

import { bugDescription } from './resources/bugDescription';
import { buildDescription } from './resources/buildDescription';
import { commentDescription } from './resources/commentDescription';
import { entityDescription } from './resources/entityDescription';
import { featureDescription } from './resources/featureDescription';
import { iterationDescription } from './resources/iterationDescription';
import { projectDescription } from './resources/projectDescription';
import { releaseDescription } from './resources/releaseDescription';
import { requestDescription } from './resources/requestDescription';
import { taskDescription } from './resources/taskDescription';
import { timeDescription } from './resources/timeDescription';
import { userStoryDescription } from './resources/userStoryDescription';
import { workflowDescription } from './resources/workflowDescription';

import { getProjects } from './listSearch/getProjects';
import { getIterations } from './listSearch/getIterations';
import { getFeatures } from './listSearch/getFeatures';
import { getReleases } from './listSearch/getReleases';

export class Targetprocess implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Targetprocess',
		name: 'targetprocess',
		icon: { light: 'file:../../icons/targetprocess.svg', dark: 'file:../../icons/targetprocess.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Targetprocess API',
		usableAsTool: true,
		defaults: {
			name: 'Targetprocess',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'targetprocessApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '=https://{{$credentials.account}}.tpondemand.com/api/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Bug',
						value: 'bug',
					},
					{
						name: 'Build',
						value: 'build',
					},
					{
						name: 'Comment',
						value: 'comment',
					},
					{
						name: 'Entity',
						value: 'entity',
					},
					{
						name: 'Feature',
						value: 'feature',
					},
					{
						name: 'Iteration',
						value: 'iteration',
					},
					{
						name: 'Project',
						value: 'project',
					},
					{
						name: 'Release',
						value: 'release',
					},
					{
						name: 'Request',
						value: 'request',
					},
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'Time',
						value: 'time',
					},
					{
						name: 'User Story',
						value: 'userStory',
					},
					{
						name: 'Workflow',
						value: 'workflow',
					},
				],
				default: 'userStory',
			},
			...bugDescription,
			...buildDescription,
			...commentDescription,
			...entityDescription,
			...featureDescription,
			...iterationDescription,
			...projectDescription,
			...releaseDescription,
			...requestDescription,
			...taskDescription,
			...timeDescription,
			...userStoryDescription,
			...workflowDescription,
		],
	};

	methods = {
		listSearch: {
			getProjects,
			getIterations,
			getFeatures,
			getReleases,
		},
	};
}
