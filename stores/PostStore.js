import Reflux from 'reflux';
import $ from 'jquery';
import PostActions from '../actions/PostActions';

let PostStore = Reflux.createStore({
  listenables: [PostActions],
  postList: [],
  sourceUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cats,memes',

  init: function() {
    this.fetchListByPage();
  },

  fetchListByPage: function() {
    this.postList = [
      {
        "image": "http://i.blogs.es/3a6209/angularjs/original.png",
        "title": "Lights That Changed Advertising",
        "description": "The neon sign is an evolution of the earlier Geissler tube, which is an electrified glass tube containing a “rarefied” gas (the gas pressure in the tube is well below atmospheric pressure). When a voltage is applied to electrodes inserted through the glass, an electrical glow discharge results. Geissler tubes were quite popular in the"
      },
      {
        "image": "http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png",
        "title": "Lights That Changed Advertising",
        "description": "The neon sign is an evolution of the earlier Geissler tube, which is an electrified glass tube containing a “rarefied” gas (the gas pressure in the tube is well below atmospheric pressure). When a voltage is applied to electrodes inserted through the glass, an electrical glow discharge results. Geissler tubes were quite popular in the"
      },
      {
        "image": "http://nop4you.com/content/images/thumbs/0001494_search-engine-powered-by-mongodb.jpeg",
        "title": "Lights That Changed Advertising",
        "description": "The neon sign is an evolution of the earlier Geissler tube, which is an electrified glass tube containing a “rarefied” gas (the gas pressure in the tube is well below atmospheric pressure). When a voltage is applied to electrodes inserted through the glass, an electrical glow discharge results. Geissler tubes were quite popular in the"
      },
      {
        "image": "http://demo.pukkathemes.com/uberblog/wp-content/uploads/2014/10/8120100393_1438af4407_o1-960x825.jpg",
        "title": "Lights That Changed Advertising",
        "description": "The neon sign is an evolution of the earlier Geissler tube, which is an electrified glass tube containing a “rarefied” gas (the gas pressure in the tube is well below atmospheric pressure). When a voltage is applied to electrodes inserted through the glass, an electrical glow discharge results. Geissler tubes were quite popular in the"
      },
      {
        "image": "http://demo.pukkathemes.com/uberblog/wp-content/uploads/2014/10/14270382617_1b66241c72_k-960x733.jpg",
        "title": "Lights That Changed Advertising",
        "description": "The neon sign is an evolution of the earlier Geissler tube, which is an electrified glass tube containing a “rarefied” gas (the gas pressure in the tube is well below atmospheric pressure). When a voltage is applied to electrodes inserted through the glass, an electrical glow discharge results. Geissler tubes were quite popular in the"
      },
      {
        "image": "http://demo.pukkathemes.com/uberblog/wp-content/uploads/2014/10/motorbike-407186_1920-960x733.jpg",
        "title": "Lights That Changed Advertising",
        "description": "The neon sign is an evolution of the earlier Geissler tube, which is an electrified glass tube containing a “rarefied” gas (the gas pressure in the tube is well below atmospheric pressure). When a voltage is applied to electrodes inserted through the glass, an electrical glow discharge results. Geissler tubes were quite popular in the"
      }
    ];

    $.ajax({
      url: this.sourceUrl,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      cache: false,
      context: this,
      success: function(data) {
        this.trigger(this.postList);
      }
    });

  }
});

export default PostStore;
