//Declaring the variable for text box

let txtBox = document.getElementById("editbox");
//Creating a empty string variable
let txtBoxValue = ""

//Function to be called on clicking the buttons
function numericButtonClick(btnValue)
{
/* Appending the value of buttons in txtBoxValue */
    txtBoxValue = txtBoxValue + btnValue;
/* Displaying the value stored in txtBoxValue variable through text box using value property */
    txtBox.value = txtBoxValue;
}

/* Function to be called on clicking clear button to clear the text box */
function clearDisplay()
{
/* Making the variables empty */
    txtBoxValue = "";
    txtBox.value = "";
}

/*Function to calculate the expression and displaying the results on clicking equals to sign */ 
function showAnswer()
{   
    // Clear the textbox and string
let textBox = document.getElementById("editbox");
    txtBox.value = "";

    // calculate the result
    let answer = eval(txtBoxValue);

    // display the result
    txtBox.value = answer;

    // Clearing the value
    txtBoxValue = "";
}
//function to calculate square root 
function calculateSquareRoot()
{
//Clearing the text box 
txtBox.value = "";
//Calculating the square root
let num = eval(txtBoxValue );
let answer = num ** (1/2);
//Displaying the results
txtBox.value = answer;

//Clearing the screen
txtBoxValue = ""
};

//Function to calculate percentage
function calculatePercentage()
{
//Clearing text box
txtBox.value = "";
//Calculating the results
let num = eval(txtBoxValue);
let answer = num/100;
//Displaying the results
txtBox.value = answer;
//Clering the screen
txtBoxValue = "";
};

function deleteLastCharacter()
{
character = txtBoxValue[txtBoxValue.length - 1] + "deleted";
//Deleting the last character using slice method and updating the txtBoxValue
txtBoxValue = txtBoxValue.slice(0, -1);
//Displaying the updated value
txtBox.value = txtBoxValue;
document.getElementById("deletedcharacter").innerHTML = character;
};
/* Function to hide the paragraph after some time of clicking delete button for screen reader users as it is already hidden for sighted users */
function hideDeletedCharacterParagraph()
{
document.getElementById("deletedcharacter").style.display = "none";
}
/* Not getting required results upon using setTimeout function for hiding the paragraph */
/* Avoiding to call setTimeout function on the html file */
