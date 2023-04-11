if (document.getElementById("main") != null) {
  function toggleSidebar() {
    document.getElementById("main").classList.toggle("narrow");
    document.getElementById("sidebar").classList.toggle("hidden");

    if (document.getElementById("contact-container") != null) {
      let rows = document.getElementsByClassName("contact-row");
      let columns = document.getElementsByClassName("contact-col");

      setTimeout(function () {
        for (let i = 0; i < rows.length; i++) {
          rows[i].classList.toggle("row");
        }

        for (let i = 0; i < columns.length; i++) {
          columns[i].classList.toggle("col");
        }
      }, 150);
    }

    if (document.getElementById("blog-container") != null) {
      document.getElementById("main-blog").classList.toggle("main-blog");
      document.getElementById("main-blog-button").classList.toggle("mini");
    }
  }

  function toggleSubNav() {
    document.getElementById("sub-navigation").classList.toggle("hidden");
  }

  if ((document.documentElement.clientWidth || window.innerWidth) < 696) {
    if (document.getElementById("contact-container") != null) {
      let rows = document.getElementsByClassName("contact-row");
      let columns = document.getElementsByClassName("contact-col");

      for (let i = 0; i < rows.length; i++) {
        rows[i].classList.toggle("row");
      }

      for (let i = 0; i < columns.length; i++) {
        columns[i].classList.toggle("col");
      }
    }
  }
}
