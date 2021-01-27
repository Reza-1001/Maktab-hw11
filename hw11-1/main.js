function printFullName(fullname) {
  console.log(fullname);
}

function FullName(firstName, lastName, result) {
  let full;
  if (result === undefined) {
    return;
  }
  if (firstName === "undefined" || firstName.toString().trim() === "") {
    full = `Mr or Mrs ${lastName}`;
  } else if (lastName === "undefined" || lastName.toString().trim() === "") {
    full = `${firstName} You didn't tell us youre lastName`;
  } else if (!isNaN(firstName)) {
    full = "I need youre first Name not youre age";
  } else if (!isNaN(lastName)) {
    full = "LastName Can not be a Number ( Unless youre The 'Henry VIII' :-) )";
  } else {
    full = `${firstName} ${lastName}`;
  }
  result(full);
}

FullName("Reza", "Ahmad Nezhad", printFullName);
