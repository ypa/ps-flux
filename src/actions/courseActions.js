import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export function createCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    // hey dispatcher, go tell all the stores that a course just got created
    dispatcher.disptach({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}
