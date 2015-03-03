function AddToSeed( seedValue)
{
    alert(this + "In AddToSeed");
    //alert(seedValue + " - SeedValue ");
    return function closure(addValue) {
        alert(this + "In Closure");
       // alert(addValue + " - Adding to Seed");
        seedValue = parseInt(seedValue) + parseInt(addValue);  // SeedValue will be changed in each subsequent closure invocation, unless it is not a self executing immediate function
        //alert(" New Seed Value now is " + seedValue);
    };
     
}