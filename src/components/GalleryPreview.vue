<template>
  <article class="container">
    <header class="container-header">
      <div class="profile-android">
        <a href="/home" class="user-profile-link" style="width: 30px; height: 30px;">
          <img src="/img/gallery/7.jpg" alt="" class="user-img">
        </a>
      </div>
      <div class="username-container">
        <div class="username">
          <a href="" class="username-link">user name</a>
        </div>
      </div>
    </header>
    <div class="img-container" style="padding-bottom: 125%;">
      <img :src="img.URL" alt="" class="article-img" decoding="auto" style="" sizes="614px">
    </div>
    <div class="article-footer">
      <section class="artical-actions">
        <a class="like" href="#" role="button">
          <span class="like-icon">Like</span>
        </a>
        <a class="comment" href="#" role="button">
          <span class="comment-icon">Comment</span>
        </a>
        <a class="save" href="#" role="button" aria-disabled="false">
          <span class="save-icon">Save</span>
        </a>
      </section>
      <section class="likes-container">
        <div class="likes">
          <a class="likes-counter" href="#">
            <span>{{ img.likes.length }}</span> likes</a>
        </div>
      </section>
      <div class="comments-container">
        <ul class="comments">
          <li class="comment" v-for="comment in img.comments">
            <!-- to add a title and props from props -->
            <a class="user" title="user" href="/nirana1/">{{ comment.user }} </a>
            <span>
              <span>
                <span>{{ comment.content }}
                </span>
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div class="date-container">
        <a class="date" href="/p/BhufdVlAmUn/">
          <time class="date-time" datetime="2018-04-18T21:12:12.000Z" title="Apr 19, 2018">April 19</time>
        </a>
      </div>
      <section class="add-comment-container">
        <form class="add-comment">
          <textarea class="add-comment-area" aria-label="Add a comment…" placeholder="Add a comment…" autocomplete="off" autocorrect="off"></textarea>
        </form>
      </section>

    </div>

    <!-- <div class="preview-container">
      <div class="img-bg" v-bind:style="{ backgroundImage: 'url('+ '../' +  img.URL  + ')' }" @click="routerlink(img)">
      </div>
      <div class="img-details">
        <p>{{ img.likes }}</p>
        <p>{{ img.comments.length }}</p>
      </div> -->

    </div>
  </article>
</template>

<script>
  export default {
    name: "GalleryPreview",
    props: ["img"],
    methods: {
      routerlink(img) {
        this.$router.push("/home/" + img.imgId);
      }
    },
    computed: {
      // numOfComments(img) {
      //   img.comments.length;
      // }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (min-width: 640px) {
    .container {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      align-items: stretch;
      background-color: rgb(255, 255, 255);
      border-bottom-color: rgb(230, 230, 230);
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-image-outset: 0px;
      border-image-repeat: stretch;
      border-image-slice: 100%;
      border-image-source: none;
      border-image-width: 1;
      border-left-color: rgb(230, 230, 230);
      border-left-style: solid;
      border-left-width: 1px;
      border-right-color: rgb(230, 230, 230);
      border-right-style: solid;
      border-right-width: 1px;
      border-top-color: rgb(230, 230, 230);
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border-top-style: solid;
      border-top-width: 1px;
      line-height: 18px;
      margin-bottom: 60px;
      margin-left: -1px;
      margin-right: -1px;
      margin-top: 0px;
      padding-bottom: 0px;
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0px;
      position: relative;
      text-size-adjust: 100%;
      vertical-align: baseline;

    }
    .container-header {
      margin-bottom: 0px;
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 0px;
      padding-bottom: 16px;
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 16px;
      height: 60px;
      line-height: 18px;
      box-sizing: border-box;
      position: relative;
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-shrink: 0;
      border-bottom-color: rgb(239, 239, 239);
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-image-outset: 0px;
      border-image-repeat: stretch;
      border-image-slice: 100%;
      border-image-source: none;
      border-image-width: 1;
      border-left-color: rgb(0, 0, 0);
      border-left-style: solid;
      border-left-width: 0px;
      border-right-color: rgb(0, 0, 0);
      border-right-style: solid;
      border-right-width: 0px;
      border-top-color: rgb(0, 0, 0);
      border-top-style: solid;
      border-top-width: 0px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 14px;
      font-stretch: 100%;
      font-style: normal;
      font-variant-caps: normal;
      font-variant-east-asian: normal;
      font-variant-ligatures: normal;
      font-variant-numeric: normal;
      text-size-adjust: 100%;
      vertical-align: baseline;
    }
    .user-profile-link {
      box-sizing: border-box;
      color: rgb(0, 53, 105);
      height: 30px;
      width: 30px;
      line-height: 18px;
      display: block;
      position: relative;
      cursor: pointer;
      margin-bottom: 0px;
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 0px;
      overflow-x: hidden;
      overflow-y: hidden;
      padding-bottom: 0px;
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0px;
      text-decoration-color: rgb(0, 53, 105);
      text-decoration-line: none;
      text-decoration-style: solid;
      background-color: rgb(250, 250, 250);
      border-bottom-color: rgb(0, 53, 105);
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
      border-bottom-style: none;
      border-bottom-width: 0px;
      border-image-outset: 0px;
      border-image-repeat: stretch;
      border-image-slice: 100%;
      border-image-source: none;
      border-image-width: 1;
      border-left-color: rgb(0, 53, 105);
      border-left-style: none;
      border-left-width: 0px;
      border-right-color: rgb(0, 53, 105);
      border-right-style: none;
      border-right-width: 0px;
      border-top-color: rgb(0, 53, 105);
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      border-top-style: none;
      border-top-width: 0px;
      text-size-adjust: 100%;
      vertical-align: baseline;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 14px;
      font-stretch: 100%;
      font-style: normal;
      font-variant-caps: normal;
      font-variant-east-asian: normal;
      font-variant-ligatures: normal;
      font-variant-numeric: normal;
      font-weight: 400;
    }
    .username-container {
      align-items: flex-start;
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;
      margin-left: 12px;
      overflow: hidden;
      /* inheritted from div */
      border: 0 solid #000;
      box-sizing: border-box;
      flex-direction: column;
      margin: 0;
      padding: 0;
      position: relative;
      font: inherit;
      vertical-align: baseline;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
    }
    .username {
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      max-width: 100%;
      overflow: auto;
      -webkit-box-flex: 1;
      flex-grow: 1;
      flex-shrink: 1;
      /* inheritted from div */
      border: 0 solid #000;
      box-sizing: border-box;
      flex-direction: column;
      margin: 0;
      padding: 0;
      position: relative;
      font: inherit;
      vertical-align: baseline;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
    }
    .username-link {
      color: #262626;
      -webkit-box-flex: 0;
      flex-grow: 0;
      flex-shrink: 1;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 5px;
      margin-left: -5px;
      /* inherit from a */
      text-decoration: none;
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;
      cursor: pointer;
    }
    .img-container {
      background-color: #efefef;
      display: block;
      width: 100%;

      /* inherit from div */
      align-items: stretch;
      border: 0 solid #000;
      box-sizing: border-box;
      flex-direction: column;
      flex-shrink: 0;
      margin: 0;
      padding: 0;
      position: relative;
      font: inherit;
      vertical-align: baseline;
      padding-bottom: 125%;
      overflow: hidden;

    }
    .article-img {
      height: 100%;
      user-select: none;
      width: 100%;
      left: 0;
      position: absolute;
      top: 0;

      /* inherit from img */
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;
    }
    /* .user-img {
      height: 100%;
      width: 100%
    } */
    .article-footer {
      padding: 0 16px;
      margin-top: 4px;
      align-items: stretch;
      border: 0 solid #000;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      margin: 0;
      position: relative;
      font: inherit;
      vertical-align: baseline;
    }
    .artical-actions {
      margin-top: 4px;
      flex-direction: row;
      align-items: stretch;
      border: 0 solid #000;
      display: flex;
      flex-shrink: 0;
      margin: 0;
      padding: 0;
      position: relative;
      font: inherit;
      vertical-align: baseline;
    }
    .like {
      color: #003569;
      text-decoration: none;
      display: inline-block;
      margin-left: -8px;
      background-color: transparent;
      border: 0;
      cursor: pointer;
      padding: 8px;
      margin: 0;
      font: inherit;
      vertical-align: baseline;
      cursor: pointer;
    }
    .like-icon {
      display: block;
      /* overflow: hidden; */
      /* text-indent: 110%; */
      white-space: nowrap;
      background-position: -293px -399px;
      height: 24px;
      width: 24px;
      background-image: url(/static/bundles/base/sprite_core.png/b32d382b99a8.png);
      background-repeat: no-repeat;
    }
    .comment {
      color: #003569;
      text-decoration: none;
      display: inline-block;
      background-color: transparent;
      border: 0;
      cursor: pointer;
      padding: 8px;
      margin: 0;
      font: inherit;
      vertical-align: baseline;
      cursor: pointer;
    }
    .comment-icon {
      display: block;
      /* overflow: hidden; */
      /* text-indent: 110%; */
      white-space: nowrap;
      background-position: -293px -399px;
      height: 24px;
      width: 100%;
      /* background-image: url(/static/bundles/base/sprite_core.png/b32d382b99a8.png); */
      background-repeat: no-repeat;
    }
    .save {
      color: #003569;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      border: 0;
      padding: 8px;
      font: inherit;
      vertical-align: baseline;
      background-color: transparent;
      margin-left: auto;
      margin-right: -8px;
    }
    .likes-container {
      margin-bottom: 8px;
      flex-direction: row;
      justify-content: flex-end;
      align-items: stretch;
      border: 0 solid #000;
      box-sizing: border-box;
      display: flex;
      flex-shrink: 0;
      margin: 0;
      padding: 0;
      position: relative;
      font: inherit;
      vertical-align: baseline;
    }
    .likes {
      flex-grow: 1;
      flex-shrink: 1;
      flex-direction: column;
      color: #262626;
      display: block;
      align-items: stretch;
      border: 0 solid #000;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      position: relative;
      font: inherit;
      vertical-align: baseline;
    }
    .likes-counter {
      font-weight: 600;
      color: #262626;
      text-decoration: none;
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;
      cursor: pointer;
      text-align: left;
      padding-left: 8px;
    }
    .comments-container {
      box-sizing: border-box;
      margin-bottom: 4px;
      flex-grow: 1;
      flex-shrink: 1;
      min-height: 0;
      overflow: auto;
      margin-top: -5px;
      padding-top: 5px;
      overflow-anchor: none;

      /* from div */
      align-items: stretch;
      border: 0 solid #000;
      display: flex;
      flex-direction: column;
      position: relative;
      font: inherit;
    }
    ul.comments {
      flex-grow: 1;
      list-style: none;
      padding: 0;

      /* from ul */
      margin: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;
      display: block;
    }
    li.comment {
      padding-bottom: 0;
      overflow: hidden;
      position: relative;
      word-wrap: break-word;
      margin-top: -5px;
      padding-top: 5px;

      /* from li */
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;
      display: list-item;
    }
    a.user {
      color: #262626;
      text-decoration: none;
      margin-right: .3em;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 5px;
      margin-left: -5px;
      /* from a */
      margin: 0;
      padding: 0;
      border: 0;
      /* font-size: 14px; */
      /* font: inherit; */
      vertical-align: baseline;
      cursor: pointer;
      word-wrap: break-word;
    }
    
    span {
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;
    }
    .date-container {
      margin-bottom: 4px;
      display: block;
      /* from div */
      align-items: stretch;
      border: 0 solid #000;
      display: block;
      flex-direction: column;
      flex-shrink: 0;
      margin: 0;
      padding: 0;
      position: relative;
      font: inherit;
      /* margin-left: 0px;
      margin-right: 0px;
      margin-top: 0px;
      padding-bottom: 0px;
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0px; */
    }
    a.date {
      color: #999;
      margin-bottom: 5px;
      text-transform: uppercase;

      /* from a */
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;
      cursor: pointer;
      word-wrap: break-word;
    }
    time.date-time {
      font-size: 10px;
      letter-spacing: .2px;
      line-height: 18px;

      /* from time */
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;
      color: #999;
    }
    .add-comment-container {
      /* from section */
      align-items: stretch;
      border: 0 solid #000;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin: 0;
      position: relative;
      font: inherit;
      vertical-align: baseline;
      /* specific */
      padding-right: 26px;
      margin-top: 4px;
      border-top: 1px solid #efefef;
      color: #999;
      flex-shrink: 0;
      font-size: 14px;
      line-height: 18px;
      min-height: 56px;
      justify-content: center;
      padding: 16px 0;
    }
    .add-comment {
      /* from form */
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;

      /* specific */
      align-items: center;
      flex-direction: row;
      flex-shrink: 1;
      position: relative;
      display: flex;
      flex-grow: 1;
    }
    .add-comment-area {
      background: 0 0;
      border: 0;
      color: #262626;
      font-size: inherit;
      height: 18px;
      max-height: 80px;
      outline: 0;
      padding: 0;
      resize: none;
      display: flex;
      flex-grow: 1;
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
      line-height: 18px;
    }

  }

  /* .img-bg {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .img-details {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  p {
    margin: 0 10% 5% 0;
  } */
</style>