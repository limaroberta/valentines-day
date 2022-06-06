import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "./list";
import Text from "./components/Text";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  return (
    <div style={{ backgroundColor: "#e3e3e3", height: "100%" }}>
      <ImageList
        sx={{ width: "100%", height: "auto" }}
        variant="quilted"
        cols={`${getWindowDimensions().width > 1000 ? 10 : 4} `}
        rowHeight={`${getWindowDimensions().width > 1000 ? 150 : 120} `}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Text />
    </div>
  );
}
