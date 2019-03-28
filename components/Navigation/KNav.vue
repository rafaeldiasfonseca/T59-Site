<template>
<div class="header-container">  
  <header class="KHeader">
    <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><nuxt-link class='navigation__link' to='/'><span>01</span>Home</nuxt-link></li>                 
                    <li class="navigation__item"><nuxt-link class='navigation__link' to='/inscreva-se'><span>02</span>Inscreva-se</nuxt-link></li>
                    <li class="navigation__item"><nuxt-link class='navigation__link' to='/contato'><span>03</span>Contato</nuxt-link></li>                    
                    <li class="navigation__item"><nuxt-link class='navigation__link' to='/admin/auth'><span>04</span>Login</nuxt-link></li>                   
                    </ul>
            </nav>
        </div>
  </header>
</div>
</template>

<script>
export default {
  name: "KNav"
}
</script>




<style scoped>
.header-container {
  height: 60px;  
}
.nav-personalizada{
  position: relative;
  font-size: 3rem;
  color: #fff;  
}
.KHeader {
  margin: 0 auto;  
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.spacer {
  flex: 1;
}
.navigation-items {
  display: none;
}
@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.nav-item {
  margin: 0 10px;
}
.nav-item .nuxt-link{
  text-decoration: none;
  color: white;  
}
.nav-item nuxt-link:hover,
.nav-item nuxt-link:active,
.nav-item nuxt-link:active {
  color: red;
}
.navigation__checkbox {
  display: none; }
.navigation__button {
  background-color: #fff;
  height: 6.5rem;
  width: 6.5rem;
  position: fixed;
  top: 3.3rem;
  right: 5%;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer; }

.navigation__background {
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 3.5rem;
  right: 5%;
  background-image: radial-gradient(#000000d7, rgba(0, 0, 0, 0.884));
  z-index: 1000;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1); 
}

.navigation__nav {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

.navigation__list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%; }

.navigation__item {
  margin: 1rem; }

.navigation__link:link, .navigation__link:visited {
  font-family: 'Nothing You Could Do', cursive;
 
  color: #f7f7f7de;
  display: inline-block;
  font-size: 2.7rem;  
  padding: 1rem 2rem;
  color: #fff;
  text-decoration: none;
   background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
  background-size: 220%;
  transition: all .4s; }
  .navigation__link:link span, .navigation__link:visited span {
    margin-right: 1.5rem;
    display: inline-block; }

.navigation__link:hover, .navigation__link:active {
  background-position: 100%;
  color: #111;
  transform: translateX(1rem); }

.navigation__checkbox:checked ~ .navigation__background {
  transform: scale(80); }

.navigation__checkbox:checked ~ .navigation__nav {
  opacity: 1;
  width: 100%; }

.navigation__icon {
  position: relative;
  margin-top: 3.1rem; }
  .navigation__icon, .navigation__icon::before, .navigation__icon::after {
    width: 3.3rem;
    height: 0.32rem;
    background-color: rgb(34, 33, 33);
    display: inline-block; }
  .navigation__icon::before, .navigation__icon::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all .2s; }
  .navigation__icon::before {
    top: -.8rem; }
  .navigation__icon::after {
    top: .8rem; }

.navigation__button:hover .navigation__icon::before {
  top: -1rem; }

.navigation__button:hover .navigation__icon::after {
  top: 1rem; }

.navigation__checkbox:checked + .navigation__button .navigation__icon {
  background-color: transparent; }

.navigation__checkbox:checked + .navigation__button .navigation__icon::before {
  top: 0;
  transform: rotate(135deg); }

.navigation__checkbox:checked + .navigation__button .navigation__icon::after {
  top: 0;
  transform: rotate(-135deg); }
</style>
