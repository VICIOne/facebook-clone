export default function setEditedTimestamp(date){

    let d = new Date(date?.toDate())
    let day = d.getDate()
    let month = d.toLocaleString('default', { month: 'long' })
    
    return `${day} ${month} at ${d.toLocaleTimeString()}`;
}