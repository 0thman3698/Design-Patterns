export class Meal {
    private items: string[] = []

    addItem(item: string): void {
        this.items.push(item)
    }

    showItems(): void {
        console.log(`Meal includes ` + this.items.join(", "))
    }
}

export interface IMealBuilder {
    addBurger(burger: string): void
    addFries(fries: string): void
    addDrink(drink: string): void
    getResult(): Meal
}

export class VegMealBuilder implements IMealBuilder {
    7
    private meal = new Meal();

    addBurger(burger: string): void {
        this.meal.addItem(burger)
    }
    addFries(fries: string): void {
        this.meal.addItem(fries)
    }
    addDrink(drink: string): void {
        this.meal.addItem(drink)
    }
    getResult(): Meal {
        return this.meal
    }

}

export class NonVegMealBuilder implements IMealBuilder {
    private meal = new Meal();

    addBurger(burger: string): void {
        this.meal.addItem(burger);
    }
    addDrink(drink: string): void {
        this.meal.addItem(drink);
    }
    addFries(fries: string): void {
        this.meal.addItem(fries);
    }
    getResult(): Meal {
        return this.meal;
    }
}

export class MealDirector {
    constructor(private builder: IMealBuilder) {

    }

    constructVegMeal(): void {
        this.builder.addBurger('veg builder')
        this.builder.addDrink('Diet Drink')
        this.builder.addFries('small fries')
    }

    constructNonVegMeal(): void {
        this.builder.addBurger("Chicken Burger");
        this.builder.addDrink("Pepsi");
        this.builder.addFries("Large Fries");
    }
}

