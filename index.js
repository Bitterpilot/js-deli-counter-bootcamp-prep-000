function takeANumber(customerList, newCustomer) {
    var customerList = customerList.push(newCustomer);
    var postion = customerList.indexOf();
    var welcomeMessage = "Welcome, " + newCustomer + ". You are number " + postion + " in line.";
    return welcomeMessage;
}
