

// We have armies:

// 	attacking
// 	or defending


// Armies are comprised of:

// 	airplanes
// 	sea combat
// 		heavy
// 		light
// 		unsupplied heavy
// 		unsupplied light
// 	land combat
// 		infantry
// 		tank
// 		unsupplied infantry
// 		unsupplied tank


var army1;		// total value of army 1 strength
var army2;		// total value of army 2 strength
var army1List = [];		// list of army 1 troops
var army2List = []; 	// list of army 2 troops



// This is how it happens:

// 1. enter units into a form
// 2. put the units into an array
// 3. determine if the units are attacking or defending - both armies can potentially attack at the same time
// 4. take the combat value of each of the units and combine them

// 5. compare the combat value of the two conflicting armies
// 6. determine who won the battle

// 7. divide combat value % by 2 and determine number of casualties
// 	7a. for example, in a 50-50 battle, each unit has a 25% chance of dying
// 8. randomly go through the array and kill that number of units
// 9. display what types of units within the array were killed