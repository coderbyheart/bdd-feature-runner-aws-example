import * as CDK from '@aws-cdk/core'
import { WebhookReceiverStack } from './WebhookReceiverStack'

export class TestApp extends CDK.App {
	public constructor({ stackId }: { stackId: string }) {
		super()
		new WebhookReceiverStack(this, stackId)
	}
}
