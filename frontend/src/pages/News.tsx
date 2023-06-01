import { NavBar, Footer } from '../containers/bars'
import NewsContent from '../containers/news/NewsContent'

export default function News() {
    return (
        <div className="vh-100" style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <NavBar/>
            <NewsContent/>
            <Footer/>
        </div>
    )
}