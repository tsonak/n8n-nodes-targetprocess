# n8n-nodes-targetprocess

This is an n8n community node. It lets you use [Targetprocess](https://www.targetprocess.com/) in your n8n workflows.

Targetprocess is a visual platform to help you manage agile projects and connect strategy to execution.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Targetprocess Node

Supports the following resources:

- **Bug**: Create, update, get, and delete bugs.
- **Build**: Manage builds.
- **Comment**: Add and retrieve comments on entities.
- **Entity**: General entity operations.
- **Feature**: Manage features.
- **Iteration**: Work with iterations (sprints).
- **Project**: Access project information.
- **Release**: Manage releases.
- **Request**: Handle requests.
- **Task**: Create and update tasks.
- **Time**: Log and track time.
- **User Story**: Manage user stories.
- **Workflow**: Access workflow configurations.

### Targetprocess Trigger Node

Listen for the following events:

- New Bug
- New Build
- New Comment
- New Feature
- New Iteration
- New Release
- New Request
- New Task
- New Team Iteration
- New Time
- New User Story

## Credentials

To use this node, you'll need:

1. **Account (Subdomain)**: The subdomain of your Targetprocess instance (e.g., `myaccount` for `https://myaccount.tpondemand.com`).
2. **Access Token (PAT)**: Your Targetprocess Personal Access Token.

## Compatibility

- Minimum n8n version: 1.0.0
- Tested against n8n version: 1.0.0+

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Targetprocess API Documentation](https://md5.tpondemand.com/api/help/)
