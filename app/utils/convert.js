module.exports = {
  convertDateTime: dt => {
    let newDate = '';
    const monthNames = ['Jan', 'Feb', 'Marh', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const date = new Date(dt * 1000);

    return `${dayName[date.getDay()]}, ${monthNames[date.getMonth()]} ${date.getDate()}`;
  }
};
