
// params before ecmascript6
function NewFunction(name, age, country)
{

    name = name || "Teudis";
    age = age || 35
    country = country || "Cuba"
    console.log(name, age, country)

}

//es6 default params

function NewFunction2(name="Teudis", age="35", country="Cuba")
{
    console.log(name, age, country)
}

NewFunction2()
NewFunction2("Thiago",3,"PA")