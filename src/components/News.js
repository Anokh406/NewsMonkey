import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spiner from './Spiner';

export class News extends Component {

constructor(){
      super();
      this.state={
        articles:[],
        loading:false,page:1
      }
}
    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=1c60dc44eea64f29986e2bc56010a54d&page=1&pageSize=5";
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles:parsedData.articles,
      totalresult:parsedData.totalResults,loading:false
    });
    }
    handlePrevios= async ()=>{
    console.log("previous");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=1c60dc44eea64f29986e2bc56010a54d&page=${this.state.page - 1 }&pageSize=5`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page:this.state.page - 1,
      articles:parsedData.articles,
      loading:false
    })
    console.log(parsedData)
  }
handleNext= async ()=>{
      console.log("Next");
      if(!(this.state.page+1 > Math.ceil( this.state.totalresult/5))){
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=1c60dc44eea64f29986e2bc56010a54d&page=${this.state.page + 1}&pageSize=5`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page:this.state.page + 1 ,
        articles:parsedData.articles,
        loading:false
       
      })
      console.log(parsedData);
    }
    }
  render() {
    return (
        <>
        <div className="container">
            <h1 className='text-center text-uppercase text-capitalize text-primary'>NewsMonkey -Top headlines</h1>
             {this.state.loading && <Spiner />}
            <div className="row">
              {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4"  key={element.url}>
                    <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url }dateNews={element.publishedAt}/>
              </div>
              })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevios}>&larr; Previous</button>
            <button  type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
            </div>
        </div>
        </>
    )
  }
}

export default News