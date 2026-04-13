(function () {
  var _id = "24edac54ba38d31230271d5d2e9dc196";
  while (document.getElementById("timer" + _id)) _id = _id + "0";
  document.write(
    "<div id='timer" + _id + "' style='min-width:274px;height:64px;'></div>",
  );
  var _t = document.createElement("script");
  _t.src = "https://megatimer.ru/timer/timer.min.js?v=1";
  var _f = function (_k) {
    var l = new MegaTimer(_id, {
      view: [1, 1, 1, 1],
      type: {
        currentType: "1",
        params: { usertime: true, tz: "3", utc: 1781276400000 },
      },
      design: {
        type: "circle",
        params: {
          width: "1",
          radius: "30",
          line: "solid",
          "line-color": "#000000",
          background: "opacity",
          direction: "direct",
          "number-font-family": {
            family: "Marmelad",
            link: "<link href='//fonts.googleapis.com/css?family=Marmelad&subset=latin,cyrillic' rel='stylesheet' type='text/css'>",
          },
          "number-font-size": "29",
          "number-font-color": "black",
          "separator-margin": "3",
          "separator-on": false,
          "separator-text": ":",
          "text-on": true,
          "text-font-family": {
            family: "Marmelad",
            link: "<link href='//fonts.googleapis.com/css?family=Marmelad&subset=latin,cyrillic' rel='stylesheet' type='text/css'>",
          },
          "text-font-size": "10",
          "text-font-color": "#000000",
        },
      },
      designId: 5,
      theme: "white",
      width: 274,
      height: 64,
    });
    if (_k != null) l.run();
  };
  _t.onload = _f;
  _t.onreadystatechange = function () {
    if (_t.readyState == "loaded") _f(1);
  };
  var _h = document.head || document.getElementsByTagName("head")[0];
  _h.appendChild(_t);
}).call(this);
