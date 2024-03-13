function getBotResponse(input) {
    //rock paper scissors
    if (input == "How can this Website will help me") {
        return "There are plenty of ways, if you are looking for an attorney you must visit the Profile section and if you are looking for the service you want from us you must visit the services section";
    } else if (input == "How can I find a perfect attorney") {
        return "You can visit the attorneys profile and make a decision on your own";
    } else if (input == "What services do you Provide") {
        return "You can take a visit of the services page of ours";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Nice talking to you";
    } else {
        return "Try asking something else!";
    }
}