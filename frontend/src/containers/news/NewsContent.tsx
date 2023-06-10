import { Container, Button } from "react-bootstrap";
import Post from "../../components/news/Post";
import { useEffect, useState } from "react";
import MyPagination from "../../components/news/Pagination";
import { news } from "../../client/axios";
import { News, Pagination } from "../../constants/types";

export default function NewsContent() {
  const [listOfPosts, setListOfPosts] = useState<News[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPostss, setTotalPost] = useState(0);

  useEffect(() => {
    news
      .get<Pagination<News>>(`/news/post?page=${currentPage}`)
      .then((response) => {
        console.log(response.data.count);
        setListOfPosts(response.data.results);
        setTotalPost(response.data.count);
      });
  }, [currentPage]);

  const postsPerPage = 5;

  // change page
  const paginate = (pageNum: any) => setCurrentPage(pageNum);

  return (
    <Container style={{ flex: 1, marginTop: "10px", marginBottom: "20px" }}>
      {/* only currentPosts will be displayed */}
      {listOfPosts.map((item: any) => {
        return <Post key={item.id} item={item} />;
      })}
      <MyPagination
        postsPerPage={postsPerPage}
        totalPosts={totalPostss}
        paginate={paginate}
      />
    </Container>
  );
}
