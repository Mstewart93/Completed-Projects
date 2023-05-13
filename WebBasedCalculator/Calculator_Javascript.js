//keeps track of the values
const Calculator = {
    //will display 0 on the calculator screen
    Display_Value: '0',
    // This will hold the first operand for any expressions, set to null initially
    First_Operand: null,
    // this checks wether or not the second operand has been inputted by the user
    Wait_Second_Operand: false,
    //this will hold the operator, set to nll for now
    operator: null,
};

//this modifies the values eat time a button is clicked on
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //This checks if wait is true and sets display value
    //to the key clicked on.
    if (Wait_Second_Operand === true ) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else {
        //overwrites the dsiplay value if the current value is 0
        //otherwise it adds onto it.
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//this section handles decimal points

function Input_Decimal(dot) {
    //this ensures the accidenta; clicking  of decimald doesnt
    //cause bugs
    if(Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// this section handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //when an operator key is pressed we convert current numer
    //displayed on the screen to a number then store the result in
    //Calclator.First_operand if it doesnt already exist
    const Value_Of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if wait_second is ture
    // then updates the operator an exits from the function.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_Of_Input;
    }
    else if (operator) //checks if an operator already exits
    {
        const Value_Now = First_Operand || 0;
        //if operator exits, property lookup is performed for the operator
        //in the perform_calculations object and the funtion that matches the
        //operator is executed.
        let result = Perform_Calculation[operator](Value_Now, Value_Of_Input);
        //here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed (9);
        //this will remove any trailing 0's
        result = (result*1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
const Perform_Calculation = {
    '/' : (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*' : (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+' : (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-' : (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=' : (First_Operand, Second_Operand) => Second_Operand
};

function Calclator_Rest() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//This functon updates the calculator screen with the contents of disoly value

function Update_Display() {
    //makes use of the calculate screen class to target the 
    //input tag in the HTML document
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display(); 
// this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element
    //that was clicked
    const { target } = event;
    //if the element that was cliked on is not a button exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures that AC clears all inputs from the calculator screen.
    if (target.classList.contains('all-clear')) {
        Calclator_Rest();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})