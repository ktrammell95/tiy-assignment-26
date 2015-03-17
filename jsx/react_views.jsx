kt.views={};

(function(views){

  var PageOne = React.createClass({
    render: function() {
      return <div>PageOne</div>
    }
  });

  var PageTwo = React.createClass({
    render: function() {
      return <div>PageTwo</div>
    }
  });

  var PgView = React.createClass({

    getView: function(show) {
      if (show === "one") {
        return <PageOne/>
      }
      else if (show === "two") {
        return <PageTwo/>
      }
    },

    onNav: function(show){
      this.props.onShow(show);
    },

    render: function() {
      var showing = this.getView(this.props.show);
      return (
        <div>
          <div>
            <button onClick={this.onNav.bind(this,"one")}>Page One</button>
            <button onClick={this.onNav.bind(this,"two")}>Page Two</button>
          </div>
          <div>{showing}</div>
        </div>
      );
    }

  });

  // $(function(){

  //   window.page = React.render(<PgView show ="one"/>, document.body);
  // });
  views.PgView = PgView;

})(kt.views);
