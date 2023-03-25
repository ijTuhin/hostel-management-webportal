import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const heights = [
    " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    " a galley of type and scrambled it to make a type specimen book.",
    " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  scrambled it to make a type specimen book.",
    " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard to make a type specimen book.",
    " when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    " simply dummy text of the printing and typesetting industry.",
    " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    " simply dummy text of the printing",
    " simply dummy text of the printing and typesetting industry.scrambled it to make a type specimen book.",
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
}));

const MasonryLayout = () => {
  return (
    <div className="flex justify-center">
      <Box
        sx={{
          width: "75rem",
          padding: "2rem 0",
        }}
      >
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Item style={{width: '10rem', padding: "15px", backgroundColor: "white"}} key={index}>
              {height}
            </Item>
          ))}
        </Masonry>
      </Box>
    </div>
  );
};

export default MasonryLayout;
