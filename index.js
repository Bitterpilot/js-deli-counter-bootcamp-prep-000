function takeANumber(initialList, newCustomer) {
    var updatedList = initialList.push(newCustomer);
    var postion = updatedList.indexOf(newCustomer) + 1;
    var welcomeMessage = "Welcome, " + newCustomer + ". You are number " + postion + " in line.";
    return welcomeMessage;
}

function nowServing(currentLine) {

}
