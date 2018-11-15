import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b5c2b98aa929c50bd858af2691b3eccb913f4d890782f843b3013dabc27ef9b9"
  }
});
