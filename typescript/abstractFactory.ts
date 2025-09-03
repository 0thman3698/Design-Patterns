export interface IConnection {
    connect(): void
}

export interface ICommand {
    excute(query: string): void
}


export class MongoConnection implements IConnection {
    connect(): void {
        console.log('connected to MongoDB...')
    }

}

export class MongoCommand implements ICommand {
    excute(query: string): void {
        console.log(`your command ${query} excuted on mongoDB`)
    }
}
export class MySQLConnection implements IConnection {
    connect(): void {
        console.log('connected to MySQL...')
    }

}

export class MySQLCommand implements ICommand {
    excute(query: string): void {
        console.log(`your command ${query} excuted on MySQL`)
    }
}

export interface IDatabaseFactory {
    createConnection(): IConnection
    createCommand(): ICommand
}

export class MongoFactory implements IDatabaseFactory {
    createCommand(): ICommand {
        return new MongoCommand()
    }
    createConnection(): IConnection {
        return new MongoConnection()
    }
}
export class MySQLFactory implements IDatabaseFactory {
    createCommand(): ICommand {
        return new MySQLCommand()
    }
    createConnection(): IConnection {
        return new MySQLConnection()
    }
}

export class App {
    private connection: IConnection
    private command: ICommand

    constructor(factory: IDatabaseFactory) {
        this.connection = factory.createConnection()
        this.command = factory.createCommand()
    }

    run(query: string): void {
        this.connection.connect()
        this.command.excute(query)
    }
}

