import logo from './logo.svg';
import './App.css';
import img1 from './img1.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="option-link">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="40" height="40" rx="20" fill="white"/>
                  <path d="M21 21.8333C21.4602 21.8333 21.8333 21.4602 21.8333 21C21.8333 20.5398 21.4602 20.1667 21 20.1667C20.5397 20.1667 20.1666 20.5398 20.1666 21C20.1666 21.4602 20.5397 21.8333 21 21.8333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M26.8333 21.8333C27.2935 21.8333 27.6666 21.4602 27.6666 21C27.6666 20.5398 27.2935 20.1667 26.8333 20.1667C26.3731 20.1667 26 20.5398 26 21C26 21.4602 26.3731 21.8333 26.8333 21.8333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.1666 21.8333C15.6269 21.8333 16 21.4602 16 21C16 20.5398 15.6269 20.1667 15.1666 20.1667C14.7064 20.1667 14.3333 20.5398 14.3333 21C14.3333 21.4602 14.7064 21.8333 15.1666 21.8333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect x="1" y="1" width="40" height="40" rx="20" stroke="#D0D5DD" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 3"/>
              </svg>

          </div>
          <div className="share-link"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="40" height="40" rx="20" fill="white"/>
              <path d="M28.3261 21.5062C28.5296 21.3318 28.6313 21.2446 28.6686 21.1409C28.7013 21.0498 28.7013 20.9502 28.6686 20.8591C28.6313 20.7554 28.5296 20.6682 28.3261 20.4938L21.2672 14.4433C20.917 14.1431 20.7419 13.9931 20.5937 13.9894C20.4648 13.9862 20.3418 14.0428 20.2603 14.1427C20.1667 14.2576 20.1667 14.4883 20.1667 14.9495V18.5289C18.3878 18.8401 16.7597 19.7415 15.5498 21.0949C14.2307 22.5704 13.501 24.48 13.5 26.4591V26.9691C14.3745 25.9157 15.4663 25.0638 16.7006 24.4716C17.7889 23.9495 18.9653 23.6403 20.1667 23.5588V27.0505C20.1667 27.5117 20.1667 27.7424 20.2603 27.8573C20.3418 27.9572 20.4648 28.0138 20.5937 28.0106C20.7419 28.0069 20.917 27.8569 21.2672 27.5567L28.3261 21.5062Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="1" y="1" width="40" height="40" rx="20" stroke="#D0D5DD" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 3"/>
          </svg>
          </div>
        <img id="profile__image" src={logo} className="App-logo" alt="logo" />
        <h3 id="twitter">
          Josiah Orji
        </h3>

      </header>
        <div className="links">
            <div className="box"><a id="twiter__link" href="https://twitter.com/orji_josiah">Twitter Link</a></div>
            <div className="box" ><a target="_blank" id="btn__zuri" href="https://training.zuri.team/">Zuri Team</a></div>
                <div className="box"><a id="books" href="http://books.zuri.team">Zuri Books</a></div>
                    <div className="box"><a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=<josiah>">Python Books</a></div>
                        <div className="box"><a id="pitch" href="https://background.zuri.team">Background Check for Coders</a></div>
                            <div className="box"><a id="book__design" href="https://books.zuri.team/design-rules">Design Books</a></div>
        </div>
        <div className="tag">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.8752 9.2498C18.9106 9.2498 19.75 8.41041 19.75 7.37496C19.75 6.33952 18.9105 5.50012 17.8751 5.50012C16.8395 5.50012 16 6.33959 16 7.37512V9.2498H17.8752ZM12.625 9.2498C13.6605 9.2498 14.5 8.41033 14.5 7.3748V2.12512C14.5 1.08959 13.6605 0.250122 12.625 0.250122C11.5895 0.250122 10.75 1.08959 10.75 2.12512V7.3748C10.75 8.41033 11.5895 9.2498 12.625 9.2498Z" fill="#2EB67D"/>
                <path d="M2.12484 10.7502C1.08939 10.7502 0.250001 11.5896 0.250001 12.625C0.250001 13.6605 1.08947 14.4999 2.12492 14.4999C3.16045 14.4999 4 13.6604 4 12.6249V10.7502H2.12484ZM7.375 10.7502C6.33947 10.7502 5.5 11.5897 5.5 12.6252V17.8749C5.5 18.9104 6.33947 19.7499 7.375 19.7499C8.41053 19.7499 9.25 18.9104 9.25 17.8749V12.6252C9.25 11.5897 8.41053 10.7502 7.375 10.7502Z" fill="#E01E5A"/>
                <path d="M10.7501 17.8752C10.7501 18.9106 11.5895 19.75 12.625 19.75C13.6604 19.75 14.4998 18.9105 14.4998 17.8751C14.4998 16.8395 13.6603 16 12.6248 16L10.7501 16L10.7501 17.8752ZM10.7501 12.625C10.7501 13.6605 11.5896 14.5 12.6251 14.5L17.8748 14.5C18.9103 14.5 19.7498 13.6605 19.7498 12.625C19.7498 11.5895 18.9104 10.75 17.8748 10.75L12.6251 10.75C11.5896 10.75 10.7501 11.5895 10.7501 12.625Z" fill="#ECB22E"/>
                <path d="M9.2498 2.12484C9.2498 1.08939 8.41041 0.25 7.37496 0.25C6.33952 0.25 5.50012 1.08947 5.50012 2.12492C5.50012 3.16045 6.33959 4 7.37512 4L9.2498 4L9.2498 2.12484ZM9.2498 7.375C9.2498 6.33947 8.41033 5.5 7.3748 5.5L2.12512 5.5C1.08959 5.5 0.250122 6.33947 0.250122 7.375C0.250122 8.41053 1.08959 9.25 2.12512 9.25L7.3748 9.25C8.41033 9.25 9.2498 8.41053 9.2498 7.375Z" fill="#36C5F0"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z" fill="black"/>
            </svg>


        </div>
        <div className="footer">
            <svg className="foot" width="186" height="26" viewBox="0 0 186 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.11641 17.1595V17.0689L14.0646 4.51296V1.66814H0.719852V5.00435H9.12503V5.09488L0.357788 17.5733V20.4828H14.0906V17.1595H5.11641ZM25.3923 7.5517V13.8233C25.3923 15.0259 25.1078 15.9569 24.5647 16.6035C24.0087 17.2629 23.3233 17.5862 22.5216 17.5862C21.694 17.5862 21.0991 17.3535 20.7371 16.888C20.375 16.4224 20.207 15.5948 20.207 14.431V7.5517H16.7414V15.3362C16.7414 16.306 16.8449 17.1336 17.0776 17.832C17.3104 18.5302 17.6336 19.0863 18.0734 19.5001C18.513 19.9139 19.0043 20.2241 19.5733 20.4181C20.1293 20.6121 20.7759 20.7026 21.5 20.7026C22.2371 20.7026 22.9354 20.5604 23.5949 20.2501C24.2543 19.9397 24.8363 19.5001 25.3406 18.9052H25.3923V20.4828H28.8578V7.5517H25.3923ZM39.6682 7.3319C38.8922 7.3319 38.181 7.52588 37.5086 7.88792C36.8363 8.25008 36.2543 8.78017 35.763 9.45261H35.7241V7.5517H32.2586V20.4828H35.7241V14.4828C35.7241 13.5001 36.0087 12.6854 36.5905 12.0518C37.1725 11.4311 37.9871 11.1078 39.0215 11.1078C39.2802 11.1078 39.5906 11.1207 39.9397 11.1466V7.34492C39.888 7.34492 39.7975 7.3319 39.6682 7.3319ZM44.0777 5.72848C44.6595 5.72848 45.1638 5.52158 45.5906 5.10779C46.0044 4.694 46.2242 4.20262 46.2242 3.60779C46.2242 3.03883 46.0044 2.53452 45.5906 2.12073C45.1638 1.70694 44.6595 1.50004 44.0777 1.50004C43.4828 1.50004 42.9656 1.70694 42.5518 2.12073C42.138 2.53452 41.931 3.03883 41.931 3.60779C41.931 3.99572 42.0216 4.3578 42.2156 4.68107C42.3966 5.00435 42.6552 5.26293 42.9914 5.44401C43.3276 5.63799 43.6897 5.72848 44.0777 5.72848ZM42.3448 20.4828H45.8104V7.5517H42.3448V20.4828ZM63.8751 20.4828H67.625V1.66814H63.8751V20.4828ZM79.2241 7.3319C78.4225 7.3319 77.6596 7.50006 76.9354 7.82326C76.2113 8.14657 75.5906 8.61212 75.0733 9.2199H75.0345V7.5517H71.569V20.4828H75.0345V13.9785C75.0345 12.8534 75.2931 11.9871 75.8233 11.3664C76.3535 10.7587 77.0647 10.4483 77.9698 10.4483C78.8103 10.4483 79.431 10.694 79.8448 11.1724C80.2457 11.6638 80.4526 12.4914 80.4526 13.681V20.4957H83.9181V12.8147C83.9181 11.8449 83.8018 11.0044 83.5819 10.2802C83.3492 9.56903 83.0259 9.00009 82.5992 8.57328C82.1724 8.15948 81.6811 7.84919 81.125 7.6423C80.569 7.4354 79.9354 7.3319 79.2241 7.3319ZM91.263 20.7026C92.0517 20.7026 92.6983 20.6379 93.2026 20.4957C93.694 20.3664 94.1983 20.1595 94.6897 19.8879L93.7975 17.1207C93.2026 17.4311 92.6595 17.5733 92.1681 17.5733C91.7543 17.5733 91.4699 17.444 91.2888 17.1724C91.1078 16.9138 91.0302 16.4871 91.0302 15.9182V10.4224H94.5474V7.5517H91.0302V2.94832L87.5647 3.32331V7.5517H86.0388V10.4224H87.5647V16.3966C87.5647 17.819 87.888 18.8923 88.5474 19.6164C89.2069 20.3406 90.1121 20.7026 91.263 20.7026ZM108.526 13.9009C108.526 12.6465 108.254 11.5216 107.737 10.5259C107.207 9.53019 106.457 8.75435 105.5 8.18541C104.53 7.61637 103.418 7.3319 102.177 7.3319C101.272 7.3319 100.418 7.50006 99.6293 7.82326C98.8277 8.15948 98.1552 8.61212 97.5863 9.19397C97.0173 9.77592 96.5776 10.4871 96.2543 11.3147C95.9181 12.1423 95.763 13.0474 95.763 14.0043C95.763 15.3233 96.0474 16.5 96.6294 17.5216C97.2112 18.5561 98.013 19.3449 99.0215 19.8879C100.03 20.431 101.155 20.7026 102.422 20.7026C103.664 20.7026 104.75 20.4828 105.707 20.0432C106.651 19.6035 107.414 19.0087 108.009 18.2587L105.759 16.1638C104.944 17.1466 103.909 17.638 102.668 17.6251C101.841 17.6251 101.129 17.3923 100.547 16.9526C99.9655 16.5129 99.5776 15.9182 99.3707 15.1423H108.435C108.487 14.9354 108.526 14.5216 108.526 13.9009ZM102.293 10.3837C103.017 10.3837 103.625 10.5906 104.103 10.9914C104.569 11.3923 104.905 11.9483 105.086 12.6465H99.3837C99.5776 11.9225 99.9267 11.3535 100.444 10.9656C100.961 10.5776 101.569 10.3837 102.293 10.3837ZM118.702 7.3319C117.926 7.3319 117.216 7.52588 116.543 7.88792C115.871 8.25008 115.289 8.78017 114.797 9.45261H114.758V7.5517H111.294V20.4828H114.758V14.4828C114.758 13.5001 115.043 12.6854 115.625 12.0518C116.207 11.4311 117.022 11.1078 118.057 11.1078C118.315 11.1078 118.625 11.1207 118.975 11.1466V7.34492C118.923 7.34492 118.832 7.3319 118.702 7.3319ZM128.879 7.3319C128.078 7.3319 127.315 7.50006 126.591 7.82326C125.867 8.14657 125.246 8.61212 124.728 9.2199H124.689V7.5517H121.225V20.4828H124.689V13.9785C124.689 12.8534 124.949 11.9871 125.478 11.3664C126.009 10.7587 126.72 10.4483 127.625 10.4483C128.465 10.4483 129.087 10.694 129.5 11.1724C129.901 11.6638 130.107 12.4914 130.107 13.681V20.4957H133.573V12.8147C133.573 11.8449 133.457 11.0044 133.237 10.2802C133.004 9.56903 132.681 9.00009 132.255 8.57328C131.828 8.15948 131.337 7.84919 130.78 7.6423C130.224 7.4354 129.591 7.3319 128.879 7.3319ZM141.073 20.7026C142.702 20.7026 143.943 20.3406 144.798 19.5905C145.651 18.8534 146.091 17.8836 146.091 16.6811C146.091 16.3707 146.064 16.0733 146.012 15.8147C145.845 14.9612 145.34 14.263 144.513 13.7457C144.022 13.4354 143.065 13.0216 141.643 12.4914C140.956 12.2328 140.465 12 140.155 11.7931C139.845 11.5862 139.703 11.3535 139.703 11.0949C139.703 10.7845 139.832 10.5518 140.09 10.3837C140.35 10.2155 140.633 10.1251 140.97 10.1251C141.461 10.1251 141.978 10.2415 142.521 10.4742C143.065 10.7069 143.569 11.0431 144.06 11.4958L145.741 8.96125C145.004 8.39231 144.255 7.97852 143.504 7.71987C142.742 7.46122 141.914 7.3319 141.008 7.3319C140.129 7.3319 139.328 7.50006 138.629 7.81035C137.931 8.13366 137.375 8.5863 136.961 9.18106C136.547 9.77592 136.354 10.4483 136.354 11.2113C136.354 11.6251 136.393 12 136.495 12.3363C136.587 12.6854 136.728 12.9957 136.909 13.2543C137.091 13.5259 137.297 13.7716 137.53 13.9785C137.763 14.1983 138.035 14.3923 138.358 14.5733C138.668 14.7544 138.978 14.8966 139.289 15.0259C139.599 15.1552 139.948 15.2846 140.336 15.4138C140.944 15.6208 141.397 15.7759 141.707 15.9052C142.017 16.0346 142.25 16.1768 142.431 16.332C142.599 16.4871 142.69 16.6552 142.69 16.8491C142.69 17.1724 142.548 17.4311 142.263 17.6251C141.978 17.832 141.591 17.9225 141.099 17.9225C139.78 17.9225 138.591 17.4182 137.517 16.4095L135.836 18.8018C137.272 20.069 139.018 20.7026 141.073 20.7026ZM156.487 7.3319C155.647 7.3319 154.871 7.48715 154.147 7.78453C153.422 8.09482 152.802 8.53454 152.284 9.11639H152.233V0.982788H148.768V20.4828H152.233V13.9268C152.233 12.7888 152.492 11.9354 153.035 11.3405C153.564 10.7457 154.302 10.4483 155.258 10.4483C156.112 10.4483 156.746 10.694 157.159 11.1595C157.573 11.638 157.781 12.4527 157.781 13.5905V20.4957H161.259V12.7112C161.259 11.7543 161.142 10.9138 160.909 10.2155C160.677 9.51728 160.341 8.94834 159.914 8.53454C159.475 8.12075 158.982 7.82326 158.414 7.62939C157.845 7.4354 157.211 7.3319 156.487 7.3319ZM166.457 5.72848C167.039 5.72848 167.543 5.52158 167.97 5.10779C168.384 4.694 168.603 4.20262 168.603 3.60779C168.603 3.03883 168.384 2.53452 167.97 2.12073C167.543 1.70694 167.039 1.50004 166.457 1.50004C165.862 1.50004 165.345 1.70694 164.931 2.12073C164.517 2.53452 164.31 3.03883 164.31 3.60779C164.31 3.99572 164.401 4.3578 164.595 4.68107C164.775 5.00435 165.035 5.26293 165.37 5.44401C165.707 5.63799 166.069 5.72848 166.457 5.72848ZM164.725 20.4828H168.19V7.5517H164.725V20.4828ZM179.298 7.3319C177.643 7.3319 176.336 7.90094 175.38 9.03882H175.328V7.5517H171.862V25.7199H175.328V19.0345H175.38C176.298 20.1466 177.564 20.7026 179.194 20.7026C180.074 20.7026 180.901 20.5475 181.664 20.2241C182.426 19.9139 183.086 19.4612 183.629 18.8923C184.172 18.3233 184.612 17.6121 184.922 16.7845C185.232 15.9569 185.388 15.0388 185.388 14.0561C185.388 13.2803 185.284 12.5561 185.091 11.8578C184.884 11.1595 184.599 10.5388 184.237 9.99573C183.875 9.45261 183.436 8.97416 182.944 8.57328C182.439 8.1725 181.871 7.8621 181.25 7.65521C180.63 7.44831 179.97 7.3319 179.298 7.3319ZM178.561 17.5992C177.926 17.5992 177.358 17.4569 176.841 17.1724C176.323 16.888 175.923 16.4613 175.625 15.9182C175.328 15.375 175.185 14.7673 175.185 14.069C175.185 13.5647 175.263 13.0863 175.431 12.6336C175.599 12.194 175.832 11.806 176.129 11.4828C176.414 11.1724 176.775 10.9138 177.189 10.7328C177.603 10.5518 178.069 10.4483 178.561 10.4483C179.504 10.4483 180.293 10.7845 180.927 11.444C181.548 12.1164 181.871 12.9828 181.871 14.069C181.871 15.1164 181.56 15.9699 180.94 16.6164C180.319 17.276 179.53 17.5992 178.561 17.5992Z" fill="black"/>
                <path d="M55.222 20.8858C56.2888 20.8858 57.2134 20.5066 57.972 19.748C58.7306 18.9893 59.1336 18.0885 59.1336 17.0217C59.1336 15.9786 58.7306 15.054 57.972 14.2954C57.2134 13.5368 56.2888 13.1337 55.222 13.1337C54.1077 13.1337 53.1594 13.513 52.4008 14.2717C51.6422 15.0303 51.2629 15.9549 51.2629 17.0217C51.2629 18.1122 51.6422 19.0131 52.4008 19.7717C53.1594 20.5303 54.1077 20.8858 55.222 20.8858Z" fill="#E7332B"/>
            </svg>

            <p>HNG Internship 9 Frontend Task</p>
            <img src={img1} className="f-img" alt=""/>


        </div>
    </div>
  );
}

export default App;
