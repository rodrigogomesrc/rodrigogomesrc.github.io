import React, { Component } from 'react';
import BlogContent from '../../Presentation/BlogContent/blogcontent';
import SideContent from '../../Presentation/SideContent/sidecontent';
import './blog.css';

export class Blog extends Component {
    render() {
        return (
            <div className="blog-main">
                <BlogContent language={this.props.language}></BlogContent>
                <SideContent language={this.props.language}></SideContent>
            </div>
        )
    }
}

export default Blog
