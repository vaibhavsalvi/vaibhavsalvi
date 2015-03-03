function AddToSeed( seedValue)
{
    
    alert(seedValue + " - SeedValue " + this + "In AddToSeed");
    return function closure(addValue) {
        alert(this + "In Closure");
       
        seedValue = parseInt(seedValue) + parseInt(addValue);  // SeedValue will be changed in each subsequent closure invocation, unless it is not a self executing immediate function
        alert(" New Seed Value now is " + seedValue);
   // }  Uncomment, to show non IMEI
    }(seedValue);
     
}