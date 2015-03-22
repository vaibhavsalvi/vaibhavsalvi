function AddToSeed( seedValue)
{
    
   // alert(seedValue + " - SeedValue " + this + "In AddToSeed");  //Why is this WINDOW although from button
   // return function closure(addValue) {
   //     alert(this + "In Closure " + " Added Value " + addValue);
       
   //     seedValue = parseInt(seedValue) + parseInt(addValue);  // SeedValue will be changed in each subsequent closure invocation, unless it is not a self executing immediate function
   //     alert(" New Seed Value now is " + seedValue);
   //// }  Uncomment, to show non IMEI
    // }(seedValue);
    // var get1Value = 
    var getClosure=Converter(seedValue);
    alert(getClosure().x);
    alert(getClosure().y);
     
}

function Converter(seedValue)
{
    
    return {
        x: function () {
            return (8 + seedValue);
        },
        y: function () {
            return (10 + seedValue);

        }

    }();
}

var person = function () {
    // Private
    var name = "Robert";
    return {
        getName : function () {
            return name;
        },
        setName : function (newName) {
            name = newName;
        }
    };
}();