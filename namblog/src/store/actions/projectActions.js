export const createProject = (project) => {
  //using thunk so we can return a function
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //Make async call to database

    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        title: project.title,
        content: project.content,
        authorFirstName: "Nam",
        authorLastName: "Nguyen",
        authorId: 1234,
        createAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project: project,
        });
      })
      .catch((err) => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          err,
        });
      });
  };
};
