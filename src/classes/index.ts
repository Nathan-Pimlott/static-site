import { createUseStyles } from "react-jss";

const primaryColor = "#536172";

const classes = createUseStyles({
    sectionContainer: {
        padding: "100px 20px !important",
        backgroundColor: "white !important",
    },
    title: {
        fontWeight: "200 !important",
    },
    // HEADER
    headerContainer: {
        width: "100% !important",
        backgroundColor: `${primaryColor} !important`,
    },
    headerTitle: {
        color: "white",
        marginLeft: 20,
    },
    headerButtonsOuterContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
    },
    headerButtonsInnerContainer: {
        position: "absolute",
        top: 56,
        right: 0,
        left: 0,
        height: 0,
        backgroundColor: "#ededed",
        borderRadius: "0 0 5px 5px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
    },
    headerButtonsInnerContainerOpen: {
        height: "250px !important",
    },
    headerMobileButton: {
        cursor: "pointer",
        padding: "0 20px",
        color: "black",
        textTransform: "none",
        textDecoration: "none",
        margin: "20px auto",
    },
    headerButton: {
        cursor: "pointer",
        padding: "0 20px",
        color: "white",
        textTransform: "none",
    },
    //// HEADER
    // FOOTER
    footerContainer: {
        display: "flex",
        flexDirection: "row",
        padding: 20,
        backgroundColor: "white",
        textAlign: "center",
    },
    footerText: {
        margin: "auto !important",
    },
    //// FOOTER
    // HOME
    homeContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    homeTitle: {
        textAlign: "center",
        marginTop: 20,
    },
    //// HOME
});

export default classes;
