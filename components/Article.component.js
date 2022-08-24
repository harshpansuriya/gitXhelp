import React from 'react'

export default function Article(props) {
  const article = props.article;
  const type = props.type;
  return (
    <div>
    <div key={article.title} className="article">
      <h2>{article.title}</h2>
      <h5>{article.description}</h5>

    </div>
    <br/>
    <hr className='hr-white'/>
    </div>
  )
}
