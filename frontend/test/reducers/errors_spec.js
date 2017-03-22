import reducer from '../../src/reducers/errors'
import { Map } from 'immutable'
import { expect } from 'chai'

describe('errors reducer', () => {
  it('should reset errors if action has no errors', () => {
    var newState = reducer(Map({error: 'error'}), { type: 'type'});
    expect(newState).to.deep.equal(Map());
  });

  it('should return errors if action haserrors', () => {
    var newState = reducer(Map(), { type: 'type', errors: {'1': '2'}});
    expect(newState.get('1')).to.equal('2');
  });
});
