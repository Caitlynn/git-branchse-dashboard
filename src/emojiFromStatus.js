export default function emojiFromStatus(status) {
    let emoji = '';
    switch (status) {
        case 'building':
            emoji = '🛠';
            break;
        case 'running':
            emoji = '😇';
            break;
        case 'exited':
            emoji = '😱';
            break;
    }
    return emoji;
}
