import React from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        onChange={props.onChange}
        value={props.course.title}
        error={props.errors.title}
      />

      <SelectInput
        id="author"
        label="Author"
        name="authorId"
        onChange={props.onChange}
        value={props.course.authorId || ""}
        error={props.errors.authorId}
      />

      <TextInput
        id="category"
        label="Category"
        name="category"
        className="form-control"
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

SelectInput.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default CourseForm;
