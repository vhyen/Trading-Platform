import { NavBar, Footer } from '../containers/bars'
import WalletContent from '../containers/wallet/WalletContent'

export default function Profile() {
    return (
        <div>
            <NavBar/>
            <WalletContent/>
            <Footer/>
        </div>
    )
}
