function formValidation()
{
    event.preventDefault();
    //Declaring variables for each form field
    const FirstName = document.getElementById("firstname");
    const LastName = document.getElementById("lastname");
    const Birthday = document.getElementById("dateofbirth");
    const Age = document.getElementById("age");
    const Phone = document.getElementById("phone");
    const Email = document.getElementById("email");
    const Address = document.getElementById("address");
    const Male = document.getElementById("male");
    const Female = document.getElementById("female");
    const Other = document.getElementById("others");
    // Storing the required pattern formobile number in a variable
    const pattern = /^\d{3}-\d{4}-\d{3}$/;
    // Storing the required pattern for email form field using regular expression
    const EmailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Storing required pattern for first name and last name using regular expression
    const NameReg = /^[A-Za-z]+$/; // Regular expression to match only characters
    
    /* Creating condition statements for required field, s displaying an alert message and placing the focus on respective form field */
    if (FirstName.value ===  "")
    {
        alert("FirstName can not be empty.  Please fill this field");
        FirstName.focus();
    }
    else if (LastName.value  === "")
    {
        alert("Last Name field can not be empty.  Please fill this field.");
        LastName.focus();
    }
    else if (Birthday.value  === "")
    {
        alert("Date of Birth field can not be empty.  Please fill this field");
        Birthday.focus();
    }
    else if (Age.value === "")
    {
        alert("Age field can not be empty.  Please fill this field");
        Age.focus();
    }
    else if (Phone.value === "")
    {
        alert("Phone number field can not be empty.  Please fill this form field.");
        Phone.focus();
    }
    else if (Email.value === "")
    {
        alert("Email field can not be empty.  Please fill this field.");
        Email.focus();
    }
    else if (Address.value === "")
    {
        alert("Address field can not be empty.  Please fill this field.");
        Address.focus();
    }
    else if (!Male.checked && !Female.checked && !Other.checked)
    {
        alert("Gender is required.  Please choose your gender");
        Male.focus();
    }
    /* Creating condition statement for phone number pattern */
    else if (!pattern.test(Phone.value))
    {
        alert("Please use the specified pattern.  For example:  123-4567-987");
        Phone.focus();
    }
    else if (!EmailReg.test(Email.value))
    {
        alert("Please enter a valid email address.  Email address must include '@' sign.  For example:  example@gmail.com");
        Email.focus();
    }
    else if (!NameReg.test(FirstName.value))
    {
        alert("Please enter a valid name.  Name can only have alphabets ");
        FirstName.focus();
    }
    else if (!NameReg(LastName.value))
    {
        alert("Please enter a valid last name.  Last name can only have alphabets.");
        LastName.focus();
    }
    }