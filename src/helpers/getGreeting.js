export const getGreeting = (hour) => {
    if(5 <= hour && hour < 12) return 'morning';
    if(12 <= hour && hour < 19) return 'afternoon';

    return 'evening';
}