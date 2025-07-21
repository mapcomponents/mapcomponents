import * as React from "react";
import { useState } from "react";
import { styled, Box, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  AppBar,
  Menu,
  Sidebar,
  useSidebarState,
} from "react-admin";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
  minHeight: "100vh",
  position: "relative",
  backgroundColor: "none",
  pointerEvents: "none",
}));

const AppFrame = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflowX: "auto",
}));

const ContentWithSidebar = styled("main")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  marginTop: "3em",
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  maxHeight: "50vh",
  position: "fixed",
  bottom: "0",
  width: "100%",
  backgroundColor: "#fafafa",
  overflow: "auto",
  pointerEvents: "all",
  boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  width: "100%",
}));

const GisLayout = ({ children, dashboard, title }) => {
  const [open] = useSidebarState();
  const [contentOpen, setContentOpen] = useState(true);

  React.useEffect(() => {
    setContentOpen(true);
  }, [children]);
  return (
    <Root>
      <AppFrame>
        <AppBar title={title} open={open} sx={{ pointerEvents: "all" }} />
        <ContentWithSidebar>
          <Sidebar sx={{ backgroundColor: "#f0f0f0", pointerEvents: "all" }}>
            <Menu hasDashboard={!!dashboard} />
          </Sidebar>
          <Content
            sx={{
              ...(contentOpen ? {} : { height: "40px", overflow: "hidden" }),
            }}
          >
            <IconButton
              onClick={() => setContentOpen((val) => !val)}
              sx={{ position: "absolute", top: 0, zIndex: 100 }}
            >
              {contentOpen ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </IconButton>
            <ContentWrapper>{children}</ContentWrapper>
          </Content>
        </ContentWithSidebar>
      </AppFrame>
    </Root>
  );
};


export default GisLayout;
