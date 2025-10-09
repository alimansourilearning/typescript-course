const RED_STATUS = 0;
const GREEN_STATUS = 1;
const YELLOW_STATUS = 2;

function showTrafficLightStatus(status: number) {
  if (status === RED_STATUS) {
    console.log("STOP!");
  } else if (status === GREEN_STATUS) {
    console.log("GO");
  } else {
    console.log("WAIT!");
  }
}

showTrafficLightStatus(3)