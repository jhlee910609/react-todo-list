import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
    Map({
        id: 0,
        text: 'studying react',
        done: true
    }),
    Map({
        id: 1,
        text: 'try to styling component',
        done: false
    })
]);

export default handleActions({
    [INSERT]: (state, action) => {
        const { id, text, done } = action.payload;

        return state.push(Map({
            id,
            text,
            done
        }));
    },
    [TOGGLE]: (state, action) => {
        const { payload: id } = action;
        const index = state.findeIndex(todo => todo.get('id') === id);

        return state.updateIn([index, 'done'], done => !done);
    },
    [REMOVE]: (state, action) => {
        const { payload: id } = action;
        const index = state.findIndex(todo => todo.get('id') === id);

        return state.delete(index);
    }
}, initialState);
