export const anHourPassed = (now = 0, date = 0) => {
    return (now - date) > 3600;
}