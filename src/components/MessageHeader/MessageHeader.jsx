import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import "./MessageHeader.css"

export default function MessageHeader() {
  return (
    <div className="MessageHeader">
      <h3>MessageHeader</h3>
      <div className="Icons">
        <AttachFileIcon style={{width:"18px"}} className="attachIcon"/>
        <MoreVertIcon style={{width:"18px"}}/>
      </div>
    </div>
  );
}
