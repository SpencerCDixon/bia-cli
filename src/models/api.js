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

  fetchGoals() {
    this.ui.startProgress('Fetching goals');
    return this.client.get('/goals')
      .then(response => {
        this.ui.stopProgress();
        return response.data;
      })
      .catch(err => {
        this.ui.stopProgress();
        this.ui.writeError('Something went wrong fetching goals');
        this.ui.writeError(err.message);
      });
  }
}
export default Api;
