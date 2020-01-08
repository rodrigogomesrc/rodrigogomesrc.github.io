import React from 'react';
import './blog.css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PostCard from '../../Presentation/PostCard/postcard';
import Helmet from 'react-helmet';

const POSTS_PER_PAGE = 24

const languagePost = (language, postLanguage) => {

  let modifiedLanguage;

  if(postLanguage === "English"){

    modifiedLanguage = "english";

  } else {

    modifiedLanguage = "portuguese"
  }

  if(modifiedLanguage === language){

    return true
  }
  return false
} 

const Blog = ({ data: { loading, error, posts, postsConnection, networkStatus }, loadMorePosts, language }) => {

    if (error) {
      
        return(

          <div className="container">
            {
              language === "portuguese"? <h2>Algum erro ocorreu</h2> :  <h2>Something went wrong</h2>
            }
          </div>
        )
    }
    if (posts && postsConnection) {
      const areMorePosts = posts.length < postsConnection.aggregate.count
      return (
        <div id="blog-page">
          <Helmet>
            <meta
              name="description"
              content="Artigos sobre programação e outras coisas que me vierem à mente"
            />
            <title>Rodrigo Rocha Blog</title>
          </Helmet>
          <div className="container">
            <section>
              <div id="blog-page">
                <div id="blog-presentation">
                    <div id="blog-presentation-text">
                      <h1 id="bp-title">Rodrigo Rocha Blog</h1>
                      {
                        language === "portuguese"? 
                        <h3 id="bp-subtitle">Artigos sobre programação e outras coisas que me vierem à mente</h3>:
                        <h3 id="bp-subtitle">Articles about programming and other things that comes to my mind.</h3>
                      }
                    </div>
                </div>
                <div className="postcards">
                  {   
                      posts.filter(post => languagePost(language, post.language)).map((post, id) => (
                        <PostCard post={post} key={id}></PostCard>
                      ))
                  }
                </div>
                <div className='Home-showMoreWrapper'>
                    {areMorePosts
                    ? <button className='Home-button' disabled={loading} onClick={() => loadMorePosts()}>
                        {loading ? 'Loading...' : 'Show More Posts'}
                    </button>
                    : ''}
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    }       
    return(
        <div className="container">
          {
            language === "portuguese"?  <h2>Carregando posts...</h2> :  <h2>Loading posts...</h2>
          }
        </div>
    )
  }
  
  export const posts = gql`
  query posts($first: Int!, $skip: Int!) {
    posts (orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      url
      date
      description
      createdAt
      language
      content
      coverImage{
        id
        handle
      }
    }
    postsConnection {
        aggregate {
          count
        }
    }
  }
`; 
  
  export const postsQueryVars = {
    skip: 0,
    first: POSTS_PER_PAGE
  }
  
  export default graphql(posts, {
    options: {
      variables: postsQueryVars,
      notifyOnNetworkStatusChange: true
    },
    props: ({ data }) => ({
      data,
      loadMorePosts: () => {
        return data.fetchMore({
          variables: {
            skip: data.posts.length
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult
            }
            return Object.assign({}, previousResult, {
              // Append the new posts results to the old one
              posts: [...previousResult.posts, ...fetchMoreResult.posts]
            })
          }
        })
      }
    })
  })(Blog)