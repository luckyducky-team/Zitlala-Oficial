//Options for the notification event type for users actions through the game
export function Notification(eventType: string, userId: number) {

    let notificationMessage;
    switch (eventType) {
    case 'characterDeath':
        notificationMessage = 'Your character has died.';
        break;
    case 'levelUp':
        notificationMessage = 'Congratulations! Your character leveled up!';
        break;
    case 'welcome':
        notificationMessage = 'Bienvenido a Zitlala!';
        break;
    case 'unlockLevel':
        notificationMessage = 'Nivel desbloqueado!';
        break;
    case 'figth':
        notificationMessage = 'Preparate para la batalla!';
        break;
    case 'win':
        notificationMessage = 'Felicidades! Ganaste!';
        break;
    case 'lose':
        notificationMessage = 'Perdiste!';
        break;
    case 'porcentageLife50':
        notificationMessage = 'Vida al 50%';
        break;
    case 'porcentageLife25':
        notificationMessage = 'Vida al 25%';
        break;
    case 'porcentageLife10':
        notificationMessage = 'Vida al 10%';
        break;
    case 'porcentageLife5':
        notificationMessage = 'Vida al 5%';
        break;
    case 'missionComplete':
        notificationMessage = 'Mision completada!';
        break;
    case 'missionFail':
        notificationMessage = 'Mision fallida!';
        break;
    case 'newMission':
        notificationMessage = 'Nueva mision!';
        break;
    default:
        notificationMessage = 'New notification!';
    }

    return notificationMessage;
}

