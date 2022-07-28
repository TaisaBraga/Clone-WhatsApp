import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import "./ShearchBox.css";

export default function ShearchBox() {
  return (
    <div className="searchBox">
        <div>
        <SearchIcon className="searchIcon" style={{width:"14px", marginTop:"10px"}} />
        <InputBase placeholder="Pesquisar..." style={{fontSize:"14px"}} />
        <FilterListIcon className="filterIcon" style={{width:"15px", height:"15px", padding:"2px"}}/>
        </div>
        
    </div>
  );
}
