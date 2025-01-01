import React from 'react';
import { useTranslation } from 'react-i18next';

const ResultsSection = ({ results, progress, isRunning, lastRunParameters }) => {
    const { t } = useTranslation();

    // Calculate the total simulations based on progress
    const totalSimulations = results.completedSimulations ?? 0;

    const totalPlayedGames = results ? totalSimulations - results.hostAbortedGames : 0;
    const winRate =
        results && results.wins + results.losses > 0
            ? ((results.wins / (results.wins + results.losses)) * 100).toFixed(2)
            : '---';

    return (
        <>
            <section className="mt-4 max-w-screen-lg mx-auto bg-gray-100 p-4 rounded">
                <ul className="space-y-2">
                    <li>
                        <strong>{t('totalSimulations')}:</strong> {totalSimulations}
                    </li>
                    <li>
                        <strong>{t('abortedGames')}:</strong> {results ? results.hostAbortedGames : '---'}{' '}
                        <span className="text-sm text-gray-600">({t('abortedGamesDescription')})</span>
                    </li>
                    <li className="pt-4">
                        <strong>{t('gamesFinished')}:</strong> {results ? totalPlayedGames : '---'}{' '}
                        <span className="text-sm text-gray-600">({t('gamesFinishedDescription')})</span>
                    </li>
                    <li>
                        <strong>{t('wins')}:</strong> {results ? results.wins : '---'}{' '}
                        <span className="text-sm text-gray-600">({t('winsDescription')})</span>
                    </li>
                    <li>
                        <strong>{t('losses')}:</strong> {results ? results.losses : '---'}{' '}
                        <span className="text-sm text-gray-600">({t('lossesDescription')})</span>
                    </li>
                    <li>
                        <strong>{t('winRate')}:</strong> {winRate}{' '}
                        <span className="text-sm text-gray-600">({t('winRateDescription')})</span>
                    </li>
                </ul>


            </section>

            {
                lastRunParameters && (
                    <p className="mt-5 text-gray-700 text-xs flex justify-center mr-4 ml-4">
                        (
                        {t('lastRun')}: {t('numberOfDoors')}: {lastRunParameters.doors}, {t('playerBehavior')}:{' '}
                        {t(lastRunParameters.playerBehavior)}, {t('hostKnowledge')}: {t(lastRunParameters.hostKnowledge)},{' '}
                        {t('numberOfSimulations')}: {lastRunParameters.simulations}
                        )
                    </p>
                )
            }
        </>
    );
};

export default ResultsSection;
