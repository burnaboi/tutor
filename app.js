function  chooseTab(event, tabName){ 
    var tabcontent = document.getElementsByClassName("navbar__content");
    var tablinks = document.getElementsByClassName("navbar__buttons");
    for (var i = 0; i < tablinks.length; i++){
      //hides all tabs
      tablinks[i].classList.remove("active");
      tabcontent[i].style.display = "none";
    } 
    //makes the selected tab active and shows it
    document.getElementById(tabName).style.display = "block"; 
    document.getElementById(tabName).classList.add("active");
  }
      //setting the home tab as our first page
  document.getElementById("homeButton").click();