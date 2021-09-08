import React from 'react'

export const Footer = () => {
    const actualYear = new Date().getFullYear();

    return (
        <div className="flex items-center justify-between flex-wrap bg-teal-500 p-3 myFooter">
            <div className="flex justify-center text-white mb-1">
                <p>© {actualYear}  <span className="font-bold">AndreyPootMay - </span> All right reserved.</p>
            </div>
        </div>
    )
}
