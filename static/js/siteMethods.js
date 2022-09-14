
$().ready(function() {
    // Function to load the navbar to pages on the site. 
    console.log("got here");
    $("#navbar").load("templates/navbar.html");
    console.log("success");
});
