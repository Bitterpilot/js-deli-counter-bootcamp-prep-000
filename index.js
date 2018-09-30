function takeANumber(customerList, newCustomer) {
    var customerList2 = customerList.push(newCustomer);
    var postion = customerList.indexOf() + 1;
    console.log(customerList);
    console.log(postion);
    var welcomeMessage = "Welcome, " + newCustomer + ". You are number " + postion + " in line.";
    return welcomeMessage;
}
