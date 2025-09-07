import { EmailNotification, PushNotification } from "./factoryMethod";
import { App, MongoFactory, MySQLFactory } from "./abstractFactory";
import { VegMealBuilder, MealDirector, NonVegMealBuilder, } from "./builder";
import { Rectangle, Circle } from "./prototype";
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


