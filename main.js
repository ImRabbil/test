const app = Vue.createApp({
  data() {
    return {
      skills: ["HTML", "CSS", "JS", "Vue", "React", "Node"],
    };
  },  
  methods: {
   addItem(){
    this.skills.push("New Item")
   }
  },
});
app.mount("#app");
