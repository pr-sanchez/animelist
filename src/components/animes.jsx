import React, { Component, Fragment } from "react";
import { animeService } from "../services/anime.service";
import "./animes.css";
const initialState = {
  animes: [],
  listIds: [],
  search: false
};
class Animes extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  handleClear = () => {
    this.setState(initialState);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.animes.length !== this.state.animes.length) {
      this.props.handleCount(this.state.animes.length);
    }
  }
  handleRandom = () => {
    this.handleSearch();
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
  handleSearch = () => {
    this.setState(
      {
        search: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            search: false
          });
        }, 2800);
      }
    );
  };
  render() {
    const { animes, search } = this.state;
    if (animes.data === 0) {
      return <h2>The are no animes in the database</h2>;
    }
    console.log(animes);
    return (
      <Fragment>
        <div className="d-flex justify-content-center ">
          <div className="loading">
            {search && (
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
                className="btn btn-primary btn-lg btn-block "
                disabled={search ? true : false}
              >
                Search 10 random
              </button>
            </div>
            <div className="col">
              <button
                onClick={() => this.handleClear()}
                disabled={search ? true : false}
                className="btn btn-secondary btn-lg btn-block "
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
                        <div className="animeBody">
                          {anime.data.attributes.posterImage.small !==
                            undefined && (
                            <img
                              src={anime.data.attributes.posterImage.small}
                              alt="Cover image"
                              width="100%"
                              height="100%"
                            />
                          )}
                          <div
                            className="animeTitle"
                            style={{
                              color: "#54a0ff"
                            }}
                          >
                            {anime.data.attributes.canonicalTitle}
                            <hr className="divider" />
                            {anime.data.attributes.titles.ja_jp}
                          </div>
                        </div>
                      </Fragment>
                    )}
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </Fragment>
    );
  }
}
export default Animes;
