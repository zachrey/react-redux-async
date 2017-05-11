export const TOGGLE_GET = 'TOGGLE_GET';
export const SUCCESS_GET = 'SUCCESS_GET';
export const FAILED_GET = 'FAILED_GET';

export function startGet(){
  return {type: TOGGLE_GET};

}

export function successGet(json){
  return {
    type: SUCCESS_GET,
    profile: json
  }
}


export function getData(name){
  return dispatch => {
    //开始请求,改变state
    dispatch(startGet());
    return fetch(`https://api.github.com/users/${name}`)
      .then(res => res.json())
      .then(json => dispatch(successGet(json)))
      .then(() => dispatch(startGet()))
  }
}

