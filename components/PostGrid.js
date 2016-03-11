import React from 'react';
import Reflux from 'reflux';
import PostStore from '../stores/PostStore';
import Masonry  from 'react-masonry-component';

var PostGrid = React.createClass({
  mixins: [Reflux.connect(PostStore, 'postStore')],

  getGrid : function () {
    if (this.state.postStore) {
      return this.state.postStore.map(function(post) {
        return (
          <div className="col-md-4 mm">
            <img className="img-responsive img-resize" src={post.image} />
              <div className="post-home">
                <h3><a href="#">{post.title}</a></h3>
                <div className="media-block">
                  <span>
                    <a href="http://demo.pukkathemes.com/uberblog/category/lifestyle/" rel="category tag">Lifestyle</a>,
                    <a href="http://demo.pukkathemes.com/uberblog/category/music-2/" rel="category tag">Music</a>,
                    <a href="http://demo.pukkathemes.com/uberblog/category/photography-2/" rel="category tag">Photography</a>
                    </span>
                  <p>
                    {post.description}
                  </p>
                  <a className="read" href="http://demo.pukkathemes.com/uberblog/268/" title="Read more" target="_self"> Read more </a>
                </div>
              </div>
            <div className="stripe"></div>
          </div>
        );
      });
    } else {
      return <p>Nos hay imagenes</p>
    }
  },

  render: function () {
    var masonryOptions = {
      transitionDuration: 0
    };
    return (
      <Masonry className={'my-gallery-class'} elementType={'ul'} options={masonryOptions} disableImagesLoaded={false}>
        {this.getGrid()}
      </Masonry>
    );
  }
});

export default PostGrid;
