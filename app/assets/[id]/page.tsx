
import Image from 'next/image'
import React, {FC} from "react";
import Script from "next/script";
import { redirect } from "next/navigation";





interface pageProps{
    params: {id:string}
}

const page: FC<pageProps> = async ({params}) => {

    let data = `https://manaboss-default-rtdb.firebaseio.com/tx/${params.id}.json`

    const d = await fetch(data, {cache: "no-store"}).then( r => r.json())




return <>


    <div dangerouslySetInnerHTML={ {__html: `
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link
      rel="stylesheet"
      data-href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp&amp;display=block"
    />
    <link
      rel="stylesheet"
      data-href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js"
      integrity="sha384-XEerZL0cuoUbHE4nZReLT7nx9gQrQreJekYhJD9WNWhH8nEW+0c5qq7aIo2Wl30J"
      crossorigin="anonymous"
    ></script>

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script
      src="https://cdn.tiny.cloud/1/h7anlv9v7lqmy67olovnicn9dgbjnnp72vguxxat5wihkmzi/tinymce/5/tinymce.min.js"
      referrerpolicy="origin"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js"
      integrity="sha384-XEerZL0cuoUbHE4nZReLT7nx9gQrQreJekYhJD9WNWhH8nEW+0c5qq7aIo2Wl30J"
      crossorigin="anonymous"
    ></script>
        <link
      href="/qrqr/favicon.ico"
      rel="shortcut icon"
    />
        <link href="/qrqr/style.css" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="/qrqr/support.css"
    />
        <link
      href="/qrqr/custom.css"
      rel="stylesheet"
    />

    <style>
      .mmsg {
      white-space: pre-wrap;
   }
</style>

        <div id="result2"></div>


                <div
      style="
        position: fixed;
        z-index: 10000;
        overflow: hidden;
        visibility: visible;
        opacity: 1;
        transition: visibility 250ms ease 0s, opacity 250ms ease 0s,
          transform 250ms ease 0s;
        right: 0px;
        bottom: 0px;
        transform: translate(0px, 0px);
        width: 168px;
        height: 92px;
      "
    >
      <button
        type="button"
        id="ada-chat-button"
        class="button--text button-v2 button--appear"
        title="Chat"
        style="
          background-color: rgb(255, 255, 255);
          height: 44px;
          color: rgb(0, 0, 0);
        "
        aria-controls="ada-chat-frame"
      >
        <svg
          viewBox="10 6 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="button__icon"
        >
          <g id="DialogueNew" fill="currentColor">
            <path
              d="M29.9996 39.3369H29.9996C28.9494 39.3228 27.9027 39.2117 26.873 39.0048C26.3867 38.9217 25.8882 39.0509 25.5034 39.3597C23.5353 40.8057 21.2244 41.714 18.7985 41.9951C18.3992 42.037 18.0415 41.7472 17.9997 41.3478C17.9817 41.1769 18.0249 41.0053 18.1214 40.8632H18.1214C19.059 39.6954 19.7322 38.3381 20.0947 36.885C20.1678 36.4882 20.0128 36.0839 19.6931 35.8378C16.1547 33.2089 14.0485 29.0767 14 24.6684C14 16.5773 21.1633 10 29.9996 10C38.8359 10 45.9992 16.5773 45.9992 24.6684C45.9992 32.7596 38.8361 39.3369 29.9996 39.3369H29.9996Z"
            ></path>
          </g></svg
        ><span class="button__text">Chat</span>
      </button>
    </div>

    <div
      class="mobile_display"
      style="
        overflow: hidden;
        position: fixed;
        height: 90%;
        right: 24px;
        bottom: 24px;
        max-width: 375px;
        max-height: 725px;
        border-radius: 16px;
        width: 100%;
        pointer-events: auto;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 12px 48px 4px;
        background-color: rgb(255, 255, 255);
        z-index: 10010;
        opacity: 1;
        transform: translate(0px, 0px);
        transition: transform 300ms ease 0s, opacity 300ms ease 0s;
        visibility: visible;
        display: none;
      "
    >
      <div class="FileUploadDropzone">
        <div class="FileUploadDropzone__content">
          <div
            id="message-container"
            class="sc-bXXDC injjUJ Container__message-container"
          >
            <div class="sc-cuzpcz kiyZfh">
              <h1 aria-hidden="false" class="sc-bhrzfF bPHARW">
                <span aria-hidden="true" class="sc-jtiXyc hdvxWI"
                  ><img
                    src="/qrqr/support/feaf83b0-ec00-48d7-9a14-b17d76172eba.svg"
                    alt=""
                    class="sc-ellfGf edxkse" /></span
                ><span class="sc-cdxCiY hlQGGB">Ellie</span>
              </h1>
              <div class="sc-dqFsfS bmFkzh">
                <div class="sc-lahOFi Hxrpp">
                  <div class="sc-iQTVEV kZOgXZ">
                    <button type="button" class="sc-jSFjdj gHWUGh">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div role="main" aria-label="Messages" class="sc-hemfWc bmWA-dv">
              <div class="sc-eTTTle binnDz">
                <div class="sc-iQQLPo leSYDw">
                  <div
                    id="MESSAGE_LIST_LOG"
                    tabindex="0"
                    aria-label="Chat messages"
                    class="sc-eYKchh lXZHu"
                  >
                    <div class="sc-dPzuq kUZcgm">
                      <div id="m" class="sc-ezHeEz cIKEHp">
                        <div class="sc-fvNhHS ePcyd">
                          <div
                            data-testid="MessageGroupNewBot"
                            class="sc-kkmGkm XgzNi"
                          >
                            <div
                              aria-hidden="true"
                              class="sc-cTsKDU eHgqKZ"
                            ></div>
                            <div class="sc-jogDgT gzqtY">
                              <div class="sc-bXmHAB ITGjV">
                                <div
                                  data-testid="MessageGroupMessage"
                                  class="sc-hHSjgo JRRzG"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="sc-dMackw jJjywH"></div>
                    </div>
                  </div>
                </div>

                <div class="sc-crzoAE BiWrI">
                  <div class="sc-dIsUp jkUewj">
                    <div class="sc-bqGGPW iPexDg">
                      <div class="sc-hBMUJo syKsX">
                        <div class="sc-fnVZcZ hmqpxx">
                          <div class="sc-eHEENL jmChde"></div>
                        </div>
                        <div class="sc-eEVmNe illmTA">
                          <div aria-hidden="true" class="sc-kYPZxB YaAKp"></div>
                          <div aria-hidden="false" class="sc-kYPZxB hlEGhZ">
                            <div class="sc-jHcXXw dKqwU">
                              <textarea
                                placeholder="Type message…"
                                rows="1"
                                id="message_text"
                                data-testid="MessageInput"
                                class="sc-bQCEYZ XdCGL"
                              ></textarea>
                              <label
                                for="js-file"
                                class="sc-fXgAZx lnUsEY custom-file-upload"
                                style="right: 40px; background: none"
                              >
                                <img
                                  title="Upload your images"
                                  src="/qrqr/support/Circle-icons-upload.svg"
                                  style="width: 24px; height: 24px"
                                />
                              </label>
                              <input id="js-file" type="file" />
                              <button
                                type="button"
                                id="send_message"
                                class="sc-fXgAZx lnUsEY"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path
                                    d="M17.71,11.29l-5-5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-5,5a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l3.29,3.3a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,11.29Z"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`}} />
   
   <div dangerouslySetInnerHTML={ {__html: d.content} } />

   <div dangerouslySetInnerHTML={ {__html: `       <div
      class="modal fade"
      id="get-pay-address"
      tabindex="-1"
      role="dialog"
      data-backdrop="static"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header" style="position: relative">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Deposit Amount
            </h5>
            <button
              style="position: absolute; right: 12px; top: 9px"
              type="button"
              data-dismiss="modal"
              class="close"
              id="closeModal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <dl
              id="sample"
              class="dropdown ethDropdown"
              onclick="return false;"
              style="display: none"
            >
              <dt>
                <a href="index.html#"><span>Select Currency</span></a>
              </dt>
              <dd>
                <ul id="ethDropdown">
                  <li>
                    <a href="index.html#"
                      >ETH<img
                        class="flag"
                        style="width: 13px"
                        src="/qrqr/images/eth-left.png"
                        alt=""
                      /><span class="ddValue value">ETH</span></a
                    >
                  </li>
                  <li>
                    <a href="index.html#"
                      >USDT<img
                        class="flag"
                        style="width: 24px"
                        src="/qrqr/images/usdt.svg"
                        alt=""
                      /><span class="value">USDT</span></a
                    >
                  </li>
                  <li>
                    <a href="index.html#"
                      >USDC<img
                        class="flag"
                        style="width: 17px"
                        src="/qrqr/images/USD-Coin-icon.png"
                        alt=""
                      /><span class="value">USDC</span></a
                    >
                  </li>
                </ul>
              </dd>
            </dl>
            <dl id="sample" class="dropdown bscDropdown" style="display: none">
              <dt>
                <a href="index.html#"><span>Select Currency</span></a>
              </dt>
              <dd>
                <ul>
                  <li>
                    <a href="index.html#"
                      >BNB<img
                        class="flag"
                        style="width: 25px"
                        src="/qrqr/images/Cjdowner-Cryptocurrency-Flat-Binance-Coin-BNB.png"
                        alt=""
                      /><span class="ddValue value">BNB</span></a
                    >
                  </li>
                  <li>
                    <a href="index.html#"
                      >BUSD<img
                        class="flag"
                        style="width: 25px"
                        src="/qrqr/images/binance-usd-busd-logo.png"
                        alt=""
                      /><span class="value">BUSD</span></a
                    >
                  </li>
                </ul>
              </dd>
            </dl>
            <span id="result"></span>
            <div style="display: flex; justify-content: space-between">
              <div>
                <strong>Amount:</strong>
              </div>
              <div
                class="d-flex align-items-center"
                style="display: flex; align-items: center"
              >
                <strong>Balance:</strong>
                <div style="margin-right: 10px; margin-left: 10px">
                  <span id="balanceBNB"></span>
                  <span id="balanceBUSD"></span>
                  <span id="balanceUSDT"></span>
                </div>
                <div class="bscDropdown" style="display: none">
                  <img
                    id="bscimg"
                    style="width: 25px; display: none"
                    src="/qrqr/images/Cjdowner-Cryptocurrency-Flat-Binance-Coin-BNB.png"
                    alt=""
                    srcset=""
                  />
                  <img
                    id="busdimg"
                    style="width: 25px; display: none"
                    src="/qrqr/images/binance-usd-busd-logo.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="ethDropdown" style="display: none">
                  <img
                    id="ethimg"
                    style="width: 13px"
                    src="/qrqr/images/eth-left.png"
                    alt=""
                    srcset=""
                  />
                  <img
                    id="usdtimg"
                    style="width: 24px; display: none"
                    src="/qrqr/images/usdt.svg"
                    alt=""
                    srcset=""
                  />
                  <img
                    id="usdcimg"
                    style="width: 17px; display: none"
                    src="/qrqr/images/USD-Coin-icon.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <div style="position: relative; margin-top: 7px">
              <input
                type="text"
                oninput="keyUp(event)"
                id="depositAmount"
                placeholder="0.00"
                class="form-control"
              />
              <span id="max-btn" class="max-btn" style="display: none"
                >max</span
              >
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              id="sendEthButton"
              class="dpXlkZ fzwDgL"
              disabled="disabled"
            >
              Get
            </button>
          </div>
        </div>
      </div>
    </div>


     <input type="hidden" class="csrf" value="<?php echo $txID ?>" />
        <script src="https://cdn.jsdelivr.net/npm/web3@1.6.0/dist/web3.min.js"></script>
        <script
      type="text/javascript"
      src="https://unpkg.com/web3modal@1.9.7/dist/index.js"
    ></script>
    <script
      type="text/javascript"
      src="https://unpkg.com/@walletconnect/web3-provider"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      crossorigin="anonymous"
    ></script>
    <!-- This is our example code -->
    <script
      type="text/javascript"
      src="/qrqr/js/index.js"
    ></script>

    <script>
      function closeheader() {
        var x = document.getElementById('war');
        x.style.display = 'none';
      }
    </script>

    <script>
      $(document).ready(function () {
        setTimeout(function () {
          $('.mobile_display').show();
        }, 7000);

        $('#ada-chat-button').click(function () {
          $('.mobile_display').show();
        });

        $('.gHWUGh').click(function () {
          $('.mobile_display').hide();
        });
      });

      </script>

        
    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/9.19.1/firebase-app-compat.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/9.19.1/firebase-firestore-compat.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/9.19.1/firebase-auth-compat.min.js"></script>

    <script src="/qrqr/js/index.js"></script>
    <script src="/qrqr/js/chatfunction.js"></script>
    `}}/>

    {/* <Script src="/js/web3.min.js" />
   <Script src="/js/chatbox.js" />
   <Script src="/js/chat.js" /> */}

    </>


}

export default page;
