function takeANumber(customerList, newCustomer) {
  var updatedList = customerList.push(newCustomer);
  var postion = customerList.indexOf(newCustomer) + 1;
  var welcomeMessage = "Welcome, " + newCustomer + ". You are number " + postion + " in line.";
  return welcomeMessage;
}

function nowServing(customerList) {
  var currentCustomer = customerList[0];
  if (currentCustomer == undefined) {
    return 'There is nobody waiting to be served!'
  } else {
    return "Currently serving " + currentCustomer + "."
  }
}
