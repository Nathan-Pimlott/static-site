import * as React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    useScrollTrigger,
    Hidden,
    IconButton,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import classnames from "classnames";

import Classes from "../../classes";

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function Header() {
    const [state, setState] = React.useState({
        showMenu: false,
    });
    const classes = Classes();
    return (
        <div className={classes.headerContainer}>
            <ElevationScroll>
                <AppBar position="static">
                    <Toolbar>
                        {/* Hamburger on mobile */}
                        <Hidden smUp implementation="css">
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={() =>
                                    setState({
                                        ...state,
                                        showMenu: !state.showMenu,
                                    })
                                }
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography
                            variant="h6"
                            className={classes.headerTitle}
                        >
                            Title
                        </Typography>

                        <div className={classes.headerButtonsOuterContainer}>
                            {/* Menu for mobile */}
                            <Hidden smUp implementation="css">
                                <div
                                    className={classnames(
                                        "accordion",
                                        state.showMenu
                                            ? classes.headerButtonsInnerContainerOpen
                                            : classes.headerButtonsInnerContainer
                                    )}
                                >
                                    <a
                                        className={classes.headerMobileButton}
                                        href="#home"
                                        onClick={() =>
                                            setState({
                                                ...state,
                                                showMenu: false,
                                            })
                                        }
                                    >
                                        Home
                                    </a>
                                </div>
                            </Hidden>
                            {/* Menu for desktop */}
                            <Hidden xsDown implementation="css">
                                <Button
                                    className={classes.headerButton}
                                    href="#home"
                                >
                                    Home
                                </Button>
                            </Hidden>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </div>
    );
}
