import React from 'react';
import {Texts} from "../Constants/texts.js";

const Title = ({title}) => {
    return (
        <div className="flex justify-start !mb-2 ">
            {/**  bloc 1 logo and title   ***/}
            <div className="flex flex-start gap-x-6 ">
                <div className="mt-2 w-180 gap-x-2 !py-6">
                    <p className="text-base"> {title} </p>
                </div>
            </div>
        </div>
    );
};

export default Title;