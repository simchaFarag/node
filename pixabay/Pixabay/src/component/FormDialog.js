import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { selectData, selectQuery } from "./slices/ImagesSlice";
import { fetchAndSet } from "./slices/ImagesSlice";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const query = useSelector(selectQuery);
  const data =useSelector(selectData)

  const [valueSearch, setValueSearch] = React.useState(query.category);

  const handleOnChange = (event) => {
    setValueSearch(event.target.value);
  };

  const handleAplay = (query) => {
    dispatch(fetchAndSet({ ...query,
      category: valueSearch }))
    setOpen(false)
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button style={{margin:"15px"}} variant="contained" onClick={handleClickOpen}>
        search in fixabay
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>search</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="search in pixabay"
            type={String}
            fullWidth
            variant="standard"
            value={valueSearch}
            onChange={handleOnChange}
            disabled={data.data}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleAplay }>
            Aplay
          </Button>
          <Button variant="contained"  onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

