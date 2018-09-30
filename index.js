function takeANumber(customerList, newCustomer) {
    var customerList2 = customerList.push(newCustomer);
    var postion = customerList.indexOf() + 2;
    console.log(customerList);
    console.log(postion);
    var welcomeMessage = "Welcome, " + newCustomer + ". You are number " + postion + " in line.";
    return welcomeMessage;
}
