import { Button, Card, LoadingSpinner } from "../UI";

import classes from "./AboutCard.module.css";

const AboutCard = ({ info }) => {
  const { loading, error, value: data } = info;
  return (
    <Card className={classes.aboutCard}>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && <span>An error ocurred: {error}</span>}
      {!loading && !error && (
        <>
          <div className={classes.cardHeader}>
            <img src={data.avatar_url} />
            <a target="_blank" href={data.html_url}>
              {data.name}
            </a>
          </div>
          <div className={classes.cardBody}>
            <h3>Bio</h3>
            <p>{data.bio}</p>
            <h3>Links</h3>
            <a target="_blank" href={data.blog}>
              Personal Website
            </a>
            <a target="_blank" href={`https://twitter.com/${data.twitter_username}`}>
              Twitter
            </a>
          </div>
        </>
      )}
    </Card>
  );
};

export default AboutCard;
