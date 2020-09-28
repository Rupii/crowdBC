import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xF329e3952D4bBe8fB3b727E1217b4B447780a6aA'
);

export default instance;
//0xb55Bf696505AEA240a1668D35050b83f0A0B2ff8
//0xa76E0406480Ea95B28389276D3faE3F8F2042CA8
//