import React, { Component } from 'react'
import './postcard.css'
import { Link } from 'react-router-dom';

export class PostCard extends Component {
    render() {
        return (
            <div className="post-card-holder">
                <Link to={`/post/${this.props.post.url}`} className="postcard-link">
                    <div className="postcard-main">
                        <div className="postcard-image-holder">
                            <img
                                alt={this.props.post.title}
                                className='postcard-img'
                                src={`https://media.graphcms.com/resize=w:225,h:225,fit:crop/${this.props.post.coverImage.handle}`}
                            />
                        </div>
                        <div className="postcard-content">
                            <h3 className="title postcard-title">{this.props.post.title}</h3>
                            <p className="postcard-description">{this.props.post.description}</p>
                            <p className="postcard-date">{this.props.post.date}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default PostCard
