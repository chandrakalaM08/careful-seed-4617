import "../Style/Paymentcopy.module.css";

export default function PaymentCopy() {
  return (
    <div id="container">
      <div id="head">
        <div>
          <span id="heading">Select a Payment method</span>
        </div>
      </div>
      <div id="payment">
        <div id="left">
          <div id="payviaupi">
            <div>
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574"
                alt="icon"
                className="leftimg"
              />
            </div>
            <div>
              <h3>UPI</h3>
              <p>Google Pay,PhonePe,Bhim UPI</p>
            </div>
          </div>

          <div id="payviacard">
            <div>
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494"
                alt="icon"
                class="leftimg"
              />
            </div>
            <div>
              <h3>Credit / Debit / ATM Card</h3>
              <p>All major card providers are supported</p>
            </div>
          </div>

          <div id="payviawallet">
            <div>
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014"
                alt="icon"
                class="leftimg"
              />
            </div>
            <div>
              <h3>Mobile Wallet</h3>
              <p>All major wallets are supported</p>
            </div>
          </div>

          <div id="payvianet">
            <div>
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529"
                alt="icon"
                class="leftimg"
              />
            </div>
            <div>
              <h3>Net Banking</h3>
              <p>All major Banks are supported</p>
            </div>
          </div>
        </div>
        <div class="vl"></div>
        <div id="right">
          <div id="rightside">
            <div id="upi">
              <div>
                <h3>
                  Select a UPI App{" "}
                  <i
                    class="fa-solid fa-user-shield"
                    style={{ fontSize: "40px", color: "green" }}
                  ></i>
                </h3>
              </div>
              <div>
                <h3>PREFERRED PAYMENT OPTIONS</h3>
                <div>
                  <img
                    src="https://zoomcar-assets.zoomcar.com/images/original/4aef7198237a74ac187c75d270f8d516cfaa5e9b.png?1584453889"
                    alt="error"
                  />
                  Google Pay
                </div>
                <hr></hr>
                <div>
                  <img
                    src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837"
                    alt="error"
                  />
                  PhonePe
                </div>
                <hr></hr>
                <div>
                  <img
                    src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070"
                    alt="error"
                  />
                  Paytm UPI
                </div>
              </div>
            </div>
            <div class="vl"></div>
            <div id="qrdiv">
              <h3>Scan QR Code</h3>
              <img src="./images/qrcode.jpg" alt="qr" id="qrcode" />
              <br />
              <div>
                <img
                  src="https://www.zoomcar.com/build/b0e4e02f6e16bd9e2a822cfe5348cab8.svg"
                  alt="error"
                />
                <img
                  src="https://www.zoomcar.com/build/02e647c26b018da43502ffbb4f3a5801.svg"
                  alt="error"
                />
                <img
                  src="https://www.zoomcar.com/build/3ef19a1071cc8527266cd278b3782406.svg"
                  alt="error"
                />
              </div>
              <button class="pbutton" id="ppbtn">
                Pay : <span id="headingin"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom">
        <div>
          <img
            src="https://zoomcar-assets.zoomcar.com/images/original/0e27560e692d8d95e0f2cce41ef6d50c5dce40f0.png?1584453313"
            alt="error"
          />
        </div>

        <div>
          <img
            src="https://zoomcar-assets.zoomcar.com/images/original/5403af9219d2cceb82302df4d7f3944a5e175903.png?1584453396"
            alt="error"
          />
        </div>

        <div>
          <img
            src="https://zoomcar-assets.zoomcar.com/images/original/5d72e13a3e88180595bce8246fa2110f4cf2bf5c.png?1584453438"
            alt="error"
          />
        </div>

        <div>
          <img
            src="https://zoomcar-assets.zoomcar.com/images/original/bf437ec8fa302637ad3d84959e440ed16d172bff.png?1584453417"
            alt="error"
          />
        </div>
      </div>
    </div>
  );
}
