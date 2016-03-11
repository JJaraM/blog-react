import Reflux from 'reflux';
import $ from 'jquery';
import SkillActions from '../actions/SkillActions';
import dataFetchSkills from '../stores/data/dataFetchSkills.js';

let SkillStore = Reflux.createStore({
  listenables: [SkillActions],
  skillList: [],

  init: function() {
    this.fetchSkills();
  },

  fetchSkills: function() {
    $.ajax({
      url: 'http://api.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&api_key=fbfe07eb3cc28814df5bbc0313cdd521',
      dataType: 'jsonp',
      jsonp: 'jsoncallback',
      cache: false,
      context: this,
      success: function(data) {
        this.trigger(dataFetchSkills);
      }
    });
  },
});

export default SkillStore;
