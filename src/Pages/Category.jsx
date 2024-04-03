import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Comment } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import Loader from '../Common/Loader'

const Category = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [category, setCategory] = useState([])

    const getCategory = async () => {
        const resp = await axios.get('https://restapinodejs.onrender.com/api/showallcategory')
        setCategory(resp?.data?.data)
        setIsLoading(false)
    }
    useEffect(() => {
        getCategory()
    }, [])
    console.log(category);
    return (
        <>
            {isLoading ? <Loader /> : null}
            <div className='class container'>

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
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Category Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            category?.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item._id}</td>
                                        <td>{item.category}</td>
                                        <td><Link to={`/category_details/${item._id}`}><button className='btn btn-success'>Details</button></Link></td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Category