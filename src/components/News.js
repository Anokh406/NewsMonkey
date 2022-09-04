import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spiner from './Spiner';
import PropTypes from 'prop-types';

export class News extends Component {
 
  static defaultProps = {
    country: 'in',
    pageSize: 15, 
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }
  capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
constructor(props){
      super(props);
      this.state={
        articles:[],
        loading:false,page:1
      }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
}

async updateNews(){
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce0be445cd34400c81881d0c20e988ee&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles:parsedData.articles,
      totalresult:parsedData.totalResults,loading:false
    });
}
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce0be445cd34400c81881d0c20e988ee&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles:parsedData.articles,
      totalresult:parsedData.totalResults,loading:false
    });}
    handlePrevios= async ()=>{
    // console.log("previous");
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce0be445cd34400c81881d0c20e988ee&page=${this.state.page - 1 }&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page:this.state.page - 1,
    //   articles:parsedData.articles,
    //   loading:false
    // })
    // console.log(parsedData)
    this.setState({page:this.state.page-1});
    this.updateNews();
  }
  handleNext= async ()=>{
            //   console.log("Next");
            //   if(!(this.state.page+1 > Math.ceil( this.state.totalresult/5))){
            //   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ce0be445cd34400c81881d0c20e988ee&page=${this.state.page + 1}&pageSize=5`;
            //   this.setState({loading:true})
            //   let data = await fetch(url);
            //   let parsedData = await data.json();
            //   this.setState({
            //     page:this.state.page + 1 ,
            //     articles:parsedData.articles,
            //     loading:false
              
            //   })
            //   console.log(parsedData);
            // }
              this.setState({page:this.state.page+1});
              this.updateNews();
   
  }
  render() {
    return (
        <>
        <div className="container">
            <h1 className='text-center text-uppercase text-capitalize text-primary'>NewsMonkey -Top headlines From {this.capitalizeFirstLetter(this.props.category)}</h1>
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