import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Comment } from 'react-loader-spinner'
import Loader from '../Common/Loader'

const Blog = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [blog, setBlog] = useState([])
    const getBlog = async () => {
        const response = await axios.get('https://restapinodejs.onrender.com/api/allBlog')
        setBlog(response?.data?.data)
        setIsLoading(false)
    }
    useEffect(() => {
        getBlog()
    }, [])
    console.log(blog);
    return (
        <>

            {isLoading ? <Loader /> : null}
            <div class="class">
                {/* {isLoading ? <Comment
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="#fff"
                    backgroundColor="#F4442E"
                /> : null} */}
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage text_align_center">
                                <h2>Our Blogs</h2>
                                <p>There are many variations of blogs</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {
                            blog?.map((item, index) => {
                                return (
                                    <div class="col-md-4 margi_bottom">
                                        <div class="class_box text_align_center">
                                            <img src={`https://restapinodejs.onrender.com/api/blog/image/${item._id}`} alt="#" />
                                            <h3>{item.title.slice(0, 25)}...</h3>
                                            {/* <p>{item.postText.slice(0,150)}...</p> */}
                                            <div dangerouslySetInnerHTML={{ __html: item?.postText.slice(0, 150) }}></div>
                                        </div>
                                        <Link class="read_more" to={`/blog_details/${item._id}`}>Read More</Link>
                                    </div>
                                )
                            })
                        }

                        {/* <div class="col-md-4 margi_bottom">
                            <div class="class_box blue text_align_center">
                                <i><img src="images/class2.png" alt="#" /></i>
                                <h3>Skateboard</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations </p>
                            </div>
                            <a class="read_more" href="Javascript:void(0)">Read More</a>
                        </div>
                        <div class="col-md-4 margi_bottom">
                            <div class="class_box text_align_center">
                                <i><img src="images/class3.png" alt="#" /></i>
                                <h3>Skateboard</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations </p>
                            </div>
                            <a class="read_more" href="Javascript:void(0)">Read More</a>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blog