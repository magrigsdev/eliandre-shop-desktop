import React from 'react';

/**
 *  @param  Banner, Bloc1, Bloc2
 *  @return
 **/

const Body = ({Banner, Bloc1, Bloc2}) => {
    return (
        <div className="flex justify-center items-center bg-white">
            <div className="grid grid-flow-row auto-rows-max">
                {/**  bloc 1 banner   ***/}
                {Banner}

                {/**  bloc 2    ***/}
                {Bloc1}

                {/**  bloc 3    ***/}
                {Bloc2}
            </div>
        </div>
    );
};

export default Body;