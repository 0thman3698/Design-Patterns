import { EmailNotification, PushNotification } from "./factoryMethod";
import { App, MongoFactory, MySQLFactory } from "./abstractFactory";
import { VegMealBuilder, MealDirector, NonVegMealBuilder, } from "./builder";
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