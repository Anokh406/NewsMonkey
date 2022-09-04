import React, { Component } from 'react';
import dateFormat from 'dateformat';

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,dateNews}=this.props;
    return (<>
    <div className='my-3'>
    <div className="card">
          <img src={!imageUrl?"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">{dateFormat(dateNews," yyyy-mmmm-dd")}</p>
              <a href={newsUrl}rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
    </div>
    </div>
        </>
    )
  }
}

export default NewsItem