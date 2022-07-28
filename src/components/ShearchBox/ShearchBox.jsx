import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import "./ShearchBox.css";

export default function ShearchBox() {
  return (
    <div className="searchBox">
        <div>
        <SearchIcon className="searchIcon" />
        <InputBase placeholder="Search…" />
        <FilterListIcon className="filterIcon"/>
        </div>
        
    </div>
  );
}
