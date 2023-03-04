import { createStore } from 'vuex'

export default createStore({
  state: {
    comments: [

    ],
    commentsCounter: 0,
  },
  getters: {
  },
  mutations: {
    newComment(state, text) {
      const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear() + 2;
      const fulldate = `${day}/${monthNames[month - 1]}/${year}`;
  
      const newComment = {
        id: state.commentsCounter,
        title: 'Name', 
        dateAdd: fulldate, 
        body: text,
      };
  
      state.commentsCounter += 1;
  
      state.comments.push(newComment);
    }
  },
  actions: {
  },
  modules: {
  }
})
