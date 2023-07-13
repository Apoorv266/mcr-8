export const compareDate = (date) =>{
    var d1 = new Date();
    var d2 = new Date(date);
    
    return d1.getDate() === d2.getDate();
}

export const getDateTimeFunc = (str) =>{
const dateTime = new Date(str);

const year = dateTime.getFullYear();
const month = dateTime.getMonth() + 1; // Months are zero-based, so we add 1
const day = dateTime.getDate();
const hours = dateTime.getHours();
const minutes = dateTime.getMinutes();
const formattedMinutes = minutes.toString().padStart(2, "0");
const amOrPm = hours >= 12 ? "PM" : "AM";

return {date: `${year}-${month}-${day}`, time : `${hours}:${formattedMinutes} ${amOrPm}`   }

}