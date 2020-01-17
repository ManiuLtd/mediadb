export default {
  videoOptions: (state) => {
    return {
      autoplay: false,
      poster: state.data.thumbnail,
      height: state.data.properties.height,
      width: state.data.properties.width,
      manifest: state.data.stream_url,
      download: state.data.download || false
    }
  }
}
