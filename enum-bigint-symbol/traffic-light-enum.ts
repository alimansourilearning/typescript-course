enum TrafficLightStatus {
  RED,
  GREEN,
  YELLOW,
}

function handleTrafficLightStatus(status: TrafficLightStatus) {
  if (status === TrafficLightStatus.RED) {
    console.log("STOP!");
  } else if (status === TrafficLightStatus.GREEN) {
    console.log("GO");
  } else {
    console.log("WAIT!");
  }
}
