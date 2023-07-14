export const compareDate = (date) => {
    var d1 = new Date();
    var d2 = new Date(date);

    return d1.getDate() === d2.getDate();
}

export const getDateTimeFunc = (str) => {
    const dateTime = new Date(str);
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const day = dateTime.getDate();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const weekday = dateTime.getDay()
    const formattedMinutes = ("0" + minutes).slice(-2);
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
    
    return { day: weekDays[weekday], date: `${year}-${month}-${day}`, time: `${hours}:${formattedMinutes} ${amOrPm}` }

}