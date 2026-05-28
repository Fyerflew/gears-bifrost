assignMission({
  "instructions": "Knock over the pillar as fast as you can!",
  "objectives": [
    { "id": "knocked", "text": "Pillar Knocked Over", "type": "state" }
  ],
  "onUpdate": function(api) {
    const pillar = api.getWorldObject('TargetPillar');
    if (pillar) {
      const currentTime = api.getSimulationTime();
      api.setMissionStatus("Current Time: " + currentTime.toFixed(2) + "s");

      // Check if pillar rotation is tilted more than 45 degrees
      if (Math.abs(pillar.rotation.x) > 0.7 || Math.abs(pillar.rotation.z) > 0.7) {
        api.passObjective('knocked');
        api.stopSimulation();
        api.showSuccess("Great job! Final Time: " + currentTime.toFixed(2) + "s");
      }
    }
  }
});
