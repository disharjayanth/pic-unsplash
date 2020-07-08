import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID WG_UyWcseFStB991f2UwBGus5GOqXPMiVDw-96w3VR0",
  },
});
