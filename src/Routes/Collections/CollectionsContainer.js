import React from "react";
import CollectionsPresenter from "./CollectionsPresenter";
import { colApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      loading: true,
      error: ""
    };
  }
  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parsedID = Number(id);
    if (isNaN(parsedID)) {
      return push("/");
    }
    let result = null;
    try {
      ({ data: result } = await colApi.collections(parsedID));
    } catch {
      this.setState({ error: "Cat't find collections :(" });
    } finally {
      this.setState({ loading: false, result });
    }
  }
  render() {
    const { result, loading, error } = this.state;
    return (
      <CollectionsPresenter result={result} loading={loading} error={error} />
    );
  }
}
