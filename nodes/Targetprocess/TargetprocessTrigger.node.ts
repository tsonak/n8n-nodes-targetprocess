import type {
	IWebhookFunctions,
	IWebhookResponseData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

export class TargetprocessTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Targetprocess Trigger',
		name: 'targetprocessTrigger',
		icon: { light: 'file:../../icons/targetprocess.svg', dark: 'file:../../icons/targetprocess.dark.svg' },
		group: ['trigger'],
		version: 1,
		description: 'Handle Targetprocess webhooks',
		defaults: {
			name: 'Targetprocess Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Event',
				name: 'event',
				type: 'options',
				options: [
					{
						name: 'New Bug',
						value: 'newBug',
					},
					{
						name: 'New Build',
						value: 'newBuild',
					},
					{
						name: 'New Comment',
						value: 'newComment',
					},
					{
						name: 'New Feature',
						value: 'newFeature',
					},
					{
						name: 'New Iteration',
						value: 'newIteration',
					},
					{
						name: 'New Release',
						value: 'newRelease',
					},
					{
						name: 'New Request',
						value: 'newRequest',
					},
					{
						name: 'New Task',
						value: 'newTask',
					},
					{
						name: 'New Team Iteration',
						value: 'newTeamIteration',
					},
					{
						name: 'New Time',
						value: 'newTime',
					},
					{
						name: 'New User Story',
						value: 'newUserStory',
					},
				],
				default: 'newUserStory',
				description: 'The event to listen for. Note: You must also configure the Automation Rule in Targetprocess to trigger on this event and POST to the webhook URL provided by this node.',
			},
		],
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const body = this.getBodyData();
		return {
			workflowData: [this.helpers.returnJsonArray(body)],
		};
	}
}
