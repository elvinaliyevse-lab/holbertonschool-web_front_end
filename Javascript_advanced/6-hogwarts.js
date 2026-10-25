function studentHogwarts() {
  let privateScore = 0;
  let name = null;

  function changeScoreBy(points) {
    privateScore += points;
  }

  return {
    setName(newName) {
      name = newName;
    },
    rewardStudent() {
      changeScoreBy(1);
    },
    penalizeStudent() {
      changeScoreBy(-1);
    },
    getScore() {
      return `${name}: ${privateScore}`;
    },
  };
}

const harry = studentHogwarts();
harry.setName('Harry');
for (let reward = 0; reward < 4; reward += 1) {
  harry.rewardStudent();
}
console.log(harry.getScore());

const draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
for (let penalty = 0; penalty < 3; penalty += 1) {
  draco.penalizeStudent();
}
console.log(draco.getScore());