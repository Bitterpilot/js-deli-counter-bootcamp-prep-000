function takeANumber(customerList, newCustomer) {
    var customerList2 = customerList.push(newCustomer);
    var postion = customerList.indexOf(newCustomer) + 1;
    var welcomeMessage = "Welcome, " + newCustomer + ". You are number " + postion + " in line.";
    return welcomeMessage;
}
