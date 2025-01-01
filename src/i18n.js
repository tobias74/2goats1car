import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            introText: 'The "Monty Hall problem" is a probability puzzle based on the American television game show "Let\'s Make a Deal" and its original host, Monty Hall. This project simulates the mathematical scenario inspired by the game.',
            numberOfDoors: 'Number of Doors',
            playerBehavior: 'Player Behavior',
            switchDoors: 'Switch Doors',
            stay: 'Stay',
            hostKnowledge: 'Host Knowledge',
            hostKnows: 'Host Knows',
            hostDoesNotKnow: 'Host Does Not Know',
            numberOfSimulations: 'Number of Simulations',
            runSimulation: 'Run Simulation',
            totalSimulations: 'Total Simulations',
            abortedGames: 'Aborted Games',
            abortedGamesDescription: 'Games where the host accidentally revealed the car',
            gamesFinished: 'Games finished',
            gamesFinishedDescription: 'Games that were actually played to the point where the player made their choice',
            wins: 'Wins',
            winsDescription: 'Number of games won',
            losses: 'Losses',
            lossesDescription: 'Number of games lost',
            winRate: 'Win Rate',
            winRateDescription: 'Percentage of games won',
            imprint: 'Imprint',
            privacy: 'Privacy Policy',
        },
    },
    de: {
        translation: {
            introText: 'Das "Monty Hall-Problem" ist ein Wahrscheinlichkeitsrätsel, das auf der amerikanischen Fernsehshow "Let\'s Make a Deal" und ihrem ursprünglichen Moderator Monty Hall basiert. Dieses Projekt simuliert das mathematische Szenario, das von dem Spiel inspiriert wurde.',
            numberOfDoors: 'Anzahl der Türen',
            playerBehavior: 'Spielerverhalten',
            switchDoors: 'Wechseln',
            stay: 'Bleiben',
            hostKnowledge: 'Wissen des Gastgebers',
            hostKnows: 'Gastgeber weiß Bescheid',
            hostDoesNotKnow: 'Gastgeber weiß nicht Bescheid',
            numberOfSimulations: 'Anzahl der Simulationen',
            runSimulation: 'Simulation ausführen',
            totalSimulations: 'Gesamtsimulationen',
            abortedGames: 'Abgebrochene Spiele',
            abortedGamesDescription: 'Spiele, bei denen der Gastgeber versehentlich das Auto zeigte',
            gamesFinished: 'Abgeschlossene Spiele',
            gamesFinishedDescription: 'Spiele, die bis zu dem Punkt gespielt wurden, an dem der Spieler seine Wahl getroffen hat',
            wins: 'Gewonnene Spiele',
            winsDescription: 'Anzahl der gewonnenen Spiele',
            losses: 'Verlorene Spiele',
            lossesDescription: 'Anzahl der verlorenen Spiele',
            winRate: 'Gewinnrate',
            winRateDescription: 'Prozentsatz der gewonnenen Spiele',
            imprint: 'Impressum',
            privacy: 'Datenschutzerklärung',
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
