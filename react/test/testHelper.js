import {shallow,mount} from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import 'jasmine-ajax';

Object.assign(global, {
	jasmineEnzyme,
	mount,
	React,
	shallow
});

beforeEach(() => {
	jasmineEnzyme();
});

const requireAll = requireContext => {
	requireContext.keys().forEach(requireContext);
};

//require everything except for the test helper
requireAll(require.context('./', true, /^((?!testHelper).)*\.jsx?$/));

//require everything from src except for main
requireAll(require.context('../src/', true, /^((?!main).)*\.jsx?$/));

console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
