"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "@/src/redux/store";

interface RootProviderProps {
    children: React.ReactNode;
}

function RootProviders({ children }: RootProviderProps) {
    return <Provider store={store}>{children}</Provider>;
}

export default RootProviders;
