import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  section: {
    margin: "2rem 0",
  },
  container: {
    maxWidth: 1100,
    margin: "auto",
    overflow: "hidden",
    padding: "0 2rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "3rem",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    display: "inline-block",
    background: "#4444dc",
    color: "#fff",
    padding: "0.8rem 1.5rem",
    border: "none",
    cursor: "pointer",
    fontSize: "1.1rem",
    borderRadius: "30px",
  },
});

export default function meme() {
  const [meme, setmeme] = useState({});
  const classes = useStyles();
  let { id } = useParams();

  useEffect(() => {
    window.axios
      .get(`api/memes/${id}`)
      .then((res) => setmeme(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {meme && (
        <section className={classes.section}>
          <div className={classes.container}>
            <div>
              <h1>{meme.name}</h1>
              <p>{meme.about}..</p>
              <a href="/" className={classes.btn}>
                Read More
              </a>
            </div>
            <img src={meme.picture} alt="" />
          </div>
        </section>
      )}
    </div>
  );
}
