const selectors = {
  body: document.querySelector("body"),
};

const buttons = ["export","import","next","exit"];

selectors.body.addEventListener("click", function(event) {
  const classname = event.target.className;
  if (buttons.includes(classname)) {
    showLabel(classname);
    showDetail(classname);
    addBorder(classname);
    return;
  };
  return;
});

function showLabel (classname) {
  for (const button of buttons) {
    document.querySelector("." + button + "Label").style.display = "none";
  }
  document.querySelector("." + classname + "Label").style.display = "block";
};

function showDetail (classname) {
  for (const button of buttons) {
    document.querySelector("." + button + "Detail").style.display = "none";
  }
  document.querySelector("." + classname + "Detail").style.display = "block";
};

function addBorder (classname) {
  for (const button of buttons) {
    document.querySelector("." + button).style.border = "";
  }
  document.querySelector("." + classname).style.border = "2px solid #E61E1E";
};
