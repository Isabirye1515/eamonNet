import { Box } from "@mui/material";

export default function Section({ id, minHeight = "100vh", children, ...rest }) {
    return(
        <Box id={id} 
        {...rest}
        sx={{
        minHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        scrollMarginTop: "80px",
        fontFamily: "Times New Roman, Times, serif",
      }}
        >
            {children}
        </Box>
    )

}