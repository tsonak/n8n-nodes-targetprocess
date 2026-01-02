import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class TargetprocessApi implements ICredentialType {
	name = 'targetprocessApi';

	displayName = 'Targetprocess API';

	icon: Icon = { light: 'file:../icons/targetprocess.svg', dark: 'file:../icons/targetprocess.dark.svg' };

	documentationUrl = 'https://md5.tpondemand.com/api/help/';

	properties: INodeProperties[] = [
		{
			displayName: 'Account (Subdomain)',
			name: 'account',
			type: 'string',
			default: '',
			placeholder: 'myaccount',
			description: 'The subdomain of your Targetprocess instance (e.g., https://myaccount.tpondemand.com)',
			required: true,
		},
		{
			displayName: 'Access Token (PAT)',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Your Targetprocess Personal Access Token',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				access_token: '={{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '=https://{{$credentials.account}}.tpondemand.com/api/v1',
			url: '/Projects',
			method: 'GET',
			qs: {
				take: 1,
			},
		},
	};
}
