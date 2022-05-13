import {
  FormControl,
  Select,
  TextField,
  Grid,
  Button,
  InputLabel,
} from "@material-ui/core";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const creatememeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name too Short!")
    .max(100, "Name too Long!")
    .required("Name is Required"),
  topText: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Description is Required"),
  bottomText: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Description is Required"),
  category: Yup.string().required("Required!"),
});

export default function Creatememe() {
  const formik = useFormik({
    initialValues: {
      name: "",
      topText: "",
      bottomText: "",
      category: "anime",
    },
    validationSchema: creatememeSchema,
    onSubmit: (values) => {
      console.log(values);
      window.axios
        .post("api/memes", {
          ...values,
          picture: "http://placehold.it/320x320",
          releaseDate: "Tuesday, November 3, 2015 9:25 AM",
          hosts: [],
          listeners: 0,
        })
        .then((res) => {
          window.location = "/memes";
        })
        .catch((err) => console.log(err.response.data.errors));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={1} alignItems="center">
        <Grid item md={12} xs={12}>
          <TextField
            fullWidth
            margin="normal"
            type="text"
            variant="filled"
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormControl variant="filled" fullWidth>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Category
            </InputLabel>
            <Select
              native={true}
              name="category"
              labelId="Category"
              variant="filled"
              id="categoty_select"
              displayEmpty
              value={formik.values.categoty}
              onChange={formik.handleChange}
              helperText={formik.touched.category && formik.errors.category}
            >
              <option value={"fiction"}>Fiction</option>
              <option value={"interviews"}>Interviews</option>
              <option value={"series"}>Series</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            fullWidth
            margin="normal"
            type="text"
            multiline
            rows={6}
            variant="filled"
            label="topText"
            name="topText"
            value={formik.values.topText}
            onChange={formik.handleChange}
            helperText={formik.touched.topText && formik.errors.topText}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            fullWidth
            margin="normal"
            type="text"
            multiline
            rows={6}
            variant="filled"
            label="bottomText"
            name="bottomText"
            value={formik.values.bottomText}
            onChange={formik.handleChange}
            helperText={formik.touched.bottomText && formik.errors.bottomText}
          />
        </Grid>
        <Grid item md={2} sm={3} xs={6}>
          <Button variant="filled" size="large" type="submit">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
