import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { selectAllState, selectQuery } from "./slices/ImagesSlice";
import { fetchAndSet } from "./slices/ImagesSlice";

export default function ButtonPrevNext() {
  const query = useSelector(selectQuery);
  const data = useSelector(selectAllState);
  const dispatch = useDispatch();

  const handleOnPrevious = () =>
    dispatch(
      fetchAndSet({
        ...query,
        page: query.page - 1,
      })
    );
  const handleOnNext = () =>
    dispatch(fetchAndSet({ ...query, page: query.page + 1 }));

  return (
    <>
      <Stack direction="row" spacing={5} style={{ padding: 15 }}>
        <Button
          disabled={data.hasPrevious}
          variant="outlined"
          onClick={handleOnPrevious}
        >
          prev
        </Button>

        <Button
          disabled={data.hasNext}
          variant="outlined"
          onClick={handleOnNext}
        >
          Next
        </Button>
      </Stack>
    </>
  );
}
