function validateForm()
{
   
    var lname = document.getElementById("lname").value;
    var rollno = document.getElementById("rollno").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;


    if(lname == "")
    {
        alert("Enter last name");
        return false;
    }

    if(rollno == "")
    {
        alert("Enter roll Number");
        return false;
    }

    var phonePattern = /^[0-9]{10}$/;

    if(phone == "")
    {
        alert("Enter phone number");
        return false;
    }

    if(!phonePattern.test(phone))
    {
        alert("Phone number must contain exactly 10 digits");
        return false;
    }

    if(email == "")
    {
        alert("Enter Email");
        return false;
    }

    if(!email.includes("@"))
    {
        alert("Enter a valid email address");
        return false;
    }

    if(!document.getElementById("male").checked &&
       !document.getElementById("female").checked &&
       !document.getElementById("other").checked)
    {
        alert("Select gender");
        return false;
    }

    alert("Registration successful!");
    return true;
}