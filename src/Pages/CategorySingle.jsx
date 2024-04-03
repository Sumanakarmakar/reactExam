import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Comment } from 'react-loader-spinner'

const CategorySingle = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [catDetail, setCatDetail] = useState([])
    const { id } = useParams()

    const getCatDetail = async () => {
        const res = await axios.get(`https://restapinodejs.onrender.com/api/category/post/${id}`)
        setCatDetail(res?.data?.data)
        setIsLoading(false)
    }
    useEffect(() => {
        getCatDetail()
    }, [])
    console.log(catDetail);

    return (
        <>

            <div className='class container'>
                {isLoading ? <Comment
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="#fff"
                    backgroundColor="#F4442E"
                /> : null}
                <div class="row">
                    {
                        catDetail?.map((item, index) => {
                            return (
                                <div class="col-md-6 margi_bottom">
                                    <div class="class_box text_align_center">
                                        <img src={`https://restapinodejs.onrender.com/api/blog/image/${item._id}`} alt="#" />
                                        <h3>{item.title}</h3>
                                        <div dangerouslySetInnerHTML={{ __html: item?.postText }}></div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default CategorySingle