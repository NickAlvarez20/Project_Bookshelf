//create Object array, add in specifics including boolean variable(true or false), add in color, noStroke or stroke (users preference)

var book = [
    {title: "The Giver", reco: true, author: "Nicholas Innova", starz: 5, color: color(0, 255, 149)},
    {title: "The Galaxies", reco: true, author: "Ian Lewis", starz: 5, color: color(8, 48, 247)},
    {title: "The Stars", reco: true, author: "Clinton Bradie", starz: 5, color: color(10, 245, 198)},
    {title: "Flight", reco: true, author: "Henry Jones", starz: 5, color: color(250, 0, 0)},
    {title: "Chicken", reco: true, author: "Yuri Mistan", starz: 4, color: color(25, 5, 245)},
    {title: "Turkey", reco: false, author: "Barnyard", starz: 3, color: color(221, 0, 250)},
    {title: "Lion", reco: true, author: "Wildernessy", starz: 5, color: color(5, 221, 250)},
    {title: "Tigers", reco: false, author: "Ted West", starz: 2, color: color(255, 255, 255)},
    {title: "Jesus Christ", reco: true, author: "God", starz: 5, color: color(12, 235, 198)},
    {title: "Earthquakes", reco: true, author: "Albania", starz: 5, color: color(255, 0, 0)},
    {title: "Impeachment", reco: true, author: "Tunivuay Leonard", starz: 4, color: color(14, 134, 181)},
    {title: "The Kraken", reco: true, author: "God", starz: 5, color: color(250, 0, 0)}

];
// draw shelves using for loop
for(var t = 0; t <3; t++){
fill(140, 84, 0);
rect(0, 110 + t*110, width, 10);
}

// draw books. start with for loop to designate variable i, create if(conditional) to create rows, then fill in book color according to specific preference set at beginning in object array values. Next create the colored rectangles, using specific spacing patterns while adding in x and y variables to create proper spacing in the if sequence. Assign text and loop it throughout all books, repeat process for author. Next, create if loop to implement boolean sequences(TOUGH but fun thinking). Finally, create for loop(book[i].starz) key component to adjust accordingly the ratings(even tougher thinking). Two key variables i and j MUST be added and implemented properly to this for-loop. 
for (var i = 0; i < book.length; i++) {
    if(i < 4) {
        var y = 18;
        var x = -1;
    }
    else if(i < 8) {
        var y = 129;
        var x = 384;
    }
    else {
        y = 238;
        x = 768;
    }
    fill(book[i].color);
    rect(14 + i*96 - x, y - 8, 95, 100);
fill(0, 0, 0);
    text(book[i].title, 35 + i*94 - x, y, 70, 100);
    text(book[i].author, 35 + i*96 - x, y+24, 70, 100);
    if(book[i].reco) {
    image(getImage("cute/Heart"), 34 + i*99 - x, y+39, 20, 31);
}
    for(var j = 0; j < book[i].starz; j++){
        image(getImage("cute/Star"), 24 + i*95 + j*14 - x, y+62, 20, 32);
    }
    
}

s
