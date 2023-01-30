import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem = (props)=>{
   
  
    let {title, description, imageUrl, newsUrl,author, date} = props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
                <img src={!imageUrl?"https://scitechdaily.com/images/Astrophysics-Space-Dark-Matter-Concept.gif":imageUrl}
                className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{title} <span className="badge rounded-pill text-bg-dark">latest</span></h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {date}</small></p>
                <a href={newsUrl} target="_blank"className="btn btn-sm btn btn-primary">Read More</a>
                </div>
            </div>
      </div>
    )
  
}

export default NewsItem