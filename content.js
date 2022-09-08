let script = document.createElement('script');
document.head.appendChild(script);


script.src = chrome.runtime.getURL("main.js");
// load main.js to escape sandbox env