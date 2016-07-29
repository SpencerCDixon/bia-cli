import axios from 'axios';
import ProjectSettings from './project-settings';

class Api {
  constructor(ui, settings) {
    this.ui = ui;
    this.settings = settings || new ProjectSettings();

    this.client = axios.create({
      baseURL: 'http://bia-backend.herokuapp.com/',
      auth: {
        username: this.settings.getSetting('username'),
        password: this.settings.getSetting('password'),
      }
    });
  }

  onSuccess = (response) => {
    this.ui.stopProgress();
    return response.data;
  }

  onError = (err) => {
    this.ui.stopProgress();
    this.ui.writeError('Something went wrong.');
    this.ui.writeError(`Error: ${err}`);
  }

  fetchGoals() {
    this.ui.startProgress('Fetching goals');
    return this.client.get('/goals')
      .then(this.onSuccess)
      .catch(this.onError);
  }

  fetchWeights() {
    this.ui.startProgress('Fetching weights');
    return this.client.get('/weights')
      .then(this.onSuccess)
      .catch(this.onError);
  }

  createWeight(amount) {
    this.ui.startProgress('Creating new weight entry');
    return this.client.post('/weights', { amount: amount })
      .then(this.onSuccess)
      .catch(this.onError);
  }
}
export default Api;
