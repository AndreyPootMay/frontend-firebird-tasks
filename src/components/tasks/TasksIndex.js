import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export const TasksIndex = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/api/tasks").then((taskData) => {
            console.log(taskData.data);
            setTasks(taskData.data);
        });
    }, []);

    return (
        <div className="container mt-3">
            <Link
                to={"/add"}
                className="m-5 bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full animate__animated animate__fadeIn">
                <i className="fas fa-plus"></i> Add
            </Link>
            <div className="m-5 flex flex-col animate__animated animate__fadeIn">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Description
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Updated At
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        tasks.map((task, key) => (
                                            <tr key={key}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <i className="fas fa-clipboard-list fa-2x text-gray-500"></i>
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {task.NAME}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{task.DESCRIPTION}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={
                                                        task.DONE === true ?
                                                            `px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800`
                                                            :
                                                            `px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800`
                                                    }>
                                                        {task.DONE === true ? 'Done' : 'Pending'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {task.UPDATED_AT}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link to={`/tasks/${task.ID}`} className="text-green-600 hover:text-indigo-900">
                                                        <i className="fas fa-eye fa-1x"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
