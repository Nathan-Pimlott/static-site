import React from "react";
import { Typography } from "@material-ui/core";

import Classes from "../../classes";

export default function Footer() {
    const classes = Classes();
    return (
        <div className={classes.footerContainer}>
            <Typography className={classes.footerText}>
                This is the footer.
            </Typography>
        </div>
    );
}
