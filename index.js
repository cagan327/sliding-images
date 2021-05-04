window.onload = function () {
  var app = new Vue({
    el: "#app",
    data: {
      message: "Sliding images",
      slides: [
        {
          title: "Explore The World",
          img:
            "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          selected: true,
        },
        {
          title: "Wild Forest",
          img:
            "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          selected: false,
        },
        {
          title: "Sunny Beach",
          img:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
          selected: false,
        },
        {
          title: "City on Winter",
          img:
            "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
          selected: false,
        },
        {
          title: "Mountains - Clouds",
          img:
            "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          selected: false,
        },
      ],
    },
    methods: {
      selectSlide: function (index) {
        for (let i = 0; i < this.slides.length; i++) {
          this.slides[i].selected = index === i;
        }
      },
    },
  });
};
