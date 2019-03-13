import React, { Component, Fragment } from "react";
import { animeService } from "../services/anime.service";
import "./animes.css";
const initialState = {
  animes: [],
  listIds: [],
  clicked: false,
  idSelectedAnime: ""
};
class Animes extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // async getEpisodes(id) {
  //   const episodes = await animeService.getEpisodes(1);
  //   // episodes.attributes.map(attribute => {
  //   // });
  //   episodes.map(episode => {
  //     console.log(episode.attributes);
  //   });
  //   // attributes.map(attribute => {
  //   //   return console.log(attribute);
  //   // });
  // }
  handleClear = () => {
    this.setState(initialState);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.animes.length !== this.state.animes.length) {
      this.props.handleCount(this.state.animes.length);
    }
  }
  handleRandom = () => {
    this.handleClick();
    this.random = setInterval(() => {
      for (let i = 0; i < 11; i++) {
        const setIds = async id => {
          const animes = await animeService.getAnimes(id);
          if (animes.data) {
            this.setState({
              animes: [animes, ...this.state.animes]
            });
          }
        };
        if (i === 10) clearInterval(this.random);
        else {
          let id = Math.ceil(Math.random() * (9999 - 1) - 1).toString();
          this.setState(
            {
              listIds: [id, ...this.state.listIds]
            },
            () => {
              if (!this.state.listIds.includes("id")) {
                setIds(id);
              }
            }
          );
        }
      }
    }, 500);
  };
  handleClick = () => {
    this.setState(
      {
        clicked: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            clicked: false
          });
        }, 2800);
      }
    );
  };
  handleToggle = id => {
    if (this.state.idSelectedAnime === id) {
      this.setState({
        idSelectedAnime: ""
      });
    } else {
      this.setState({
        idSelectedAnime: id
      });
    }
  };

  animeInformation = id => {
    if (this.state.idSelectedAnime === id) {
      return "animeInformation";
    }
  };
  render() {
    const { animes, clicked, idSelectedAnime } = this.state;
    if (animes.data === 0) {
      return <h2>The are no animes in the database</h2>;
    }
    console.log(animes);
    return (
      <Fragment>
        <div className="d-flex justify-content-center ">
          <div className="loading">
            {clicked && (
              <div className="circle circleAnimated">
                <div className="innerCircle" />
              </div>
            )}
          </div>
        </div>
        <div
          className="container-fluid"
          style={{ margin: "20px 0px 20px 0px" }}
        >
          <div className="row">
            <div className="col">
              <button
                onClick={() => this.handleRandom()}
                className="btn btn-primary btn-lg btn-block"
                disabled={clicked ? true : false}
              >
                Search 10 random
              </button>
            </div>
            <div className="col">
              <button
                onClick={() => this.handleClear()}
                disabled={clicked ? true : false}
                className="btn btn-secondary btn-lg btn-block"
              >
                Clear results
              </button>
            </div>
          </div>
        </div>

        {/* <p>There are {animes.length} animes i n the database</p> */}

        <div className="gridContainer">
          {animes &&
            animes.map(anime => {
              if (anime.data !== undefined) {
                return (
                  <div className="gridItem" key={anime.data.id}>
                    {anime.data.attributes.canonicalTitle !== undefined && (
                      <Fragment>
                        <h3 className="animeTitle">
                          {anime.data.attributes.canonicalTitle}
                          <br />
                          {anime.data.attributes.titles.ja_jp}
                        </h3>
                        <div className="d-flex justify-content-center">
                          <div
                            className={
                              idSelectedAnime === anime.data.id
                                ? "triangleDownVanishing"
                                : "triangleDown"
                            }
                            onClick={() => {
                              this.handleToggle(anime.data.id);
                            }}
                          />
                        </div>
                        <h4
                          className={this.animeInformation(anime.data.id)}
                          style={
                            idSelectedAnime === anime.data.id
                              ? { visibility: "visible" }
                              : { visibility: "hidden" }
                          }
                        >
                          <b>Rating:</b> {anime.data.attributes.averageRating}
                          <br />
                          <b>Age:</b> {anime.data.attributes.ageRatingGuide}
                        </h4>
                      </Fragment>
                    )}
                    {anime.data.attributes.posterImage.small !== undefined && (
                      <img
                        src={anime.data.attributes.posterImage.small}
                        alt="Cover image"
                        width={"80%"}
                        height={"auto"}
                      />
                    )}
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
        {/* 
              // return (
              //   <div className="grid-item" key={anime.id}>
              //     <h3>{anime.attributes.canonicalTitle}</h3>
              //     <h5>{anime.attributes.averageRating}</h5>
              //     <h5>{anime.attributes.ageRatingGuide}</h5>
              //     <img
              //       src={anime.attributes.posterImage.tiny}
              //       width={100}
              //       height={100}
              //     />
              // </div>
              // ); */}
        {/* <div>episodes: {this.getEpisodes(1)}</div> */}
        {/* 
createdAt: "2013-02-20T16:00:13.609Z"
endDate: "1999-04-24"
episodeCount: 26
episodeLength: 25
favoritesCount: 4162
nextRelease: null
nsfw: false
popularityRank: 21
posterImage: {tiny: "https://media.kitsu.io/anime/poster_images/1/tiny.jpg?1431697256", small: "https://media.kitsu.io/anime/poster_images/1/small.jpg?1431697256", medium: "https://media.kitsu.io/anime/poster_images/1/medium.jpg?1431697256", small: "https://media.kitsu.io/anime/poster_images/1/small.jpg?1431697256", original: "https://media.kitsu.io/anime/poster_images/1/original.jpg?1431697256", …}
ratingFrequencies: {2: "2194", 3: "43", 4: "366", 5: "20", 6: "132", 7: "23", 8: "2119", 9: "29", 10: "510", 11: "36", 12: "1858", 13: "91", 14: "4993", 15: "207", 16: "6019", 17: "368", 18: "7274", 19: "360", 20: "24899"}
ratingRank: 46
showType: "TV"
slug: "cowboy-bebop"
startDate: "1998-04-03"
status: "finished"
subtype: "TV"
synopsis: "I */}
      </Fragment>
    );
  }
}
export default Animes;
