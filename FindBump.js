
const findBump = (accelerometerData, hasMovedFast) => {
    if(!hasMovedFast){
        if(Math.pow(accelerometerData.x, 2) +Math.pow(accelerometerData.y, 2) + Math.pow(accelerometerData.z, 2) > 1.8)
        {
        console.log("Went Fast");
        return true;
        }
    } 
    else{
        if(Math.pow(accelerometerData.x, 2) +Math.pow(accelerometerData.y, 2) + Math.pow(accelerometerData.z, 2) < 1.5)
        {
            console.log("Stopped");
        }
        return false;
    }
};

export default findBump;
