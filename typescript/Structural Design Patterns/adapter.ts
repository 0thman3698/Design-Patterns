export interface INotifier {
    sendNotification(msg: string): void;
}
export class OldEmailService {
    sendEmail(content: string): void {
        console.log(`sendeing email with content: ${content}`)
    }
}

export class SlackAPI {
    postMessage(text: string): void {
        console.log(`💬 Posting Slack message: ${text}`);
    }
}

export class EmailAdapter implements INotifier {
    private emailService: OldEmailService

    constructor(emailservice: OldEmailService) {
        this.emailService = emailservice
    }

    sendNotification(msg: string): void {
        console.log(`Adapter converting sendNotification() to sendEmail()`)
        this.emailService.sendEmail(msg)
    }
}

export class SlackAdapter implements INotifier {
    private slackApi: SlackAPI
    constructor(slackApi: SlackAPI) {
        this.slackApi = slackApi
    }
    sendNotification(msg: string): void {
        console.log('adapter converting sendNotification() to postMessage()');
        this.slackApi.postMessage(msg)
    }
}