var posts=["posts/19809.html","posts/36634.html","posts/51381.html","posts/55804d48.html","posts/59765.html","posts/40339.html","posts/10103.html","posts/57522.html","posts/61476.html","posts/afd8ea3c.html","posts/5b7683e5.html","posts/7b51278d.html","posts/e9069468.html","posts/31267.html","posts/10997.html","posts/e539a68.html","posts/45054.html","posts/17197.html","posts/1cffd2c0.html","posts/undefined.html","posts/8787b46f.html","posts/58955.html","posts/63835.html","posts/45579.html","posts/36108.html","posts/20897.html","posts/d90ac5d4.html","posts/8175.html","posts/38537.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };