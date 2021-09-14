let myself =
{
    firstname: 'Juan',
    lastname: 'Dela Cruz',
    age: 20,
    subject: 'ICS 2609',
    gender: "female",
   introduce:function()
    {
        
    },
    enrolled:function()
    {
       
    }
}

function introduce()
{
    return 'Hello, I am ' + myself.firstname + ' ' +  myself.lastname;
}
function enrolled()
{
    return 'I am enrolled in ' + myself.subject;
}
console.log(myself);
console.log(introduce());
console.log(enrolled());