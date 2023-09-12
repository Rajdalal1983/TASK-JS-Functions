/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName(){
    console.log(`john`);
}

printName()
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birth_year){
    console.log(2023 - birth_year)
}
printAge(2004)

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name,language){
    if(language=="english")
    {console.log(`Hello ${name}`)}
    if(language=="Thai")
    {console.log(`sawadi cup ${name}`)}
    if(language=="filipino")
    {console.log(`kamusta ${name}`)}
    if(language=="arabic")
    {console.log(`mrhban ${name}`)}
}
printHello("john", "english")

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(x,y){
    if (x > y){console.log(x)}
    else if (y > x){console.log(y)}
}
printMax(10000,29)
printMax(70,20000)
