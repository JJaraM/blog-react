import React from 'react';

import PostGrid from './components/PostGrid';
import PostActions from './actions/PostActions';

import Skills from './components/Skills';
import SkillActions from './actions/SkillActions';

React.render(<Skills/>, document.getElementById('skills'))
React.render(<PostGrid/>, document.getElementById('grid'))
