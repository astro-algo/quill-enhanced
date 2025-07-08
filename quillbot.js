// inject.js
chrome = chrome ?? browser;

const script = document.createElement("script");
script.src = chrome.runtime.getURL("quillbot-external.js");
script.async = false;
script.onload = () => script.remove();

document.documentElement.appendChild(script);
