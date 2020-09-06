const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(SAMPLE_ACTIVITY) {
  let SAMPLE_ACTIVITY_FLOAT=parseFloat(SAMPLE_ACTIVITY);
  if (SAMPLE_ACTIVITY_FLOAT>0 && SAMPLE_ACTIVITY_FLOAT<=MODERN_ACTIVITY && typeof(SAMPLE_ACTIVITY)=="string") {
    return Math.ceil(Math.log(MODERN_ACTIVITY/SAMPLE_ACTIVITY_FLOAT)*HALF_LIFE_PERIOD/0.693);
  } else {
    return false;
  };
};
