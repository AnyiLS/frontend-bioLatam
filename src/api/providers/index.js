import axios from "axios";
import useAuthProviders from "./auth";
import useCoursesProviders from "./courses";

const useProviders = () => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;

    return {
        useAuthProviders,
        useCoursesProviders
    }
}

export default useProviders;