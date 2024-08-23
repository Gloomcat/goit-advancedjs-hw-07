class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    private tenants: Array<Person>;
    protected key: Key;
    protected door: boolean;

    constructor(key: Key) {
        this.key = key;
        this.door = false;
    }

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    public openDoor(key: Key): void {
        if (key === this.key) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};