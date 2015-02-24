function sayMyName(firstName)
{
alert(firstName);
     function closure()
     {
        alert('My name is' + firstName);  //using this will not work here
     }
     closure();
}