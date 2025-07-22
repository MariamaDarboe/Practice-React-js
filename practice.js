function countdown(){
    const message = "Countdown begins!";
    console.log(message);
    
    let count = 5;
    while (count > 0) {
        console.log(count);
        count --;
    }

    if (true) {
        var msg = "Test var: I exist outside the if block!";
    }
    console.log(msg);
}
countdown();