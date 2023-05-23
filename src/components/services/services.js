import axios from "axios";
import * as helper from "./serviceHelper"

const service = {
  endpoint: `https://api.remotebootcamp.dev/api/users/`,
};

const getSpecs = ()=> {
    const config = {
      method: "Get",
      url: service.endpoint + "friends",
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config).then(helper.onGlobalSuccess);
}

const spectacleService = {
    getSpecs
};
export default spectacleService;