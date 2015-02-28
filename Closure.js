function AddToSeed( seedValue)
{
     alert(this + " - This in context function ");
     var returnFunction=function closure(addValue)
     {
         alert(this + " - This in closure ");
         seedValue = parseInt(seedValue) + parseInt(addValue);  // Change Value Context and at each run it will have a different value
         alert(" New Seed Value now is " + seedValue);
     }
     return returnFunction;
}