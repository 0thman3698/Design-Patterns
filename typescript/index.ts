import { EmailNotification, PushNotification } from "./Creational design patterns/factoryMethod";
import { App, MongoFactory, MySQLFactory } from "./Creational design patterns/abstractFactory";
import { VegMealBuilder, MealDirector, NonVegMealBuilder, } from "./Creational design patterns/builder";
import { Rectangle, Circle } from "./Creational design patterns/prototype";
import { Logger } from "./Creational design patterns/singleton";

import { OldEmailService, INotifier, EmailAdapter, SlackAdapter, SlackAPI } from "./Structural Design Patterns/adapter";
import { Red, Blue, Circlee, Square } from "./Structural Design Patterns/bridge";

/////////////////////////
//creational Design Pattern
/////////////////////////
//factory-method test
const email = new EmailNotification()
email.notifyUser('Hello by email !')

const push = new PushNotification()
push.notifyUser(`hello by push notification!`)


//// abstract-factory test 
const MySQLApp = new App(new MySQLFactory())
MySQLApp.run('SELECT * FROM users')

const mongoApp = new App(new MongoFactory());
mongoApp.run('{ find: "users" }');

//// builder test

const vegBuilder = new VegMealBuilder();
const director1 = new MealDirector(vegBuilder);
director1.constructVegMeal();
const vegMeal = vegBuilder.getResult();
vegMeal.showItems();

console.log("------");

const nonVegBuilder = new NonVegMealBuilder();
const director2 = new MealDirector(nonVegBuilder);
director2.constructNonVegMeal();
const nonVegMeal = nonVegBuilder.getResult();
nonVegMeal.showItems();


// prototype test
const circle1 = new Circle(5, 5, "Red", 10);
circle1.draw();

const circle2 = circle1.clone() as Circle;
circle2.color = "Blue";
circle2.draw();

const rect1 = new Rectangle(0, 0, "Green", 20, 15);
rect1.draw();

const rect2 = rect1.clone() as Rectangle;
rect2.width = 30;
rect2.height = 25;
rect2.draw();
// singleton test
const logger1 = Logger.getInstance()
logger1.log('first message')

const logger2 = Logger.getInstance()
logger2.log('second message ')

console.log(`all logs: ${logger1.getLogs()}`)
/////////////////////////
//structural Design Pattern
/////////////////////////

//adapter test 
const emailService = new OldEmailService();
const slackApi = new SlackAPI();

const emailNotifier: INotifier = new EmailAdapter(emailService);
const slackNotifier: INotifier = new SlackAdapter(slackApi);

emailNotifier.sendNotification("Hello via Email!");
slackNotifier.sendNotification("Hello via Slack!");

//bridge test 
const red = new Red();
const blue = new Blue();

const circle = new Circlee(red);
circle.draw();

const square = new Square(blue);
square.draw();   
