//set language
function setEnglish() {
  localStorage.setItem('Language', 'English');
  pageRefresh(); //belongs to anubhav.functions.js
}
function setHindi() {
  localStorage.setItem('Language', 'Hindi');
  pageRefresh();
}
function getLanguage() {
  return localStorage.getItem('Language');
}

$(function() {
  if (!localStorage) {
    alert('Your browser is old! get a new one like latest google chrome or latest firefox; otherwise this site won\'t work great for you.');
  }
  if (localStorage.getItem('Language') === undefined) {
    setHindi();
  }
});
