import React, { Component } from 'react';
import CloudinaryImage from "./components/CloudinaryImage";

class App extends Component {
  state = {
    isLoaded: false
  }

  componentDidMount(){
    setTimeout(() => {this.setState({isLoaded: true})}, 2000)
  }

  render() {
    return (
      <div>
        <CloudinaryImage
          isLoaded={this.state.isLoaded}
          cloudName="luxuryp"
          imageId="work-24_1_tu4ujr"
          width="200"
          height="300"
          position="left"
        />
        <CloudinaryImage
          isLoaded={this.state.isLoaded}
          cloudName="luxuryp"
          imageId="work-24_1_tu4ujr"
          width="200"
          height="300"
          position="center"
        />
        <CloudinaryImage
          isLoaded={this.state.isLoaded}
          cloudName="luxuryp"
          imageId="work-24_1_tu4ujr"
          width="200"
          height="300"
          position="right"
        />
      </div>
    );
  }
}

export default App;
