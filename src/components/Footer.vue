<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="footer">
    <div class="footer-text">
      <p>Copyright &copy; Fadhlur rohman | All Rights Reserved.</p>
    </div>
    <div class="footer-iconTop">
      <a href="#home"><i class="fa-solid fa-angle-up"></i></a>
    </div>
  </footer>
</template>

<style>
.footer {
  position: fixed;
  left: 0%;
  right: 0%;
  bottom: 0%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 9%;
  background: #070f2b /*var(--bg-color)*/;
}

.footer-text {
  font-size: 1.6rem;
}

.footer-iconTop {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1rem;
  background: var(--main-color);
  border-radius: 0.8rem;
  transition: 0.5 ease;
}

.footer-iconTop a:hover {
  box-shadow: 0 0 1rem var(--main-color);
}

.footer-iconTop a i {
  font-size: 2.4rem;
  color: var(--snd-bf-color);
}
</style>
