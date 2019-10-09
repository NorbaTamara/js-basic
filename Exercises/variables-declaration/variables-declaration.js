// Declare a variable which will be encapsulated from global scope.
{
    let incapsulatedVarible;
}

// Declare a variable which will appear in global object.
var globalVariable;

// Declare two variables which will be same-names but contain different values.
let sameName = 10;
{
    let sameName = 25;
}

// Declare a variable with hosting.
hoistedVariable = 'Hi';
var hoistedVariable;
