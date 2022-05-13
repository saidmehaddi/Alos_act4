import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import {get} from 'axios'
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function deletememe(id) {
//   console.log("help");
//   // window.axios.delete(`api/memes/${id}`).then((res) => {
//   //   window.location = "/memes";
//   // });
// }

export default function memes() {
  const classes = useStyles();
  const [memes, setmemes] = useState([]);

  useEffect(() => {
    window.axios
      .get("api/memes")
      .then((res) => setmemes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Release Date</TableCell>
            <TableCell align="right">Listeners</TableCell>
            <TableCell align="right">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {memes &&
            memes.map((meme) => (
              <TableRow key={meme.name}>
                <TableCell component="th" scope="row">
                  <Link to={`/memes/${meme.id}`}>{meme.name}</Link>
                </TableCell>
                <TableCell align="right">{meme.status}</TableCell>
                <TableCell align="right">{meme.category}</TableCell>
                <TableCell align="right">{meme.releaseDate}</TableCell>
                <TableCell align="right">{meme.listeners}</TableCell>
                <TableCell align="right">
                  <button
                    color="secondary"
                    onClick={() =>
                      window.axios
                        .delete(`api/memes/${meme.id}`)
                        .then(() => (window.location = "/memes"))
                    }
                  >
                    delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
