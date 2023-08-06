<template>
  <!-- <footer class="footer">
    <div class="footer__container">
      <div class="footer__left-section">
        <img class="footer__logo" src="/path/to/logo.png" alt="CuongSneaker Logo" />
        <p class="footer__company-name">CuongSneaker</p>
      </div>
      <div class="footer__right-section">
        <div class="footer__section">
          <p class="footer__section-title">Company</p>
          <ul class="footer__list">
            <li class="footer__list-item">
              <a href="#" class="footer__link">About</a>
            </li>
            <li class="footer__list-item">
              <a href="#" class="footer__link">Recruitment</a>
            </li>
            <li class="footer__list-item">
              <a href="#" class="footer__link">Fashion News</a>
            </li>
          </ul>
        </div>
        <div class="footer__section">
          <p class="footer__section-title">Social Connect</p>
          <div class="footer__social-icons">
            <v-icon class="footer__social-icon" size="24" color="white">mdi-facebook</v-icon>
            <v-icon class="footer__social-icon" size="24" color="white">mdi-instagram</v-icon>
            <v-icon class="footer__social-icon" size="24" color="white">mdi-zalo</v-icon>
            <v-icon class="footer__social-icon" size="24" color="white">mdi-tiktok</v-icon>
            <v-icon class="footer__social-icon" size="24" color="white">mdi-shopify</v-icon>
          </div>
        </div>
      </div>
    </div>
  </footer> -->
</template>

<style lang="scss" scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 20px;

  .footer__container {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .footer__left-section {
    display: flex;
    align-items: center;

    .footer__logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    .footer__company-name {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .footer__right-section {
    display: flex;

    .footer__section {
      margin-left: 40px;

      .footer__section-title {
        font-weight: bold;
        margin-bottom: 10px;
      }

      .footer__list {
        list-style-type: none;
        padding: 0;
        margin: 0;

        .footer__list-item {
          margin-bottom: 5px;

          .footer__link {
            text-decoration: none;
            color: white;
            font-weight: lighter;
            font-size: 14px;
          }
        }
      }
    }

    .footer__social-icons {
      display: flex;

      .footer__social-icon {
        margin-right: 10px;
      }
    }
  }
}
</style>
