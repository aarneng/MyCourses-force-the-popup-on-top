(function main() {

  console.log("loaded")

  function finalParent(elem) {
    // returns the parent element who'se style we should change
    // ommiting this may apply the style change to only part of the card
    try {
      while (elem.classList.value !== "card dashboard-card") elem = elem.parentElement
      return elem
    }
    catch (e) {
      return null
    }
  }

  function applyMouseOver(event) {
    elem = finalParent(event.target)
    if (!elem) return

    // changing the opacity to 1 removes the glithy hover effect
    elem.style.opacity = "1"  

    // change background color to provide feedback to user 
    // (feedback used to be opacity change but this got changed)
    elem.style.backgroundColor = "#e3f0ff"
  }

  function applyMouseOut(event) {
    elem = finalParent(event.target)
    if (!elem) return

    // change background color back to normal
    elem.style.backgroundColor = "#fff"
  }

  function applyHoverListeners() {
    // go through all cards on the page and apple hover listeners accordingly
    for (elem of document.getElementsByClassName("card")) {
      if (elem?.classList?.value !== "card dashboard-card") continue;
      e.addEventListener("mouseover", applyMouseOver)
      e.addEventListener("mouseout",  applyMouseOut)
    }
    console.log("Applied listeners!")
  }

  const setIntervalID = setInterval(() => {
    // Maybe the jankiest part of the "codebase"
    // We wait for all the cards to load, and only then apply the event listeners
    // A more proper way to do this would be through a load event or something
    // Change in a future revision?
    if (document.getElementsByClassName("card").length > 15) {
      applyHoverListeners()
      clearInterval(setIntervalID)
    }
  }, 100)
})()

