<template>
  <div id="#app">
    <section>
      <h2>listening events</h2>
      <youtube id="player" :video-id="videoId" @ready="ready" @playing="playing"></youtube>
      <button @click="play()">play</button>
      <button @click="stop()">stop</button>
      <button @click="pause()">pause</button>
      <button @click="seek(5)">seek</button>
      <button @click="clear(5)">clear</button>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // https://www.youtube.com/watch?v=rfi3w9Bzwik
      videoId: 'rfi3w9Bzwik'
    }
  },
  methods: {
    ready (event) {
      this.player = event.target
    },
    playing (event) {
      // The player is playing a video.
      // event.target.playing()
    },
    change () {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = 'another video id'
    },
    // see https://developers.google.com/youtube/iframe_api_reference?hl=ja
    play () {
      this.player.playVideo()
    },
    stop () {
      this.player.stopVideo()
    },
    pause () {
      this.player.pauseVideo()
    },
    seek (second) {
      this.player.seekTo(second)
    },
    clear () {
      this.player.clearVideo()
    }
  }
}
</script>
