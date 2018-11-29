import "@babel/polyfill";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const context = require.context('../test/', true, /\.test\.js$/);

context.keys().forEach(context);