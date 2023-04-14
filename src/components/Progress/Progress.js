import React from 'react';

const Index = (props) => {

    const setProgressProps = (color, status, icon) => {
        if (!props.status) {
            return
        }
        // for when status is there.
    }
    return (
        <div className={"wg_progress flex items-center "}>
            <div className="wg_progress_outer bg-gray-300 w-full h-4 mr-3 rounded-l-lg">
                <div className="bg-black h-full rounded-lg" style={{width: `${props.percent}%`}}>

                </div>
            </div>
            {
                props.showInfo !== false ?
                    (<span className="wg_progress_text " title={props.percent}>
                         {props.percent}%
                    </span>) : ''
            }
        </div>
    );
};

export default Index;
