<template>
  <div class="container">
    <header>
      <nav ref="selNav">
        <input type="checkbox" id="nav" class="hidden">
        <label for="nav" class="nav-btn">
            <i></i>
            <i></i>
            <i></i>
        </label>
        <div class="logo">
          <a href="#">BRAND</a>
        </div>
        <div class="nav-wrapper">
          <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">overview</a></li>
              <li><a href="#">prices</a></li>
              <li><a href="#">purchase</a></li>
          </ul>
        </div>
    </nav>
    </header>
    
    <section class="sec1">

    </section>
    <section class="content">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repellendus error impedit 
        reiciendis quisquam consequuntur natus quia voluptatum animi rerum consectetur nobis asperiores 
        officiis saepe iure velit, rem molestias voluptatibus.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repellendus error impedit 
        reiciendis quisquam consequuntur natus quia voluptatum animi rerum consectetur nobis asperiores 
        officiis saepe iure velit, rem molestias voluptatibus.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repellendus error impedit 
        reiciendis quisquam consequuntur natus quia voluptatum animi rerum consectetur nobis asperiores 
        officiis saepe iure velit, rem molestias voluptatibus.
      </p>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    pageMove() {
      let last_position = window.scrollY
      if(last_position == 0) {
        this.$refs.selNav.classList.remove('black')
      } else {
        this.$refs.selNav.classList.add('black')
      }

    }
  },
  created: function() {
  window.addEventListener('scroll',this.pageMove);
  },
  destroyed: function() {
    window.removeEventListener('scroll', this.pageMove);
  }
}

// window.addEventListener('scroll', function (e) {
//   let last_known_scroll_position = window.scrollY;

//   // if( last_known_scroll_position == 0){
//   //     console.log(last_known_scroll_position)
//   //   this.$refs.selNav.classList.remove('black')
//   // } else {
//   //   this.$refs.selNav.classList.add('black')
//   // }

// })

</script>

<style>
* {
      box-sizing: border-box;
}

html {
      margin: 0;
      padding: 0;
      width: 100%;
}

body {
      margin: 0;
      padding: 0;
      width: 100%;
      font-family: Poppins;
      font-weight: 400;
      
}

nav {position:fixed; top:0; left:0; width:100%; height:100px; padding:10px 100px;box-sizing: border-box; transition:.3s;}
nav.black{ background:rgba(0,0,0,0.8); height:100px; padding:10px 100px;}

nav .logo {
      float: left;
      padding:22px 20px;
      margin-left: 16px;
      margin-top: 8px;
      height:80px;
      transition:.3s;
}

nav.black .logo{
  color:#fff;
}

.logo a {
      color: #000;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 0px;
      text-decoration: none;
}

nav ul {
      float: right;
      padding: 8px;
      margin-right: 16px;
      margin-top: 8px;
}

nav ul li {
      display: inline-block;
      float: left;
}

nav ul li:not(:first-child) {
      margin-left: 48px;
}

nav ul li:last-child {
      margin-right: 24px;
}

nav ul li a {
      line-height:80px;
      color:#151515;
      padding:12px 30px;

      display: inline-block;
      outline: none;
      color: #000;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 14px;
      letter-spacing: 1.2px;
      font-weight: 600;
}
nav.black ul li a {
  color:#fff;
}

nav ul li a:focus {
  outline:none;
}

nav ul li a.active{
  background: skyblue;
  color:#fff;
  border-radius:6px;
}

section.sec1 {
  width:100%;
  height:100vh;
  background: url(../assets/background-img.jpg);
  background-position: center;
  background-size: cover;
}

.content{
  margin-top:80px;

}
.content p {
  width: 900px;
  margin:30px auto;
  text-align: justify;
  line-height:
}

@media screen and (max-width: 864px) {
      .logo {
            padding: 0;
      }

      .nav-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: #fff;
            opacity: 0;
            transition: all 0.2s ease;
      }

      .nav-wrapper ul {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
      }

      .nav-wrapper ul li {
            display: block;
            float: none;
            width: 100%;
            text-align: right;
            margin-bottom: 10px;
      }

      .nav-wrapper ul li:nth-child(1) a {
            transition-delay: 0.2s;
      }

      .nav-wrapper ul li:nth-child(2) a {
            transition-delay: 0.3s;
      }

      .nav-wrapper ul li:nth-child(3) a {
            transition-delay: 0.4s;
      }

      .nav-wrapper ul li:nth-child(4) a {
            transition-delay: 0.5s;
      }

      .nav-wrapper ul li:not(:first-child) {
            margin-left: 0;
      }

      .nav-wrapper ul li a {
            padding: 10px 24px;
            opacity: 0;
            color: #000;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1.2px;
            transform: translateX(-20px);
            transition: all 0.2s ease;
      }

      .nav-btn {
            position: fixed;
            right: 10px;
            top: 10px;
            display: block;
            width: 48px;
            height: 48px;
            cursor: pointer;
            z-index: 9999;
            border-radius: 50%;
      }

      .nav-btn i {
            display: block;
            width: 20px;
            height: 2px;
            background: #000;
            border-radius: 2px;
            margin-left: 14px;
      }

      .nav-btn i:nth-child(1) {
            margin-top: 16px;
      }

      .nav-btn i:nth-child(2) {
            margin-top: 4px;
            opacity: 1;
      }

      .nav-btn i:nth-child(3) {
            margin-top: 4px;
      }
}

#nav:checked + .nav-btn {
      transform: rotate(45deg);
}

#nav:checked + .nav-btn i {
      background: #000;
      transition: transform 0.2s ease;
}

#nav:checked + .nav-btn i:nth-child(1) {
      transform: translateY(6px) rotate(180deg);
}

#nav:checked + .nav-btn i:nth-child(2) {
      opacity: 0;
}

#nav:checked + .nav-btn i:nth-child(3) {
      transform: translateY(-6px) rotate(90deg);
}

#nav:checked ~ .nav-wrapper {
      z-index: 9990;
      opacity: 1;
}

#nav:checked ~ .nav-wrapper ul li a {
      opacity: 1;
      transform: translateX(0);
}

.hidden {
      display: none;
}

</style>

