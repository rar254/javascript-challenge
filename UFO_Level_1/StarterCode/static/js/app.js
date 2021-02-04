// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

//Select our tbody to add our table
var tbody = d3.select("tbody");

//loop through function to insert proper amount of rows for our alien data
function createtable() {
    //Make sure our tbody html is cleared
    tbody.html("");
    //loop through our data to look at each alien 
    tableData.forEach(function(aliens){
    //append a table row for each alien
    var row = tbody.append("tr");
    // Use object.entries to loop through tableData array [key, value]
    Object.entries(aliens).forEach(function([key,value]){

        // append ("rd") for each key and place their value(text)
        var cell = row.append("td");
        cell.text(value);
    });
});
}
//run the createtable function to return our table into our HTML
createtable();
//just running this code to see how it looks
console.log(createtable)

//Select our Filter Table Button (id: filter-btn)
var button = d3.select("#filter-btn");

//  Use D3 event listener (click) 
button.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //Makes sure our tbody html is cleared to return our new filtered table
    tbody.html("");
    // Select the input element and get the value of element
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    //checks to see if our input element works
    console.log(inputValue);
    //filter data
    var filteredData = tableData.filter(aliens => aliens.datetime === inputValue);
  
    console.log(filteredData);
    
    filteredData.forEach(function(aliens){
        var row = tbody.append("tr");
    
        // Use object.entries to loop through tableData array [key, value]
        Object.entries(aliens).forEach(function([key,value]){
    
            // append ("rd") for each key and place their value(text)
            var cell = row.append("td");
            cell.text(value);
        });
    });
  });