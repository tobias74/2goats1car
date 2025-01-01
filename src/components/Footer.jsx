import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-teal-600 text-white text-center py-6">
            <div className="flex justify-center items-center space-x-4">
                <FaGithub className="text-2xl" />
                <a
                    href="https://github.com/tobias74/2goats1car"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-200 transition-colors text-md font-semibold"
                >
                    https://github.com/tobias74/2goats1car
                </a>
            </div>
        </footer>
    );
};

export default Footer;
