let inputTxt = document.getElementById('searchInput');
searchBtn.disabled = true;
inputTxt.addEventListener('keyup', function() {
  if (inputTxt.length === 0) { 
    searchBtn.disabled = true; 
  } else {
    searchBtn.disabled = false;
  }
});