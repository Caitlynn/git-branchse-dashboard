import { observable } from 'mobx';

class AppInstance {
  @observable
  status = 'building'

  @observable
  name = ''

  @observable
  lastCommitMessage = ''

  url = ''
  shouldDie = false

  constructor(params) {
    this.url = params.url;
    this.name = params.name;
    this.lastCommitMessage = params.lastCommitMessage;
    this.shouldDie = params.shouldDie;
    this.run()
  }

  run() {
    this.sleep(randInt(5, 20))
      .then(() => this.status = 'running')
      .then(() => this.sleep(2))
      .then(() => {
        if (this.shouldDie) {
          this.status = 'exited';
        }
      });
  }

  sleep(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), seconds * 1000);
    });
  }
}

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default AppInstance;
