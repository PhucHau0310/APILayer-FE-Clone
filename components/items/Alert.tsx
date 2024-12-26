import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faCircleInfo,
    faCircleXmark,
    faTriangleExclamation,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

interface AlertInterface {
    alert: {
        message: string | null;
        type: 'success' | 'error' | 'warning' | 'info';
        visible: boolean;
    };
    onClose?: () => void;
}

const alertTypes = {
    success: {
        icon: faCircleCheck,
        className: 'bg-green-50 text-green-800 border-green-200',
    },
    error: {
        icon: faCircleXmark,
        className: 'bg-red-50 text-red-800 border-red-200',
    },
    warning: {
        icon: faTriangleExclamation,
        className: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    },
    info: {
        icon: faCircleInfo,
        className: 'bg-blue-50 text-blue-800 border-blue-200',
    },
};

const Alert: React.FC<AlertInterface> = ({ alert, onClose }) => {
    if (!alert || !alert.visible) return null;
    const alertType = alertTypes[alert.type] || alertTypes.info;

    return (
        <div
            className={`fixed z-[200] top-5 right-2 px-5 py-4 rounded-md shadow-lg flex items-center justify-between w-72 transition-transform duration-500 border ${
                alertType.className
            } ${alert.visible ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="flex items-center">
                <FontAwesomeIcon
                    icon={alertType.icon}
                    className="mr-3 text-2xl"
                />
                <span>{alert.message}</span>
            </div>
            <button
                className="text-gray-800 hover:text-gray-600 text-2xl leading-none"
                onClick={onClose}
            >
                &times;
            </button>
        </div>
    );
};

export default Alert;
