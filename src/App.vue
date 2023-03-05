<template>
  <div class="header__wrapper">
    <content-block
      class="header"
      style="padding-top: 15px; width: calc(100% - 40px)"
    >
      <div class="image">
        <img src="@/assets/profile.png" alt="" />
      </div>
      <div class="textarea">
        <div class="name__descr">
          <h2>Eva Jonson</h2>
          <p>Sales Manager</p>
        </div>
        <div class="about">
          <p>
            I will find the best offers for you. <br />
            My services are absolutely free.
          </p>
        </div>
      </div>
    </content-block>
    <content-block style="display: flex; justify-content: flex-end">
      <div class="services">
        <div class="services__header">
          <p>Services</p>
        </div>
        <hr />
        <div class="services__list">
          <div class="services__list__item">
            <div class="column">
              <p>Manual tour booking</p>
              <div class="column__iner" id="manual"></div>
            </div>
            <div class="count">11</div>
          </div>
          <div class="services__list__item">
            <div class="column">
              <p>Package tours</p>
              <div class="column__iner" id="tours"></div>
            </div>
            <div class="count">3</div>
          </div>
          <div class="services__list__item">
            <div class="column">
              <p>Hotels</p>
              <div class="column__iner" id="hotels"></div>
            </div>
            <div class="count">1</div>
          </div>
        </div>
        <hr />
        <div class="services__footer">
          <h2>Total</h2>
          <div class="count">15</div>
        </div>
      </div>
    </content-block>
    <content-block>
      <div class="comment__header">
        <div class="comment__header__text">
          <h2>Latest reviews</h2>
          <a href="#">All reviews</a>
        </div>
        <div class="comment__header__badges">
          <img src="@/assets/like.png" alt="like" />
          <p style="margin-right: 16px">131</p>
          <img src="@/assets/comment.png" alt="like" />
          <p>{{ $store.state.commentsCounter }}</p>
        </div>
      </div>
    </content-block>
  </div>
  <content-block>
    <div class="comment__section">
      <div class="comments">
        <div
          class="comment"
          v-for="comment in $store.state.comments"
          :key="comment.id"
          v-show="$store.state.comments.length !== 0"
        >
          <div class="comment__info">
            <h2>{{ comment.title }}</h2>
            <p style="margin-left: 8px">{{ comment.dateAdd }}</p>
          </div>
          <div class="comment__area">
            {{ comment.body }}
          </div>
        </div>
        <div class="comment__empty" v-show="$store.state.comments.length == 0">
          <p>
            Здесь еще нет ни одного комментария. <br />
            Будьте первыми!
          </p>
        </div>
      </div>
    </div>
  </content-block>
  <div class="form__send">
    <input
      type="text"
      v-model="messageValue"
      v-on:keydown="sendOnCtrlEnter"
      placeholder='Enter message...'
    />
    <button @click="newComment">Send a message</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Name",
      messageValue: "",
    };
  },
  methods: {
    sendOnCtrlEnter(event) {
      if (event.keyCode === 13 && event.ctrlKey) {
        this.newComment();
      }
    },
    newComment() {
      if (!this.messageValue) {
        return;
      }
      this.$store.commit("newComment", this.messageValue);
      this.messageValue = "";
    },
  },
};
</script>

<style>
* {
  font-family: "Golos Text", sans-serif;
}
#manual {
  background: #b1e19b;
  width: 100%;
}
#tours {
  width: 27%;
  background: #ace2f8;
}
#hotels {
  width: 9%;
  background: #ace2f8;
}
.header__wrapper {
  position: sticky;
  top: 0;
  background-color: white;
}
.header {
  display: flex;
  position: relative;
}
.image {
  width: 124px;
  height: 124px;
  background-color: blue;
  border-radius: 5rem;
  z-index: 2;
  overflow: hidden;
}
.textarea {
  margin-left: 62px;
  width: calc(100% - 142px);
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
}
.name__descr {
  padding-left: 72px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.name__descr h2 {
  font-size: 16px;
  line-height: 20px;
  margin: 0;
}
.name__descr p {
  font-size: 12px;
  color: #808080;
  line-height: 20px;
  margin: 0;
}
.about {
  width: calc(100% - 40px);
  padding-left: 72px;
  height: 54px;
  background-color: #fffbc8;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #dadada;
  font-size: 14px;
}
.about p {
  margin: 0;
}
.services {
  margin-left: 134px;
  width: 100%;
}
.services hr {
  margin: 0;
  height: 1px;
  background-color: #DADADA;
  border: 0;
}
.services p {
  margin: 0;
}
.services__header {
  display: flex;
  justify-content: flex-end;
  padding: 0 22px;
  height: 25px;
  color: #808080;
  font-size: 13px;
}
.services__list {
  height: 76px;
  padding: 16px 0;
}
.services__list__item {
  display: flex;
  height: 25px;
  margin: 1px 0;
}
.column {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  font-size: 13px;
}
.column p {
  margin: 0;
  z-index: 1;
  margin-left: 6px;
}
.column__iner {
  position: absolute;
  top: 0;
  z-index: 0;
  width: 30%;
  height: 100%;
  background-color: blue;
  border-radius: 0px 3px 3px 0px;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 73px;
  font-size: 13px;
}
.count p:last-child{
  font-size: 16px;
}
.services__footer {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}
.services__footer h2 {
  font-size: 16px;
  margin: 0;
}
.comment__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
}
.comment__header__text {
  display: flex;
  align-items: center;
}
.comment__header__text h2 {
  font-size: 16px;
  margin: 0;
}
.comment__header__text a {
  font-size: 16px;
  margin-left: 8px;
}
.comment__header__badges {
  display: flex;
  align-items: center;
  color: #333333;
  font-size: 12px;
  height: 20px;
}
.comment__header__badges p {
  margin: 0 2px;
}
.form__send {
  position: fixed;
  bottom: 0;
  width: calc(100% - 42px);
  height: 191px;
  background-color: #f2f2f2;
  padding: 0 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.form__send input {
  text-indent: 20px;
  height: 63px;
  width: 100%;
}
.form__send button {
  width: 57%;
  height: 43px;
  background-color: #fdd639;
  font-size: 16px;
  color: black;
  border: 0;
  border-radius: 23px;
}
.comments {
  overflow-y: scroll;
  margin-bottom: 191px;
  padding: 12px 0;
}
.comment__info {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.comment__info h2 {
  font-size: 14px;
  margin: 0;
}
.comment__info p {
  font-size: 11px;
  color: #808080;
  margin: 0;
}
.comment__area {
  background-color: #f2fbff;
  margin-top: 10px;
  padding: 20px 15px;
  font-size: 14px;
  border: 1px solid #c4cbcf;
  box-shadow: 0px 4px 10px 0 rgba(128, 128, 128, 0.1);
  word-wrap: break-word;
}
@media (max-width: 380px) {
  .about {
    font-size: 12px;
  }
}
@media (max-width: 400px) {
  .about{
    font-size: 11px;
  }
}
</style>
