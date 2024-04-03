import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Comment } from 'react-loader-spinner'
import Loader from '../Common/Loader'

const BlogDetails = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [blogDetail, setBlogDetail] = useState([])
    const { id } = useParams()

    const getBlogDetail = async () => {
        const resp = await axios.get(`https://restapinodejs.onrender.com/api/blogdetails/${id}`)
        setBlogDetail(resp?.data?.data)
        setIsLoading(false)
    }
    useEffect(() => {
        getBlogDetail()
    }, [])
    console.log(blogDetail);

    return (
        <>

            {isLoading ? <Loader /> : null}

            <div className='class container-fluid'>
                <div class="col-10 margi_bottom mx-auto">
                    <div class="class_box blue text_align_center">
                        <img src={`https://restapinodejs.onrender.com/api/blog/image/${blogDetail?._id}`} alt="#" />
                        <h3>{blogDetail?.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: blogDetail?.postText }}></div>
                        <h3 className='mt-3'>Created at: {blogDetail?.createdAt}</h3>
                        <h3>Updated at: {blogDetail?.updatedAt}</h3>
                    </div>
                </div>

                {/* <h2>{blogDetail?.title}</h2>
                <img src={`https://restapinodejs.onrender.com/api/blog/image/${blogDetail._id}`} alt="" />
                <h4>{blogDetail?.postText}</h4>
                <h4><u>Description</u></h4>
                <h4 dangerouslySetInnerHTML={{ __html: blogDetail?.postText }}></h4> */}
                
            </div>


        </>
    )
}

export default BlogDetails