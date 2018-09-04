import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Sections from './Sections';
import Header from './Header';
import Container from './Container';
import './App.css';
//import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        position: '',
        company: '',
        startMonth: '',
        startYear: '',
        location: '',
        describe: '',
        aboutData: {},
        formData: [],
        styles: {
          show: false,
          formShow: true,
          expCardShow: false,
          iconsShow: "hide"
        }
      }
    };
    this.handleExpData = this.handleExpData.bind(this);
  }

  handleExpData(value) {
    console.log(value);
    var obj = Object.assign({}, this.state.data, {
      formData: value.formData,
      styles: {
        show: value.styles.show,
        formShow: value.styles.formShow,
        expCardShow: value.styles.expCardShow,
        iconsShow: value.styles.iconsShow
      }
    });

    this.setState({ data: obj }, function () {
      // var data = {
      //   position: "UI Developer",
      //   company: "IP",
      //   startMonth: "Jan",
      //   startYear: 2018,
      //   location: "Hyd",
      //   describe: "Hai"
      // }
      // console.log(data);
  
      // fetch("https://5b8717ce35589600143c1381.mockapi.io/api/v1/resumedata", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // }).then(function(response) {
      //   console.log(response);
      // })
    })

  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Container data={this.state.data} />
          <Route exact path="/" component={About} />
          <Route path="/sections" render={(props) => <Sections onHandleExpData={this.handleExpData} data={this.state.data} />} />
        </div>
      </Router>
    );
  }
}

export default App;













// var data = {
      //   position: "UI Developer",
      //   company: "IP",
      //   startMonth: "Jan",
      //   startYear: 2018,
      //   location: "Hyd",
      //   describe: "Hai"
      // }
      // console.log(data);
      // axios.post('https://5b8717ce35589600143c1381.mockapi.io/api/v1/resumedata', data)
      //   .then(response => {
      //     console.log('success');
      //   })
