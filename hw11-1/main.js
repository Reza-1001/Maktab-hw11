function printFullName(fullname){
console.log(fullname);
}

function FullName(firstName,lastName,result){
    let full;
    if (firstName.trim()==""){
        full=`Mr or Mrs ${lastName}`;
    }
    else if(lastName.trim()==""){
        full=`${firstName} You didn't tell us youre lastName`;
    }
    else if (!isNaN(firstName) || !isNaN(lastName)) {
        full="Name or LastName Can not be a Number unless youre the Henry VIII :)"
    }
  
    else{
        full="Please enter a valid name";
    }
    result(full);
}

FullName("Reza","",printFullName);