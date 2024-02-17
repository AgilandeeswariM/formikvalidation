import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { setLoading, setBook } from '../reducer/BookSlice'
import Loading from './Loading'

const ViewBook = () => {
    const params = useParams()
    const { books, loading } = useSelector((state) => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        const getData = async () => {
            try {
                dispatch(setLoading())
                const employee = await axios.get(`https://65615e6adcd355c08323c948.mockapi.io/users/${params.id}`)
                dispatch(setBook(employee.data))
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    return (
        <div className='container min-vh-100 p-0'>
            <div className="row justify-content-center align-content-center mt-5">
                <div className="  col-sm-12">
                    <div className="card text-center shadow">
                        <div className="card-header h3">
                            Book Details
                        </div>
                        <div className="card-body d-flex justify-content-center">
                            {loading ? (

                                <Loading />
                            ) : (
                                <div className="table-responsive mx-lg-5">
                                    <table className="table table-bordered table-striped">
                                        <tbody>
                                            <tr>
                                                <td className="text-end">Tile of The Book</td>
                                                <td className="">{books.title}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-end">Name of Author</td>
                                                <td>{books.author?.name}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-end">Language</td>
                                                <td className="">{books.language}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-end">ISBN </td>
                                                <td>{books.isbn}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-end">Date of Published</td>
                                                <td>{books.dop}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-end">Date of Birth</td>
                                                <td>{books.author?.dob}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-end">Author bio-graphy</td>
                                                <td>{books.author?.bio}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>)}

                        </div>
                        <div className="card-footer text-body-secondary">
                            <div className='text-center'>
                                <Link to={'/'} className='btn btn-primary px-lg-5'>Back to Table</Link>
                            </div>
                        </div>
                    </div></div></div>
        </div>
    )
}

export default ViewBook