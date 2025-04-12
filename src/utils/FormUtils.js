export const createList = (dispatch, payload) => {
  dispatch({ payload, type: "CREATE"});
}

export const deleteList = (dispatch, id) => {
  dispatch({ type: "DELETE", id});
}

export const editList = (dispatch, id, payload) => {
  dispatch({ type: "EDIT", id, payload });
}

export const clearForm = (setTitle, setCategory, setDescription) => {
  setTitle("");
  setCategory("personal")
  setDescription("");
}
