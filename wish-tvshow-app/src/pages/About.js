const About = () => {
  return (
    <div className="container about-page " data-testid="about-test">
      <div className="aboutpage-conten ">
        <h1>About</h1>

        <p className="intro">
          <span>
            <strong>Wish Shows</strong>
          </span>{' '}
          &nbsp; tv shows app is an application the user you can use to search
          about different types of shows comedy, drama or animation, etc...
          <br />I use&nbsp;-
          <a href="https://www.tvmaze.com/api" target="_blank" rel="noreferrer">
            Tvmaze
          </a>
          - &nbsp;API here is the documentation link
        </p>

        <h4>Our App features :</h4>
        <ol>
          <li>On the homepage,you will find a list of shows.</li>
          <li>
            You can search about shows and you will get the results (the show
            name, poster) and you can add/remove a show to/from your favorites
            List.
          </li>
          <li>
            when you leave the website and come back later you will find your
            favorites.
          </li>
          <li>
            When you click on the show poster you will get more information
            about the show (the official link, the Status, Rating, and the
            summary) and If there is any missing information you will see Alert
            Message like Not Found! or no Rating or summary.
          </li>
          <li>
            You should write a right word to get the results (no empty input or
            only spaces).
          </li>
          <li>
            You can use our app on many devices(pc, tablet or iPad, and mobile).
          </li>
        </ol>

        <h6>Thank you for choosing our App.</h6>
      </div>
    </div>
  );
};

export default About;
