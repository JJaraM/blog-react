import React from 'react';
import Reflux from 'reflux';
import SkillStore from '../stores/SkillStore';

let Skills = React.createClass({
  mixins: [Reflux.connect(SkillStore, 'skillStore')],

  render: function () {
      if (this.state.skillStore) {
        return(
          <div className="section-skill appear" id="skill-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-title">
                    <h1 className="section-heading">SKILLS</h1>
                    <h2 className="section-subheading-nobg">I AM REALLY GOOD AT THE FOLLOWING TECHNICAL SKILLS</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {this.state.skillStore.map(function(skill) {
              	   return (
                     <div className="col-md-4">
                       <SkillSquare label={skill.name} percentage={skill.percentage}>
                       </SkillSquare>
                     </div>
              	   );
              	 }, this)}
              </div>
            </div>
          </div>
         )
      } else {
        return <div>h</div>
      }
  }
});

let SkillSquare = React.createClass({
  render: function() {
    return (
      <div className="skill wow fadeInLeftBig animated animated">
        <div className="name">
          <div className="arrow"></div>
          <div className="label">{this.props.label}</div>
        </div>
        <div className="knob">
          <span className="chart">
            <span className="percent">{this.props.percentage}</span>
          </span>
        </div>
      </div>
    );
  }
});

export default Skills;
