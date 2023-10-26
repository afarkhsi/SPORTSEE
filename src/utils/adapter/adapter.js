class Adapter {
  constructor(data) {
    this.data = data;
  }

  performance() {
    const kindData = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    };

    return this.data
      ?.map((dataValue) => ({
        ...dataValue,
        kind: kindData[dataValue.kind],
      }))
      .reverse();
  }

  userInfo() {
    const user = this.data?.userInfos?.firstName;
    return user;
  }

  score() {
    const dataScore = this.data?.todayScore || this.data?.score;
    return dataScore;
  }

  activity() {
    const dataActivity = this.data?.sessions;
  }
}

export default Adapter;
