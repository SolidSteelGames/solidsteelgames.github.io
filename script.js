(function () {
  var NAMES = { win: "Windows", mac: "macOS", linux: "Linux" };
  var ua = navigator.userAgent || "";
  var plat =
    (navigator.userAgentData && navigator.userAgentData.platform) ||
    navigator.platform ||
    "";
  var os = "";
  if (
    /Android|iPhone|iPad|iPod/i.test(ua) ||
    (/Mac/i.test(plat) && navigator.maxTouchPoints > 1)
  ) {
    os = "mobile";
  } else if (/win/i.test(plat) || /Windows/.test(ua)) {
    os = "win";
  } else if (/mac/i.test(plat) || /Macintosh/.test(ua)) {
    os = "mac";
  } else if (/linux|x11|cros/i.test(plat) || /Linux|X11|CrOS/.test(ua)) {
    os = "linux";
  }
  var main = document.getElementById("main-dl"),
    note = document.getElementById("dl-note");
  var links = document.querySelectorAll("#platforms a");
  if (NAMES[os]) {
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute("data-os") === os) {
        links[i].className = "on";
        main.href = links[i].getAttribute("href");
        main.textContent = "Download for " + NAMES[os];
      }
    }
    note.hidden = false;
    note.textContent = "Not on " + NAMES[os] + "? Pick your system below.";
  } else if (os === "mobile") {
    main.hidden = true;
    note.hidden = false;
    note.textContent =
      "Deer Simulator 3D is a desktop game. Open this page on a computer to play.";
  }
})();
