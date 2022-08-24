import React from 'react'
import Article from './Article.component';

export default function GitArticles(props) {
    const posts = props.articles;
  return (
    <div>
      {posts.map((post) => (
            <Article article={post}/>
        ))}
    </div>
  )
}
