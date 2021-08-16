import { Button, FormHelperText, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import * as Yup from "yup";

export const SongForm = ({ handleSearch }) => {
  const formik = useFormik({
    initialValues: {
      song: "",
      artist: "",
    },
    validationSchema: Yup.object({
      song: Yup.string()
        .matches(/^[A-Za-z0-9\s]+$/g, "Solo letras y números.")
        .min(2, "Deben ser más de 2 carácteres.")
        .max(30, "Máximo 30 carácteres.")
        .required("Requerido."),
      artist: Yup.string()
        .matches(/^[A-Za-z0-9\s]+$/g, "Solo letras y números.")
        .min(2, "Deben ser más de 2 carácteres.")
        .max(30, "Máximo 30 carácteres.")
        .required("Requerido."),
    }),
    onSubmit: (values) => {
      handleSearch(values);
      formik.handleReset();
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          id="artist"
          label={"Nombre de Artista"}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.artist}
          error={formik.errors.artist ? true : false}
        />
        {formik.errors.artist ? (
          <FormHelperText id="component-helper-text">
            {formik.errors.artist}
          </FormHelperText>
        ) : null}
        <TextField
          id="song"
          label={"Buscar Canción"}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.song}
          error={formik.errors.song ? true : false}
        />
        {formik.errors.song ? (
          <FormHelperText id="component-helper-text">
            {formik.errors.song}
          </FormHelperText>
        ) : null}
        <Button
          type="submit"
          variant="contained"
          size="small"
          color="primary"
          endIcon={<Icon>search</Icon>}
        >
          Buscar
        </Button>
      </Form>
    </>
  );
};
