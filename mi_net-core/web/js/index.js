document.getElementById("searchbar").addEventListener("change", function() {
  var selectedSite = this.value;
  var windowDiv = document.getElementById("window");

  if (selectedSite) {
      // Load the external file based on the selected option
      loadContent(selectedSite);
  } else {
      windowDiv.innerHTML = ''; // Clear the window if no option is selected
  }
});

function loadContent(site) {
  var windowDiv = document.getElementById("window");
  
  // This will map the options to the corresponding HTML files
  var siteFiles = {
      'govm': '../data/govm.html',
      'mail': '../data/mail.html',
      'relt': '../data/relt.html',
      'fnst': '../data/fnst.html',
      'busn': '../data/busn.html',
      'educ': '../data/educ.html'
  };

  var file = siteFiles[site];

  // Fetch the content from the external file
  fetch(file)
      .then(response => response.text())
      .then(data => {
          windowDiv.innerHTML = data;
      })
      .catch(error => {
          console.error('Error loading the file:', error);
      });
}
