import React from 'react';
import { useTranslation } from 'react-i18next';
import './Privacy.scss';
import PrivacyEN from './PrivacyEN';
import PrivacyDE from './PrivacyDE';

const Privacy = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    return (
        <div className="p-6 max-w-screen-lg mx-auto">
            {currentLanguage === 'de' ? <PrivacyDE /> : <PrivacyEN />}
        </div>
    );
};

export default Privacy;
