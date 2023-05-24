import { NavBar, Footer } from '../containers/bars'
import NewsContent from '../containers/news/NewsContent'

export default function News() {
    return (
        <div>
            <NavBar/>
            <NewsContent/>
            <Footer/>
        </div>
    )
}