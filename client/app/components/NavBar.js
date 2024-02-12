import './NavBar.css'
import RegLog from './RegLog'

export default function NavBar() {
    return (
        <div className="NavBarWrapper">
            <div className='content phone'>手机</div>
            <div className='content separator'>|</div>
            <div className='content pc'>电脑平板</div>
            <div className='content separator'>|</div>
            <div className='content misc'>智能周边</div>
            <div className='content separator'>|</div>
            <div className='content IoT'>生态链产品</div>
            <div className='content separator'>|</div>
            <div className='content support'>技术支持</div>
            <div className='RegLog'>
                <RegLog />
            </div>
        </div>
    )
}