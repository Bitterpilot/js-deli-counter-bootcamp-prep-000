function takeANumber(customerList, newCustomer) {
  var updatedList = customerList.push(newCustomer);
  var postion = customerList.indexOf(newCustomer) + 1;
  var welcomeMessage = "Welcome, " + newCustomer + ". You are number " + postion + " in line.";
  return welcomeMessage;
}

function nowServing(customerList) {
  var currentCustomer = customerList[0];
  console.log(currentCustomer);
  //"Currently serving " ++ "."
}
