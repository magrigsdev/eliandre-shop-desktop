import React from 'react';

export const  Message = ({ type = 'information', message= null}) => {

    return (
        <div className={ getColors(type)} role="alert">
            <div className="flex">
                    <div>
                        <p className="font-bold">MESSAGE</p>
                        <p className="text-sm">{message}</p>
                    </div>
                </div>
            </div>
            );}

const colorMap = {
    danger: 'bg-red-100 border-t-4 border-red-500 rounded-b text-red-600',
    success: 'bg-green-100 border-t-4 border-green-500 rounded-b text-green-600',
    warning: 'bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-600',
    information: 'bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-600',
};


const getColors = (type) => {
    if(type === 'danger'){
        return colorMap.danger
    }
    else if(type === 'success'){
        return colorMap.success
    }
    else if(type === 'warning'){
        return colorMap.warning
    }
    else if(type === 'information'){
        return colorMap.information
    }

}

