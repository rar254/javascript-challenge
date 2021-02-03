// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

//Select our tbody to add our table
var tbody = d3.select("tbody");

//loop through our data to insert proper amount of rows for our alien data
tableData.forEach(function(aliens){
    var row = tbody.append("tr");

    // Use object.entries to loop through tableData array [key, value]
    Object.entries(aliens).forEach(function([key,value]){

        // append ("rd") for each key and place their value(text)
        var cell = row.append("td");
        cell.text(value);
    });
});

