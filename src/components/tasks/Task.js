import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export const Task = (props) => {
    const [task, setTask] = useState({});
    let id = props.match.params.id ?? 0;

    useEffect(() => {
        Axios.get(`http://localhost:4000/api/tasks/${id}`).then((taskData) => {
            console.log(taskData.data);
            setTask(taskData.data);
        });
    }, []);

    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{task.NAME}</div>
                    <p className="text-gray-700 text-base">
                        {task.DESCRIPTION}
                    </p>
                    <p className="text-gray-700 text-base">
                        Task is done: {task.DONE}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Created at: {task.CREATED_AT}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Updated at: {task.UPDATED_AT}
                    </span>
                </div>
            </div>
        </div>
    )
}
