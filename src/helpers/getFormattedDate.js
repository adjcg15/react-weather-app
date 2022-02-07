export const getFormattedDate = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  	]

    return `${days[date.getDay()]} ${date.getDate()}, ${months[date.getMonth()]} ${date.getFullYear()}`
}

export const getHour = (seconds = 0) => {
	const date = new Date(seconds * 1000);

	const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

	return `${ date.getHours() }:${ minutes }`;
}

export const getDay = (seconds = 0) => {
  const date = new Date(seconds * 1000);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return `${days[date.getDay()]} ${date.getDate()}`;
}