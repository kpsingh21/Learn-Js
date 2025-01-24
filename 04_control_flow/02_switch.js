// switch (key) {  
//     case value:
        
//         break;

//     default:
//         break;
// }

//key is the value that we want to compare or check againt this cases

const month = "march" 
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        // break;  ( to understand why break is needed)
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// if not add break then it will execute all the code below the case at which key is matched with value except default