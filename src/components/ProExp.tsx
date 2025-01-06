"use client";

import React, { useState, useMemo } from "react";
import experience from "@/data/experience.json";
import styles from "./ProExp.module.css";

const ProExp = () => {
    return (
        <div>{ experience[0].what }</div>
    );
}

export default ProExp;
