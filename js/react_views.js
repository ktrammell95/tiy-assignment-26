// kt.views={};

// (function(views){

  var PageOne = React.createClass({displayName: "PageOne",
    render: function() {
      return React.createElement("div", null, "PageOne")
    }
  });

  var PageTwo = React.createClass({displayName: "PageTwo",
    render: function() {
      return React.createElement("div", null, "PageTwo")
    }
  });

  var PgView = React.createClass({displayName: "PgView",

    getView: function(show) {
      if (show === "one") {
        return React.createElement(PageOne, null)
      }
      else if (show === "two") {
        return React.createElement(PageTwo, null)
      }
    },

    render: function() {
      var showing = this.getView(this.props.show);
      return (
        React.createElement("div", null, showing)
      );
    }

  });

  $(function(){

    window.page = React.render(React.createElement(PgView, {show: "one"}), document.body);
  });
//   views.PgView = PgView;

// })(kt.views);
