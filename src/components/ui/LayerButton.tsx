"use client";

import React, { useState } from "react";
import { constants } from "@/src/constants/constants";
import { useDispatch } from "react-redux";
import { changeMapType } from "@/src/redux/slices/mapTypeSlice";

function LayerButton() {
    const dispatch = useDispatch();
    const [btnSelected, setBtnSelected] = useState(false);
    const setMapLayer = (params: string) => {
        dispatch(changeMapType(params));
        setBtnSelected(false);
    };

    return (
        <div className="flex flex-col gap-4">
            <button
                className="w-[150px] p-4 rounded bg-blue-900 text-white hover:bg-blue-950"
                onClick={() => setBtnSelected(!btnSelected)}>
                Layer
            </button>
            {btnSelected && (
                <div className="flex flex-col gap-2">
                    {Object.entries(constants.MAP_STYLES).map((entry) => (
                        <button
                            className="w-full p-2 rounded bg-white text-black hover:bg-blue-200"
                            key={`MapType_${entry[0]}_${entry[1]}`}
                            onClick={() => setMapLayer(entry[1])}>
                            {entry[0]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LayerButton;
