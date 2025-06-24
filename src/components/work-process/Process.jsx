import react, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { ProcessCard } from './ProcessCard';
import "./Process.css";

export const Process = () => {
    const { t, i18n } = useTranslation();
    const [ steps, setSteps ] = useState(t('process.steps', { returnObjects: true }));

    useEffect(() => {
        setSteps(
            t('process.steps', 
            { returnObjects: true })
        );
    }, [i18n.language]);

    return (
        <div className='process-container' id='scroll_process'>
            <div className='process-title'>
                <h1>{t('process.title')}</h1>
            </div>

            <div className='process-content'>
                {Object.values(steps).map(({title, speech }, index) => (
                    <ProcessCard 
                        key={index}
                        index={index}
                        title={title}
                        description={speech}
                    />
                ))}
            </div>
        </div>
    );
};