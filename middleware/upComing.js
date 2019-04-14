const upComing = (dataSet) => {

  const sortDates = (date) => {
    return function(a, b) {
      return a[date] - b[date];
    }
  }

  const mostRecent = () => {
    let mostRecent = dataSet.sort(sortDates("matchDate"));
    return mostRecent;
  }

  const inactive = (less) => {
    let matchDate = new Date(less.matchDate);
    console.log(matchDate);
    return matchDate < today;
  }

  const active = (less) => {
    let matchDate = new Date(less.matchDate);
    console.log(matchDate);
    return matchDate >= today;
  }


  let upComming = [];
  let passComming = [];
  let today = Date.now();
  let getTime = new Date("2019-06-24T00:30:00Z");
  console.log(today, getTime.getTime());
  let sorted = mostRecent();

  passComming = sorted.filter(inactive);
  upComming = sorted.filter(active);

  let order = upComming.concat(passComming);

  return {
    passComming,
    upComming
  }

}

module.exports = upComing;
