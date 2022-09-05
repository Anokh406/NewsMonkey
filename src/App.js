import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress});
  }
  pagesize=70;
  apiKey='d3cb70a9031c4b2e87e10a22ce0ac537';
  render() {
    return (
    <>
    <BrowserRouter>
    <Navbar/>
    <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
    <Routes>
    <Route path='/'element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key={'general'}  pagesize={this.pagesize} country={'in'} category={'general'}/>} />
      <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key={'business'}  pagesize={this.pagesize} country={'in'} category={'business'}/>}/>
      <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}    key={'entertainment'} pagesize={this.pagesize} country={'in'} category={'entertainment'}/>}/>
      <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey}    key={'health'} pagesize={this.pagesize} country={'in'} category={'health'}/>}/>
      <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey}    key={'science'} pagesize={this.pagesize} country={'in'} category={'science'}/>}/>
      <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey}    key={'sports'} pagesize={this.pagesize} country={'in'} category={'sports'}/>}/>
      <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey}    key={'technology'} pagesize={this.pagesize} country={'in'} category={'technology'}/>}/>
    </Routes>
    
   
    </BrowserRouter>
   
    </>
    )
  }
}
