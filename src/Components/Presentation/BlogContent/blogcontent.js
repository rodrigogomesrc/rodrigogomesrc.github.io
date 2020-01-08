import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'
import SideContent from '../SideContent/sidecontent'
import './blogcontent.css'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

const BlogContent = ({ data: { loading, error, post}, language }) => {

  if (error) {
      return (
          
        <div className="container">
          {
            language === "portuguese"? <h2>Algum erro ocorreu</h2> : <h2>Something went wrong</h2>
          }
        </div>
      )
  }
  if (!loading && post) {
    
    return (

        <div className="post-main">
           <Helmet>
            <meta
              name="description"
              content={post.description}
            />
            <title>{post.title}</title>
          </Helmet>
            <div id="blog-content">
                <div id="blog-content-container">
                    <article>
                        {
                          language === "portuguese"?
                          <Link to={"/blog"} className="page-link blog-back">Ir para os Posts</Link> :
                          <Link to={"/blog"} className="page-link blog-back">Go to Posts</Link>
                        }
                        <h1 className="title post-title" >{post.title}</h1>
                        <h3 className="post-description">{post.description}</h3>
                        <p className="date">{post.date}</p>
                        <div className='Post-placeholder'>
                        <img
                            className="cover-image"
                            alt={post.title}
                            src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${post.coverImage.handle}`}
                        />
                        </div>

                        <Markdown
                          source={post.content}
                          escapeHtml={true}
                        />
                    </article>
                </div>
            </div>
            <SideContent></SideContent>
        </div>
    )
  }
  else if(!loading && !post){

    return (
      <div className="container">
        {
          language === "portuguese"? 
          <h1>Ops! Parece que esse post não existe.</h1> : 
          <h1>Ops! It looks like this post doesn't exist.</h1>
        }
      </div>
    )
  }
  
  return(
      <div className="container">
        {
          language === "portuguese"? <h1>Carregando o post...</h1> : <h1>Loading post...</h1>
        }
      </div>
  )
} 

export const singlePost = gql`
query singlePost($url: String) {
    post(where: {url: $url}) {
      id
      title
      description
      url
      date
      coverImage {
        id
        handle
      }
      content
      createdAt
    }
  }
`

export default graphql(singlePost, {
  options: ({ match }) => ({
    variables: {
      url: match.params.slug
    }
  })
})(BlogContent)