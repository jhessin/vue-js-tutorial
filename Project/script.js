Vue.component('blog-post', {
  props: ['blogpost'],
  template: `
    <div id="blogPost">
      <h2>{{ blogpost.title }}</h2>
      <h3>{{ blogpost.username }}</h3>
      <h4>{{ blogpost.date }}</h4>
      <p>{{ blogpost.content }}</p>
    </div>
  `,
});

const blogVue = new Vue({
  el: '#blogPosts',
  data: {
    posts: [
      // {title: 'First Post', username: 'Jim', date: (new Date()).toDateString(),
      //   content: 'This is the content of my very interesting blog post'},
      // {title: 'Second Post', username: 'Jim', date: (new Date()).toDateString(),
      //   content: 'This is the content of my very interesting blog post'},
      // {title: 'Third Post', username: 'Jim', date: (new Date()).toDateString(),
      //   content: 'This is the content of my very interesting blog post'},
    ]
  }
});

const postBlogVue = new Vue({
  el: '#blogPostCreation',
  data: {
    title: '',
    content: '',
  },
  methods: {
    publishPost() {
      let date = new Date();
      date = date.toDateString();
      const username = 'Jim';
      const postData = {
        title: this.title,
        content: this.content,
        date,
        username,
      }
      blogVue.posts.push(postData);
      this.title = '';
      this.content = '';
    }
  },
})
