import React, { Component } from "react";
import SearchBar from "./SearcBar/SearchBar";
import "./app.css";
import axios from "axios";
import ImageList from "./Image/ImageList";

class App extends Component
{
  state=
  {
    images:[]
  };



  onSearchImage =  async(search) =>
  {
    console.log('App:' +search)
    const result = await axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query :search
      },
      headers:
      {
        Authorization : 'Client-ID wI2lfNxla2l-3RUBC_no2x1B84mJ2v9UoSPJi7FpewM'
      }
    })
    //console.log(result.data.results);
    this.setState({
      images:result.data.results
    });
  }
  render()
  {
    return(
      <div className="app-container" >
        <SearchBar onSearchImage={this.onSearchImage}/>
        <ImageList images={this.state.images} />
      </div>
    )
  }
  
  
};

export default App;
