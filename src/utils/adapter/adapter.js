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
    return this.data?.userInfos?.firstName;
  }

  score() {
    return this.data?.todayScore || this.data?.score;
  }

  completaryData() {
    return this.data?.keyData;
  }

  activity() {
    return this.data?.sessions;
  }
}

export default Adapter;
