import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./SearchBar.css";

const SearchBar: FunctionComponent = () => {
  return (
    <TextField
      className="search-bar"
      placeholder="Search"
      variant="outlined"
      InputProps={{
        endAdornment: <img width="45px" height="45px" src="/search-alt.svg" />,
      }}
      sx={{
        "& fieldset": { border: "none" },
        "& .MuiInputBase-root": {
          height: "50px",
          backgroundColor: "rgba(0, 44, 60, 0.9)",
          paddingRight: "27px",
          borderRadius: "20px",
          fontSize: "20px",
        },
        "& .MuiInputBase-input": { color: "#fff" },
        width: "626px",
      }}
    />
  );
};

export default SearchBar;
