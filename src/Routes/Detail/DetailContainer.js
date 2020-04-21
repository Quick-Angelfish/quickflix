import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: "",
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }
  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedID = Number(id);
    if (isNaN(parsedID)) {
      return push("/");
    }
    let result = null;
    let videos = null;
    let seasons = null;
    let dataObj = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedID));
        ({
          data: { results: videos },
        } = await moviesApi.getVideos(parsedID));
        dataObj = [videos, result.production_companies];
      } else {
        ({ data: result } = await tvApi.showDetail(parsedID));
        ({
          data: { results: videos },
        } = await tvApi.getVideos(parsedID));
        seasons = result.seasons;

        dataObj = [videos, result.production_companies, seasons];
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result, dataObj });
    }
  }

  render() {
    const { result, error, loading, dataObj } = this.state;
    console.log(dataObj);
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        dataObj={dataObj}
      />
    );
  }
}
