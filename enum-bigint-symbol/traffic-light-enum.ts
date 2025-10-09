enum TrafficLightStatus {
  RED = 12,
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
