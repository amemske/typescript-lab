let id: number = 5
let company: string = 'Heligon Systems'
let isPublished: boolean = true

let x: any = 'Hello' //any means any type
x = true


let age: number
age = 30

let ids: number[] = [1,2,3,4,5] //an array of numbers
let arr: any[] = [1, true, 'Hello']

//tuple
let person: [number, string, boolean] = [1, 'Brad', true]
//tuple array

let employee: [number, string][]

employee = [
    [1, "Antony"],
    [2, "Jack"],
    [3, "Jill"],
]

//Union
let pid: string | number
pid = '22'

//enum

enum Direction {
    Up = 1, //by default it's 0
    Down,
    Left,
    Right
}

enum Direction1 {
    Up = 'up', //by default it's 0
    Down = 'down',
    Left = 'left',
    Right= 'right'
}

console.log(Direction.Up) //1

console.log(Direction1.Left) //left

//Objects

type User = {
    id: number,
    name: string
}

const user: User = {
    id:1,
    name: 'John'
}


//type assertion

let cid: any = 1
let customerId = <number>cid //method 1
let staffId = cid as number //method 2

//functions

function addNum(x: number, y: number): number {
    return x +y
}

console.log(addNum(1,2))

//void functions
function log(message: string | number): void {
    console.log(message)
}

//interfaces-- a special type -----------------

interface Teacher {
    readonly id: number, //make property readonly
    name: string,
    age?: number //make propery optional
}

const teacher: Teacher = {
    id: 1,
    name: "Bob"
}

/*Diif btwn a type and an interface
you cannot use primitives with interfaces e.g  type Point =  number | string
you cannot do ---> interface Point = number | string */


//interfaces with functions

interface MathFunc {
    (x:number ,y: number): number
}

const addOperation: MathFunc = (x:number ,y: number): number => x + y


//classes

interface StudentInterface {
    id: number, 
    name: string,
    register(): string
}

class Student implements StudentInterface {
    id: number
    name: string

    constructor(id: number, name:string){ //always runs when object is created
        this.id = id
        this.name = name
    }

    register () {
        return `${this.name} is registered` 
    }

}

const brad = new Student( 1, "Mr Brad")
const mike = new Student( 2, "Mike Jordan")

console.log(mike.register())

console.log(brad, mike)


class Prefect extends Student {
    position: string

    constructor (id:number, name:string, position: string) {
        super(id, name)
        this.position = position
    }
}

const prefect = new Prefect(5, "Bob", "School Captain")

//generics

function getArray<T>(items: T[]) : T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])