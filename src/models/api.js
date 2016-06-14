import axios from 'axios';
import dotenv from 'dotenv';

dotenv.load();

class Api {
  constructor(ui) {
    this.ui = ui;

    this.client = axios.create({
      baseURL: 'http://bia-backend.herokuapp.com/',
      auth: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      }
    });
  }

  fetchGoals() {
    this.ui.startProgress('Fetching goals')
    this.client.get('/goals')
    .then(response => {
      this.ui.stopProgress();
      return response.data
    })
    .then(data => {
      data.forEach(goal => {
        this.ui.writeInfo(goal.name);
      });
    });
  }
}
export default Api;
