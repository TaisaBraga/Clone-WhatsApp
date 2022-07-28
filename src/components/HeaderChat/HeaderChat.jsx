import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HeaderPhoto from "../../images/meredith.jpg"
import './HeaderChat.css'

export default function HeaderChat(){
    return(
        <div className="headerChat">
            <img src={HeaderPhoto} alt="" className='PersonImage'/>
            <div className='Icons'>
            <ChatIcon />
            <MoreVertIcon className='VertIcon'/>
            </div>
        </div>
    )
}