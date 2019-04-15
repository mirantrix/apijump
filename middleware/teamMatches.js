const teamMatches = (dataSet) => {

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
    return matchDate.getTime() < today;
  }

  const active = (less) => {
    let matchDate = new Date(less.matchDate);
    return matchDate.getTime() >= today;
  }


  let next = [];
  let previous = [];
  let today = Date.now();
  let sorted = mostRecent();

  previous = sorted.filter(inactive);
  next = sorted.filter(active);

  let order = next.concat(previous);

  return {
    previous,
    next
  }

}

module.exports = teamMatches;
