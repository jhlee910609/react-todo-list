import { Map } from 'immutable'
import { handleActions, createAction } from 'redux-actions'

/**
 * [ ducks file structure ]
 * action type, action 생성함수, reducer를 따로 관리하던 기존 방식이 번거롭다는 문제점 발견.
 * 그래서 한 파일에 관리하자는 'Ducks file structure'를 한 개발자가 만듬. 
 * 이 파일 구조에는 몇 가지 규칙이 존재
 *  1. reducer는 반드시 export default로 내보내줘야함
 *  2. action fun도 export를 이용하여 내보내줘야함
 *  3. 액션타입명은 'reducer/ACTION_TYPE' 형태로 작성해줘야함 ex) counter/INCREMENT, counter/DECREMENT...
 */
// action type
const SET_INPUT = 'input/SET_INPUT'

// action 생성함수
/* [createAction] 을 활용하지 않았을때

export const setInput = () => ({
    type: SET_INPUT
})

=> 3줄 이상의 코드를 한 줄로 만들 수 있음.

*/

export const setInput = createAction(SET_INPUT)

// 초기값
const initialState = Map({
  value: ''
  // payload (데이터 추가 발생 시...)
})

// reducer 
/* 


*/

// action.payload의 쓰임새 
// 파라미터로 받을 수 있는 변수를 통째로 선언해두는 형식
// 주석으로 파라미터 선언해둬야함. 
export default handleActions({
  [SET_INPUT]: (state, action) => {
    return state.set('value', action.payload)
  }
}, initialState)
