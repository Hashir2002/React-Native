import ActionTypes from '../Constant';
 import * as firebase from 'firebase';
 import '../../config'







 export function forData() {
     return dispatch => {
         firebase.database().ref('/FirebaseAndReduxTodo').on('value', snapshot => {
            const obj = snapshot.val()
            const data = [];
            const id = [];
        
            for (let key in obj) {
              const newObj = obj[key];
              //  newObj['id'] = key;
              const newid = key;
               
               id.push(newid);
               data.push(newObj);
                        }
             dispatch({ type: ActionTypes.TODO, payload: data ,id:id })
                     } )
     }
 }


 export function Delete(id) {
     console.log(id)
     return dispatch => {
         firebase.database().ref('/FirebaseAndReduxTodo').child(`${id}`).remove();
         dispatch({ type: ActionTypes.Free, payload: id })
     }

 }

 export function updateTodo(val, uid) {
     console.log(val, uid)
     return dispatch => {
         firebase.database().ref('/FirebaseAndReduxTodo/').child(`${uid}`).set(val)
         dispatch({ type: ActionTypes.Free, payload: val})
     }
 }


export function AddTodo(val) {
    return dispatch => {
  firebase.database().ref("/FirebaseAndReduxTodo").push(val)
         dispatch({ type: ActionTypes.Free, payload: val})
    }

}

//  =========+========+===+===+=+=+=+=+
export function ReduxUpdate(val,id) {
    return dispatch => {
        console.log(val,id)
        dispatch({ type: ActionTypes.UPDATETODO, payload: val , id:id })

        }
    
}
export function ReduxDelete(ind) {
    return dispatch => {
        dispatch({ type: ActionTypes.DELETETODO, payload: ind})
    }

}

export function ReduxAddTodo(val) {
    return dispatch => {
        dispatch({ type: ActionTypes.ReduxAddTodo, payload: val})
    }

}



export function Error(val){
    return dispatch => {
        dispatch({ type: ActionTypes.Error, payload: val })
    }

}
