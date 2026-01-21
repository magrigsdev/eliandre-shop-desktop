import React from 'react';

const Image = ({src=null,
                   alt=null,
                   width='100',
                   height='100',
                   BoxWidth='200'}) => {
    return (
        <div className={`flex flex-col  rounded-2xl border-gray-300 w-${BoxWidth}  border-1 !p-10`}>
            <div className="flex justify-center !mb-2">
                <img
                    src={src}
                    alt={alt}
                    className={`img w-${width} h-${height}`}/>
            </div>
        </div>
    );
};

export default Image;