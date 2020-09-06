module.exports = function createDreamTeam(members) {
  let dreamteam;
  if (Array.isArray(members)) {
    dreamteam=members.reduce((team, name) => {
      if (typeof(name)=="string") {
        team.push(name.match(/[a-z]/i)[0].toUpperCase());
        return team;
      } else {
        return team;
      }
    }, []);
    return dreamteam.sort().join("").toUpperCase();
  } else {
    return dreamteam=false;
  }
};