import { useSelector } from "react-redux";
import "./style/image.css";
import { selectData } from "./slices/ImagesSlice";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function ImagesGrid() {
  const images = useSelector(selectData);
  const [selectedItem, setSelectedItem] = React.useState();

  const handleClose = () => {
    setSelectedItem(undefined);
  };

  const handelOnImageClick = (data) => {
    setSelectedItem(data);
  };

  return (
    <>
      <div className="img_grid">
        {images.map((imgData) => (
          <div className="grid_item">
            <Image
              data={imgData}
              key={imgData.id}
              onClick={handelOnImageClick}
            />
          </div>
        ))}
      </div>
      <div>
        <Dialog open={!!selectedItem}>
          <DialogTitle>details</DialogTitle>
          <DialogContent>
            {selectedItem && (
              <div>
                <Image data={selectedItem} />
                {JSON.stringify(selectedItem.details )}
              </div>


// view :imageData.view,
// downloads:imageData.downloads, 
// likes:imageData.likes,
// comments: imageData.comments,
// collection :imageData.collection,
            )}
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}




export function Image({ onClick, data }) {
  return <img onClick={() => onClick?.(data)} src={data.url} />;
}
