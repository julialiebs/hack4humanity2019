
const findBump = (accelerometerData, hasMovedFast) => {
    const accelerationMagnitude = Math.pow(accelerometerData.x, 2) + Math.pow(accelerometerData.y, 2) + Math.pow(accelerometerData.z, 2);
    if(!hasMovedFast){
        if(accelerationMagnitude > 2)
        {
            console.log("Went Fast");
            return true;
        }
    }
    else{
        if(accelerationMagnitude < 1.7)
        {
            console.log("Stopped");
            return 'bump';
        }
        return false;
    }
};

export default findBump;
