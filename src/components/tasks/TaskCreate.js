import React from 'react';

import { useForm } from '../../hooks/useForm';


export const TaskCreate = () => {
    const [{ title }, handleInputChange, reset] = useForm({
        title: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim().length <= 1) {
            return;
        }

        const newTask = {
            id: new Date().getTime(),
            title: title,
            done: false
        };

        console.table(newTask);

        reset();
    }

    return (
        <>
            <div className="mt-5 p-8 place-items-center animate__animated animate__fadeIn">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Title:
                            </label>
                            <input
                                className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="title"
                                type="text"
                                placeholder="Task title..."
                                autoComplete="off"
                                onChange={handleInputChange}
                                value={title}
                                name="title"
                            />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Description:
                            </label>
                            <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                State
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white" id="grid-state">
                                    <option value=''>Done...</option>
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 place-items-right">
                            <button
                                className="m-5 bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <i className="fas fa-save"></i> Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
