window.validateInput = () => {
  btnSearch.disabled = true;

  searchTxt.addEventListener('keyup', () => {
    if (searchTxt.length === 0) {
      btnSearch.disabled = true;
    } else {
      btnSearch.disabled = false;
    }
  });
};