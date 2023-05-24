import { Pagination } from "react-bootstrap"

const MyPagination = ({ postsPerPage, totalPosts, paginate }: {postsPerPage: any; totalPosts: any; paginate: any}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <Pagination>
            {pageNumbers.map(num => (
                <Pagination.Item key={num} onClick={() => paginate(num)} href="#">
                    {num}
                </Pagination.Item>
            ))}
        </Pagination>
    )
}

export default MyPagination