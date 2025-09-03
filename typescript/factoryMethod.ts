export interface INotification {
    send(msg: string): void
}

export class Email implements INotification {
    send(msg: string): void {
        console.log(`Sending EMAIL with message: ${msg}
 `)
    }
}

export class SMS implements INotification {
    send(msg: string): void {
        console.log(`Sending SMS with message: ${msg}
 `)
    }
}

export class Push implements INotification {
    send(msg: string): void {
        console.log(`Sending Push notification with message: ${msg}`)
    }
    export
}

export abstract class NotificationService {
    abstract createNotification(): INotification

    notifyUser(msg: string): void {
        const notification = this.createNotification()
        notification.send(msg)
    }
}

export class EmailNotification extends NotificationService {
    createNotification(): INotification {
        return new Email()
    }
}

export class SMSNotification extends NotificationService {
    createNotification(): INotification {
        return new SMS()
    }
}

export class PushNotification extends NotificationService {
    createNotification(): INotification {
        return new Push()
    }
}

