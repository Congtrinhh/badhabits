<template>
  <footer class="footer" id="footer">
    <div class="top">
      <div class="container"><div class="content">BAD HABITS DIGITAL RETAIL STORE</div></div>
    </div>
    <div class="bottom">
      <div class="container">
        <section class="menu-wrapper">
          <a-collapse
            v-model:activeKey="collapseKey"
            :bordered="false"
            ghost
            v-if="isVisibleCollapse"
          >
            <a-collapse-panel key="collapseKey" :showArrow="false">
              <template #header>
                <div class="collapse-header-wrapper">
                  <div class="text">DANH MỤC MENU</div>
                  <div class="icon">
                    <svg x="0" y="0" viewBox="0 0 490.677 490.677">
                      <g>
                        <g xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                              d="M489.272,37.339c-1.92-3.307-5.44-5.333-9.259-5.333H10.68c-3.819,0-7.339,2.027-9.259,5.333    c-1.899,3.307-1.899,7.36,0.021,10.667l234.667,405.333c1.899,3.307,5.419,5.333,9.237,5.333s7.339-2.027,9.237-5.333    L489.251,48.005C491.149,44.72,491.149,40.645,489.272,37.339z"
                              fill="#000000"
                              data-original="#000000"
                              class=""
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </template>
              <ul class="list">
                <li class="list-item"><a href="">ĐỔI TRẢ SẢN PHẨM</a></li>
                <li class="list-item"><a href="">CHÍNH SÁCH ĐỔI TRẢ</a></li>
                <li class="list-item"><a href="">THÔNG TIN LIÊN HỆ</a></li>
                <li class="list-item"><a href="">CHÍNH SÁCH BẢO MẬT THÔNG TIN</a></li>
                <li class="list-item"><a href="">CHÍNH SÁCH BẢO MẬT THÔNG TIN THANH TOÁN</a></li>
                <li class="list-item"><a href="">ĐIỀU KHOẢN GIAO DỊCH CHUNG</a></li>
                <li class="list-item"><a href="">CHÍNH SÁCH VẬN CHUYỂN, GIAO HÀNG</a></li>
              </ul>
            </a-collapse-panel>
          </a-collapse>
          <ul class="list" v-if="!isVisibleCollapse">
            <li class="list-item"><a href="">ĐỔI TRẢ SẢN PHẨM</a></li>
            <li class="list-item"><a href="">CHÍNH SÁCH ĐỔI TRẢ</a></li>
            <li class="list-item"><a href="">THÔNG TIN LIÊN HỆ</a></li>
            <li class="list-item"><a href="">CHÍNH SÁCH BẢO MẬT THÔNG TIN</a></li>
            <li class="list-item"><a href="">CHÍNH SÁCH BẢO MẬT THÔNG TIN THANH TOÁN</a></li>
            <li class="list-item"><a href="">ĐIỀU KHOẢN GIAO DỊCH CHUNG</a></li>
            <li class="list-item"><a href="">CHÍNH SÁCH VẬN CHUYỂN, GIAO HÀNG</a></li>
          </ul>
        </section>
        <section class="social-contact-wrapper">
          <div class="title">THEO DÕI BAD HABITS® TẠI:</div>
          <ul class="list list-social">
            <li class="list-item instagram">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  width="25"
                  height="25"
                  x="0"
                  y="0"
                  viewBox="0 0 409.61 409.61"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                  class=""
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        d="M307.205,0h-204.8C46.09,0,0.005,46.085,0.005,102.4v204.81c0,56.3,46.085,102.4,102.4,102.4h204.8    c56.315,0,102.4-46.1,102.4-102.4V102.4C409.605,46.085,363.52,0,307.205,0z M375.47,307.21c0,37.632-30.612,68.265-68.265,68.265    h-204.8c-37.637,0-68.265-30.633-68.265-68.265V102.4c0-37.642,30.628-68.265,68.265-68.265h204.8    c37.653,0,68.265,30.623,68.265,68.265V307.21z"
                        fill="#ffffff"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </g>
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <circle
                        cx="315.755"
                        cy="93.865"
                        r="25.6"
                        fill="#ffffff"
                        data-original="#000000"
                        class=""
                      ></circle>
                    </g>
                  </g>
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        d="M204.805,102.4c-56.566,0-102.4,45.839-102.4,102.4c0,56.54,45.834,102.41,102.4,102.41c56.55,0,102.4-45.87,102.4-102.41    C307.205,148.239,261.355,102.4,204.805,102.4z M204.805,273.075c-37.699,0-68.265-30.566-68.265-68.275    s30.566-68.265,68.265-68.265s68.265,30.556,68.265,68.265S242.504,273.075,204.805,273.075z"
                        fill="#ffffff"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li class="list-item facebook">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  width="25"
                  height="25"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                  class=""
                >
                  <g>
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"
                      fill="#ffffff"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </a>
            </li>
            <li class="list-item tiktok">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  width="25"
                  height="25"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                  class=""
                >
                  <g>
                    <g xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m480.32 128.39c-29.22 0-56.18-9.68-77.83-26.01-24.83-18.72-42.67-46.18-48.97-77.83-1.56-7.82-2.4-15.89-2.48-24.16h-83.47v228.08l-.1 124.93c0 33.4-21.75 61.72-51.9 71.68-8.75 2.89-18.2 4.26-28.04 3.72-12.56-.69-24.33-4.48-34.56-10.6-21.77-13.02-36.53-36.64-36.93-63.66-.63-42.23 33.51-76.66 75.71-76.66 8.33 0 16.33 1.36 23.82 3.83v-62.34-22.41c-7.9-1.17-15.94-1.78-24.07-1.78-46.19 0-89.39 19.2-120.27 53.79-23.34 26.14-37.34 59.49-39.5 94.46-2.83 45.94 13.98 89.61 46.58 121.83 4.79 4.73 9.82 9.12 15.08 13.17 27.95 21.51 62.12 33.17 98.11 33.17 8.13 0 16.17-.6 24.07-1.77 33.62-4.98 64.64-20.37 89.12-44.57 30.08-29.73 46.7-69.2 46.88-111.21l-.43-186.56c14.35 11.07 30.04 20.23 46.88 27.34 26.19 11.05 53.96 16.65 82.54 16.64v-60.61-22.49c.02.02-.22.02-.24.02z"
                        fill="#ffffff"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li class="list-item youtube">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  width="25"
                  height="25"
                  x="0"
                  y="0"
                  viewBox="0 0 409.592 409.592"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                  class=""
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        d="M403.882,107.206c-2.15-17.935-19.052-35.133-36.736-37.437c-107.837-13.399-216.883-13.399-324.685,0    C24.762,72.068,7.86,89.271,5.71,107.206c-7.613,65.731-7.613,129.464,0,195.18c2.15,17.935,19.052,35.149,36.751,37.437    c107.802,13.399,216.852,13.399,324.685,0c17.684-2.284,34.586-19.502,36.736-37.437    C411.496,236.676,411.496,172.937,403.882,107.206z M170.661,273.074V136.539l102.4,68.27L170.661,273.074z"
                        fill="#ffffff"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
          <div class="title">ĐĂNG KÝ ĐỂ NHẬN NHIỀU ƯU ĐÃI</div>
          <div class="email-wrapper">
            <a-input-search
              v-model:value="registeringEmail"
              placeholder="Địa chỉ email"
              enter-button="Đăng ký"
              @search="registerEmail"
            />
          </div>
          <div class="hotline-wrapper title">
            HOTLINE: <a href="tel:0902.638.020">0902.638.020</a> -
            <a href="tel:0931.610.291">0931.610.291</a>
          </div>
          <div class="detail-info-wrapper">
            <div class="business"><b>HỘ KINH DOANH BAD HABITS - BAD RABBIT</b></div>
            <div class="headquarter-wrapper">
              <b>TRỤ SỞ KINH DOANH:</b> 57 NGUYỄN GIA TRÍ, PHƯỜNG 25, QUẬN BÌNH THẠNH
            </div>
            <div class="tax-number"><b>MÃ SỐ THUẾ:</b> xxxxxxxxxx - NGÀY CẤP: 08/11/2022</div>
            <div class="representor"><b>NGƯỜI ĐẠI DIỆN:</b> VÕ DUY KHA</div>
            <div class="email"><b>EMAIL:</b> tqcong@gmail.com</div>
          </div>
        </section>

        <section class="store-branch-wrapper">
          <div class="title">CHI NHÁNH CỬA HÀNG:</div>
          <div class="address-wrapper">
            <div class="address-title">SÀI GÒN</div>
            <ul class="list">
              <li class="list-item">117 Trần Đình Xu, phường Nguyễn Cư Trinh, Quận 1</li>
              <li class="list-item">26 Lý Tự Trọng, Phường Bến Nghé, Quận 1</li>
            </ul>
            <div class="address-title">HÀ NỘI</div>
            <ul class="list">
              <li class="list-item">
                21B Phố Lò Đúc, Phường Ngô Thì Nhậm, Quận Hai Bà Trưng, Hà Nội
              </li>
            </ul>
          </div>
          <div class="copyright">
            <strong>© 2023 BAD HABITS OFFICIAL STORE ALL RIGHT RESERVED.</strong>
          </div>
          <div class="registered-mark">
            <img src="@/assets/footer/registered-mark.webp" alt="register mark" />
          </div>
        </section>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const collapseKey = ref(1)
const isVisibleCollapse = computed(() => window.innerWidth < 992)

const registeringEmail = ref('')
function registerEmail(e: any) {
  console.log('registering email: ', e)
}
</script>

<style lang="scss" scoped>
.footer {
  padding-bottom: 30px;
  .top {
    padding: 20px;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    margin-bottom: 50px;
    .container {
      .content {
        font-size: 24px;
        line-height: 29px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        &::before,
        &::after {
          content: '"';
        }
      }
    }
  }
}

.bottom .container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 15px;
  padding-left: 15px;
}

section {
  & > .title {
    font-weight: bold;
  }
}

section.menu-wrapper {
  .list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    .list-item {
      a {
        text-transform: uppercase;
        display: block;
        font-weight: bold;
        text-align: right;
        font-size: 14px;
        text-decoration: none;
      }
    }
  }
}

section.social-contact-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .list-social {
    display: flex;
    align-items: center;
    gap: 10px;
    .list-item {
      a {
        display: flex;
        padding: 8px;
        background-color: #000;
        border-radius: 10px;
      }
    }
  }

  .hotline-wrapper {
    font-size: 15px;
    a {
      text-decoration: none;
      font-weight: bold;
    }
  }
  .detail-info-wrapper {
    font-size: 14px;
  }
}

section.store-branch-wrapper {
  & > .title:first-of-type {
    margin-bottom: 20px;
  }
  .address-wrapper {
    font-size: 14px;
    .address-title {
      font-weight: bold;
    }
    .list {
      .list-item {
        font-weight: bold;
      }
    }
  }
  .copyright {
    font-size: 14px;
    margin-bottom: 30px;
  }

  .registered-mark {
    text-align: center;
    img {
      height: 65px;
    }
  }
}

.collapse-header-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: -12px;
  margin-bottom: -12px;
  .text {
    font-weight: bold;
    font-size: 16px;
    color: var(--text-color);
  }
  .icon {
    width: 10px;
    height: 10px;
    display: flex;
  }
}

:deep(.ant-input-group-wrapper) {
  .ant-input {
    border-radius: 0;
    border: 2px solid #000;
  }
  .ant-btn {
    border-radius: 0;
  }

  .ant-input-search-button {
    border-start-end-radius: 0 !important;
    border-end-end-radius: 0 !important;
  }
}
@media (min-width: 992px) {
  .bottom {
    .container {
      flex-direction: row;
      justify-content: space-between;
      gap: 30px;
      max-width: 1440px;
    }
  }

  section.menu-wrapper {
    flex-basis: 20%;
    order: 3;
  }
  section.social-contact-wrapper {
    order: 1;
    flex-basis: 30%;
  }
  section.store-branch-wrapper {
    order: 2;
    flex-basis: 50%;
    .registered-mark {
      text-align-last: left;
    }
  }
}
</style>
