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

  fetchResource(path, msg) {
    const inferred = path.substring(1, path.length);
    this.ui.startProgress(`Fetching ${msg || inferred}`);

    return this.client.get(path)
      .then(this.onSuccess)
      .catch(this.onError);
  }

  createResource(path, params, msg) {
    const inferred = path.substring(1, path.length - 1);
    this.ui.startProgress(`Creating new ${msg || inferred}`)

    return this.client.post(path, params)
      .then(this.onSuccess)
      .catch(this.onError);
  }

  fetchGoals() {
    return this.fetchResource('/goals');
  }

  createGoal(params) {
    return this.createResource('/goals', params);
  }

  fetchWeights() {
    return this.fetchResource('/weights');
  }

  createWeight(params) {
    return this.createResource('/weights', params);
  }

  fetchHabits() {
    return this.fetchResource('/habits');
  }

  createHabit(params) {
    return this.createResource('/habits', params);
  }
}
export default Api;
