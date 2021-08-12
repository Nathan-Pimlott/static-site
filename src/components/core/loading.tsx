import React from "react";
import { CircularProgress } from "@material-ui/core";

export default function Loading() {
    return (
        <div style={{ height: "100%", display: "flex" }}>
            <CircularProgress />
        </div>
    );
}