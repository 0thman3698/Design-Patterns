

export class Logger {
    private static instance: Logger;
    private logs: string[] = [];
    private constructor() { }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger()
        }
        return Logger.instance

    }
    public log(msg: string) {
        const timestamp = new Date().toISOString();
        const fullMessage = `[${timestamp}] ${msg}`;

        this.logs.push(fullMessage)
        console.log(`${fullMessage}`)
    }
    public getLogs(): string[] {
        return this.logs;

    }
}