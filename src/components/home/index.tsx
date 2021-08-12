import * as React from "react";
import { Typography, Grid } from "@material-ui/core";

import Classes from "../../classes";

export default function HomeIndex() {
    const classes = Classes();

    return (
        <div id="home">
            <Grid
                container
                justifyContent="center"
                className={classes.sectionContainer}
            >
                <Grid
                    item
                    sm={12}
                    md={10}
                    lg={8}
                    xl={6}
                    className={classes.homeContainer}
                >
                    <Typography
                        variant="h2"
                        id="home-title"
                        className={classes.homeTitle}
                    >
                        Hello World
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
