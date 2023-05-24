import { Container } from "react-bootstrap";
import Post from "./Post";
import { useState } from "react";
import MyPagination from "./Pagination";

export default function NewsMain() {
    const listOfPosts = [
        {
            id: "1",
            title: 'BẠCH DƯƠNG: GINNY WEASLEY',
            content: 'Trong bộ truyện Harry Potter, Ginny Weasley (em gái cậu bạn thân của Harry Potter – Ron Weasley) là cô gái có tính cách khá mạnh mẽ, cứng cỏi và có lòng thương người. Cô là một trong những người giống Harry Potter: dũng cảm, gan dạ và dám gọi thẳng tên của chúa tể hắc ám Voldemort không hề sợ hãi. Tính cách nhân vật này tương tự với các tính cách điển hình của Bạch Dương. Nàng nhiệt tình, cởi mở, độc lập và có xu hướng tự khẳng định mình, đặc biệt khi đối diện với thách thức trong cuộc sống.'
        },
        {
            id: "2",
            title: 'KIM NGƯU: RON WEASLEY',
            content: 'Nhân vật Ron Weasley là bạn thân của Harry Potter, một thành viên của bộ ba nhân vật chính trong bộ truyện này. Ron là người luôn an ủi, sát cánh bên cạnh những lúc Harry Potter gặp khó khăn biến cố. Trung thành, đáng tin cậy và sâu sắc, Ron chính là một hình mẫu điển hình về một người bạn tuyệt vời. Bên cạnh đó, cũng như cung hoàng đạo Kim Ngưu, Ron Weasley là người khá cứng đầu và kiên định với những thứ mình tin tưởng.'
        },
        {
            id: "3",
            title: 'SONG TỬ: DRACO MALFOY',
            content: 'Giống như cặp song sinh Song Tử, nhân vật Draco Malfoy sở hữu 2 mặt tính cách trong một con người. Là một phù thủy thuần chủng lớn lên trong gia đình phù thủy danh giá, Malfoy luôn tự hào về đia vị dòng dõi cao quý của mình. Tính cách của Malfoy khá kiêu ngạo và có chút xảo quyệt. Vì thế, cậu sẵn sàng buông lời miệt thị những ai cậu cho rằng có địa vị thấp kém hơn mình. Dù vậy, trong suốt bộ truyện, chúng ta có thể thấy được một mặt yếu đuối và ân hận khi nhân vật này khóc trong nhà vệ sinh nam với nhân vật ma Myrtle vì cảm thấy không thể hoàn thành nổi nhiệm vụ Voldemort giao cho (giết Albus Dumbledore).'
        },
        {
            id: "4",
            title: 'CỰ GIẢI: RUBEUS HAGRID',
            content: 'Rubeus Hagrid là nhân vật phù thủy mang một nửa dòng dõi người khổng lồ. Ông rất yêu động vật và sinh vật huyền bí, đặc biệt là những sinh vật không bình thường và nguy hiểm như nhền nhện khổng lồ… Giống như biểu tượng con cua của Cự Giải, nhân vật này có bề ngoài to lớn, cứng rắn nhưng tâm hồn bên trong lại rất yếu mềm. Với trái tim ấm áp, tràn đầy lòng yêu thương cùng lòng trung thành, Rubeus Hagrid dễ dàng đồng cảm với quá khứ đau buồn và khó khăn của những sinh vật có vẻ ngoài thô ráp, kỳ lạ và dám đấu tranh đến cùng để bảo vệ người ông yêu thương.'
        },
        {
            id: "5",
            title: 'SƯ TỬ: HARRY POTTER',
            content: 'Dũng cảm, kiên cường, bền bỉ, không bao giờ nao núng thậm chí khá liều lĩnh là tính cách nổi bật của nhân vật chính Harry Potter. Giống với cung hoàng đạo Sư Tử, nhân vật này sở hữu khả năng lãnh đạo bẩm sinh. Harry khiến những người xung quanh mong đợi được cậu dẫn dắt. Mặt khác, có vẻ mọi rắc rối đều tìm đến cậu. Thế nhưng với sự thông minh, nhạy bén, khả năng làm chủ tâm trí tốt và ra quyết định đúng đắn, Harry Potter có thể giúp bản thân thoát khỏi hầu hết những tình huống khó khăn và nan giải.'
        },
        {
            id: "6",
            title: 'XỬ NỮ: HERMIONE GRANGER',
            content: 'Hermione là “mẩu” cuối cùng của bộ ba nhân vật chính trong Harry Potter. Cô nàng nổi bật bởi sự thông minh, giỏi giang và tư duy logic của một cô nàng cung hoàng đạo Xử Nữ điển hình. Hermione luôn hướng tới sự hoàn hảo. Vì thế, cô nàng luôn cầu toàn với mọi thứ. Khả năng tổ chức tốt và xu hướng quan tâm đến các chi tiết và dấu hiệu dù là nhỏ nhất, Hermione cùng Ron Weasley đã giúp đỡ Harry Potter vượt qua hàng loạt những tình huống nguy hiểm trong thế giới phép thuật.'
        },
        {
            id: "7",
            title: 'THIÊN BÌNH: REMUS LUPIN',
            content: 'Sinh ra với sứ mệnh mang lại công lý cho thế giới, cung hoàng đạo Thiên Bình luôn đề cao sự thật và tìm kiếm sự hài hòa trong cuộc sống. Giống như nhân vật Remus Lupin, giáo sư bộ môn Phòng Chống Nghệ Thuật Hắc Ám của Harry vào năm học thứ ba, người đã giúp đỡ Harry thoát khỏi sự tấn công của những giám ngục nhà tù Azkaban trên chuyến tàu tốc hành Hogwarts và là thành viên Hội Phượng Hoàng, bạn luôn hướng tới điều công bằng và những giá trị tốt đẹp. Bên cạnh đó, cũng như thầy Remus với mái tóc chớm bạc, bạn là người hay lo lắng và suy nghĩ nhiều.'
        },
        {
            id: "8",
            title: 'BỌ CẠP: BELLATRIX LESTRANGE',
            content: 'Bọ Cạp nổi tiếng với tính cách lạnh lùng, đa nghi và linh hoạt. Tính cách này chính là điểm nổi bật của nhân vật phản diện Bellatrix Lestrange. Bên cạnh đó, sự nhiệt huyết, mạnh mẽ, trung thành và cuồng nhiệt khi cần, cung hoàng đạo tỏa ra khí chất đặc biệt này khiến những người xung quanh phải nể sợ. Trong truyện, Tử Thần Thực Tử Bellatrix Lestrange là một tay sai đắc lực và cực kỳ trung thành của chúa tể hắc ám Voldemort.'
        },
        {
            id: "9",
            title: 'NHÂN MÃ: SIRIUS BLACK',
            content: 'Nhân Mã luôn là tâm điểm của mọi cuộc vui bởi tính cách vui vẻ, hoạt bát của mình. Luôn tràn ngập tình yêu đối với cuộc sống, bạn có thể lạc quan dù trong giai đoạn đen tối, tồi tệ nhất. Giống như nhân vật Sirius Black, tinh thần đó giúp ông không rơi vào cảm giác suy sụp khi bị canh giữ bởi những giám ngục Azkaban trong thời gian dài.'
        },
        {
            id: "10",
            title: 'MA KẾT: SEVERUS SNAPE',
            content: 'Ma Kết là cung hoàng đạo có tính cách điềm đạm, tự tin, ít nói, khô khan, khá nghiêm túc. Các tính cách nổi bật này có sự tương đồng với nhân vật giáo sư bộ môn Độc Dược của Harry Potter, Severus Snape. Xuyên suốt bộ truyện, nhân vật này gây ấn tượng với hình ảnh một thầy giáo nghiêm khắc, lạnh lùng, thiên vị, thậm chí hơi cay nghiệt. Thế nhưng bên cạnh tính cách có phần khó gần, không thể phủ nhận ông là một người tài năng và có khả năng làm việc độc lập cực kỳ tốt. Ngay từ khi còn đi học, ông đã tự tìm tòi, mày mò những phong cách pha chế mới và ghi chú các bước làm nhanh, hiệu quả vào sách giáo khoa. Chi tiết này được thể hiện trong phần sáu của bộ truyện: Harry Potter và Hoàng Tử Lai.'
        },
        {
            id: "11",
            title: 'BẢO BÌNH: ALBUS DUMBLEDORE',
            content: 'Albus Dumbledore là thầy hiệu trưởng nhân từ và quyền lực nhất trường pháp thuật Hogwarts, nơi Harry Potter theo học. Ông có tri thức uyên thâm, tư tưởng hiện đại và luôn bình tĩnh lạ thường hầu hết mọi tình huống. Tính cách cung hoàng đạo Bảo Bình cũng tương tự như thế. Nàng khá nhanh nhẹn trong việc giải quyết vấn đề và có năng khiếu chỉ huy những người xung quanh. Bên cạnh đó, lòng nhân đạo có sẵn là lý do mà Bảo Bình luôn hành động để tạo ra các giá trị tốt đẹp trong cuộc sống.'
        },
        {
            id: "12",
            title: 'SONG NGƯ: LUNA LOVEGOOD',
            content: 'Luna Lovegood, bạn của Harry Potter là một cô nàng luôn tự tin vào chính mình. Trong truyện, cô nàng thuộc nhà Ravenclaw nổi bật giữa đám đông với đôi hoa tai hình củ cải màu cam và sợi dây chuyền làm từ các nút chai bia bơ. Nàng cho rằng mình không cần a dua theo người khác, không cần giống hệt mọi người, không cần phải chăm chăm xem người ta nghĩ gì về mình. Ở Luna luôn bộc lộ trí tưởng tượng và tư duy cực kỳ phong phú, hệt như các cô nàng Song Ngư. Bên cạnh đó, đối với những người người bạn thật sự, cô nàng luôn rất trân trọng và trung thành.'
        }
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 5
    
    // get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = listOfPosts.slice(indexOfFirstPost, indexOfLastPost)
    
    // change page
    const paginate = (pageNum: any) => setCurrentPage(pageNum)

    return (
        <Container style={{marginTop: '10px', marginBottom: '20px'}}>
            {/* only currentPosts will be displayed */}
            {currentPosts.map((item: any) => {
                return (
                    <Post key={item.id} item={item} />
                );
            })}
            <MyPagination 
                postsPerPage={postsPerPage} 
                totalPosts={listOfPosts.length}
                paginate={paginate}
            />
        </Container>        
    )
}
