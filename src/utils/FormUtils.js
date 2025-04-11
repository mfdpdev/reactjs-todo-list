export const createList = (dispatch, payload) => {
  dispatch({ payload, type: "CREATE"});
}

export const deleteList = (dispatch, title) => {
  dispatch({ type: "DELETE", title});
}

export const editList = (dispatch, list, payload) => {
  dispatch({ type: "EDIT", list, payload });
}

export const clearForm = (setTitle, setCategory, setDescription) => {
  setTitle("");
  setCategory("personal")
  setDescription("");
}
