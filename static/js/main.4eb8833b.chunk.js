(this["webpackJsonprobo-prac"] = this["webpackJsonprobo-prac"] || []).push([
  [0],
  {
    12: function (e, a, n) {},
    14: function (e, a, n) {},
    15: function (e, a, n) {
      "use strict";
      n.r(a);
      var t = n(0),
        r = n.n(t),
        i = n(2),
        l = n.n(i),
        o = n(3),
        c = n(4),
        m = n(6),
        s = n(5);
      var u = function (e) {
          return e.robots.map(function (e) {
            return r.a.createElement(
              "div",
              {
                key: e.id,
                className: "tc bg-green grow dib br3 ba ma2 pa3 shadow-5 mw6",
              },
              r.a.createElement("h3", null, e.name),
              r.a.createElement("img", {
                src: "https://robohash.org/".concat(e.id),
                alt: "Robo pic",
              }),
              r.a.createElement("h3", null, " ", e.username),
              r.a.createElement("h4", null, e.email)
            );
          });
        },
        h = function (e) {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement("input", {
              onChange: e.searchChange,
              type: "search",
              placeholder: "Search Robots",
              className: "pa2 input-reset bg-lightest-blue",
            }),
            r.a.createElement("br", null),
            r.a.createElement("br", null)
          );
        },
        d = [
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
          },
          {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
          },
          {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org",
          },
          {
            id: 5,
            name: "Chelsey Dietrich",
            username: "Kamren",
            email: "Lucio_Hettinger@annie.ca",
          },
          {
            id: 6,
            name: "Mrs. Dennis Schulist",
            username: "Leopoldo_Corkery",
            email: "Karley_Dach@jasper.info",
          },
          {
            id: 7,
            name: "Kurtis Weissnat",
            username: "Elwyn.Skiles",
            email: "Telly.Hoeger@billy.biz",
          },
          {
            id: 8,
            name: "Nicholas Runolfsdottir V",
            username: "Maxime_Nienow",
            email: "Sherwood@rosamond.me",
          },
          {
            id: 9,
            name: "Glenna Reichert",
            username: "Delphine",
            email: "Chaim_McDermott@dana.io",
          },
          {
            id: 10,
            name: "Clementina DuBuque",
            username: "Moriah.Stanton",
            email: "Rey.Padberg@karina.biz",
          },
        ],
        b =
          (n(12),
          function (e) {
            return r.a.createElement(
              "div",
              {
                style: {
                  height: "600px",
                  overflowY: "scroll",
                  border: "3px black solid",
                },
              },
              e.children
            );
          }),
        p = (function (e) {
          Object(m.a)(n, e);
          var a = Object(s.a)(n);
          function n() {
            var e;
            return (
              Object(o.a)(this, n),
              ((e = a.call(this)).onSearchChange = function (a) {
                e.setState({
                  robots: d.filter(function (e) {
                    return e.name.includes(a.target.value);
                  }),
                });
              }),
              (e.state = { robots: d, searchField: "" }),
              e
            );
          }
          return (
            Object(c.a)(n, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { className: "tc" },
                    r.a.createElement(
                      "h1",
                      { className: "f1" },
                      r.a.createElement("a", { href: "#" }, "Robo Friends")
                    ),
                    r.a.createElement(h, { searchChange: this.onSearchChange }),
                    r.a.createElement(
                      b,
                      null,
                      r.a.createElement(u, { robots: this.state.robots })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(t.Component);
      n(13), n(14);
      l.a.render(r.a.createElement(p, null), document.getElementById("root"));
    },
    7: function (e, a, n) {
      e.exports = n(15);
    },
  },
  [[7, 1, 2]],
]);
//# sourceMappingURL=main.4eb8833b.chunk.js.map
