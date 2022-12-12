/*
In this exercise, you will be defining some functions that perform the individual tasks involved in making pottery. 
Pottery minions that will do all the little things needed to make beautiful pieces of dirt art.

Time to deconstruct the process of making pottery.

Buy a big lump of clay
Use a pottery wheel to turn the clay into a bowl
Put the bowl into a kiln for a bisque firing
Apply glaze to bowl
Put glazed bowl in kiln for final firing
💰💰💰 (haha, yeah right)
*/

//Define a function named buyClay. The function needs no parameters. It should return an object with no properties on it yet.

const buyClay = () => 
{
    const clayObject = {}
    return clayObject
}
//Define a function named makePottery.
//so it needs a single parameter to capture that value and use it.
//The function should perform the task of adding a new property named shape, and its value should be "Bowl". 
//The function should then return the object after the new property was added.

let pot =  buyClay()

const makePottery = (bowlObject) => 
{
    bowlObject.shape = "Bowl"
    return bowlObject
}
//You need to pass it the empty object that buyClay produced, 
pot = makePottery(pot)

/*
Define a function named bisqueFire.
so it needs a single parameter to capture that value and use it.
The function should perform the task of adding a new property named readyForGlazing,
and its value should be true. The function should then return the object after the new property was added.
*/

const bisqueFire = (fireObject) => 
{

    fireObject.readyForGlazing = false
    return fireObject
}
//You need to give it the object that makePottery produced, 
 pot = bisqueFire(pot)
/*
Define a function named glazePottery.
so it needs a single parameter to capture that value and use it.
The function should check if the pottery has been bisque fired already and is ready for glazing. 
If it has not, you should log the following message to the console.
**Make sure you bisque fire the pottery before you glaze it.**
If the pottery has been bisque fired, the function should perform the task of adding a new property named glazing, 
and its value should be "Midnight Blue". The function should then return the object after the new property was added.
*/
const glazePottery = (glaze) => 
{ 
    if (glaze.readyForGlazing === true) {glaze.glazing = "Midnight Blue"}
    else {console.log("Make sure you bisque fire the pottery before you glaze it.")}
    return glaze
}
//You need to give it the object that bisqueFire produced, 

pot = glazePottery(pot)
/*
Define a function named finalFiring. You need to give it the object that glazePottery produced, 
so it needs a parameter to capture that value and use it. 
It also needs to capture the temperature of the kiln, so it needs two parameters.
The function should perform the task of adding a new property named cracked, 
and its value depend on the value of the temperature parameter. 
If that value is higher than 1200, then the value of the cracked property must be true.
If the value is 1200, or less, the value should be false.
The function should then return the object after the new property was added.
To test the function, make sure you invoke it and pass two arguments. First test if a high temperate cracks the pottery.
*/


const finalFiring = (finalFiring) => 
{
    pot.kilnTemp = 1100
    if (pot.kilnTemp > 1200) {finalFiring.cracked = true }
    else {finalFiring.cracked = false}
    return finalFiring
}

pot = finalFiring(pot)
console.log(pot)