const setRtClickId = () => {
  var anchorTag = document.getElementById("rtRef");
  var anchorUrl = new URL(anchorTag.href);
  var anchorParams = new URLSearchParams(anchorUrl.search);

  var windowUrl = new URL(window.location.href);
  var windowParams = new URLSearchParams(windowUrl.search);

  windowUrl.searchParams.set("age", "64");
  window.history.pushState(
    {
      path: windowUrl.toString(),
    },
    "",
    windowUrl.toString()
  );

  for (let pair of anchorParams.entries()) {
    windowParams.append(pair[0], pair[1]);
  }

  windowUrl.search = windowParams.toString();
  history.replaceState({}, "", windowUrl.toString());
};

const setZip = () => {
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set("ip_zip", "050001");
  window.history.pushState(
    {
      path: newUrl.href,
    },
    "",
    newUrl.href
  );
};

const loadRingba = () => {
  var script = document.createElement("script");
  script.src = "RINGBA_SCRIPT_URL_HERE";

  let timeoutId = setTimeout(addRingbaTags, 1000);

  script.onload = function () {
    clearTimeout(timeoutId);
    addRingbaTags();
  };

  document.head.appendChild(script);
};

function addRingbaTags() {
  (window._rgba_tags = window._rgba_tags || []).push({
    type: "RT",
    track_attempted: "yes",
  });
  var intervalId = setInterval(() => {
    if (window.rtkClickID != undefined) {
      (window._rgba_tags = window._rgba_tags || []).push({
        type: "RT",
        clickid: window.rtkClickID,
      });
      clearInterval(intervalId);
    }
  }, 500);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const runCountdownTimer = () => {
  var now = new Date().getTime();
  var countDownDate = new Date(now + 3 * 60000).getTime();

  setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = minutes + ":" + seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "EXPIRED";
    }
  }, 500);
};

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");

const mainContainer = document.getElementById("mainContainer");
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
const display4 = document.getElementById("display4");
const display5 = document.getElementById("display5");

const progressContainer = document.getElementById("progress-container");
const progressBarContainer = document.querySelector(".progress-bar__container");
const progressBar = document.querySelector(".progress-bar");
const progressBarText = document.querySelector(".progress-bar__text");
const progressText1 = document.getElementById("progress-text-1");
const progressText2 = document.getElementById("progress-text-2");
const progressText3 = document.getElementById("progress-text-3");

const runProgress = () => {
  const progressBarStates = [25, 50, 75, 100];

  let time = -1000;
  let endState = 100;

  progressBarStates.forEach((state) => {
    let randomTime = 1000;
    setTimeout(() => {
      if (state == endState) {
        gsap.to(progressBar, {
          x: `${state}%`,
          duration: 1,
          backgroundColor: "#30bd51",
          onComplete: () => {
            progressBarContainer.style.boxShadow = "0 0 5px #30bd51";
            progressContainer.style.display = "none";
            display4.style.display = "block";
          },
        });
      } else {
        gsap.to(progressBar, {
          x: `${state}%`,
          duration: 1,
        });

        if (state === 25) {
          progressText1.style.display = "block";
        }
        if (state === 50) {
          progressText1.style.display = "none";
          progressText2.style.display = "block";
        }
        if (state === 75) {
          progressText1.style.display = "none";
          progressText2.style.display = "none";
          progressText3.style.display = "block";
        }
      }
    }, randomTime + time);
    time += randomTime;
  });
};

btn1.addEventListener("click", () => {
  display1.style.display = "none";
  display2.style.display = "block";
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set("age", "64");
  window.history.pushState(
    {
      path: newUrl.href,
    },
    "",
    newUrl.href
  );

  setZip();
  setRtClickId();
});

btn2.addEventListener("click", () => {
  display1.style.display = "none";
  display2.style.display = "block";
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set("age", "76");
  window.history.pushState(
    {
      path: newUrl.href,
    },
    "",
    newUrl.href
  );

  setZip();
  setRtClickId();
});


btn3.addEventListener("click", () => {
  display1.style.display = "none";
  display5.style.display = "block";
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set("Under", "64");
  window.history.pushState(
    {
      path: newUrl.href,
    },
    "",
    newUrl.href
  );

  setZip();
  setRtClickId();
});

btnYes.addEventListener("click", () => {
  display2.style.display = "none";
  runProgress();
  mainContainer.style.display = "none";
  progressContainer.style.display = "block";

  loadRingba();
  runCountdownTimer();
  scrollToTop();
});

btnNo.addEventListener("click", () => {
  display2.style.display = "none";
  window.location.href = "MB_OFFER_SITE_HERE";
  display5.style.display = "block";
});
