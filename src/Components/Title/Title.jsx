import React, { useEffect } from "react";
import "./Title.scss";

function Title() {
  const masks = [
    "a-1",
    "a-2",
    "n",
    "o",
    "p-1",
    "p-2",
    "e",
    "n-2",
    "s",
    "o-2",
    "u",
    "r",
    "c",
    "e-2",
    "p-2-1",
    "p-2-2",
    "r-2",
    "o-3",
    "j-1",
    "j-2",
    "j-3",
    "e-3",
    "c-t-1",
    "c-t-2",
  ];
  useEffect(() => {
    masks.forEach((mask) => {
      const id = `#mask-${mask}`;

      let path = document.querySelector(id);

      const length = path.getTotalLength();
      console.log(length, id);
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });
  }, []);

  return (
    <div className="title__container">
      <svg
        viewBox="0 0 560 536"
        fill="none"
        className="svg-draw"
      >
        <g>
          <path
            className="mask"
            d="M5.48409 109.296C3.47891 109.296 8.26538 106.366 9.61023 105.38C17.1383 99.859 22.4104 94.5505 27.7232 86.777C43.5076 63.682 53.6961 38.2022 64.6485 12.6467C65.0114 11.8001 68.0391 1.9831 68.355 5.93297C69.2511 17.1334 67.3144 28.3766 66.4668 39.5015C64.6075 63.9047 67.1645 98.707 97.3778 100.484"
            stroke="#B3401A"
            id="mask-a-1"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            className="mask"
            d="M19.3311 71.5314C20.8216 67.5568 48.1416 70.2144 52.3401 69.7131C71.0712 67.4766 90.0956 66.8418 108.707 63.9785"
            stroke="#B3401A"
            id="mask-a-2"
            stroke-width="10"
            stroke-linecap="round"
          />
        </g>
        <path
          className="mask"
          d="M115 85.6958C115 76.5395 123.88 64.3486 133.812 63.107C138.429 62.5299 142.648 105.463 145.282 102.83C150.804 97.3076 158.272 56.5596 172.906 63.8763C187.391 71.119 174.309 98.2839 195.564 98.2839"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-n"
        />{" "}
        <path
          className="mask"
          d="M288.685 114.189C268.14 120.276 246.049 109.906 232.388 94.5372C208.089 67.2006 235.085 32.2059 266.446 30.1277C296.875 28.1113 318.705 50.2096 323.163 79.4314C326.801 103.283 305.765 115.448 283.65 115.448"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-o"
        />
        <g>
          <path
            className="mask"
            d="M351.059 78.1207C351.059 73.3652 351.059 68.6096 351.059 63.8541C351.059 23.3972 349.687 144.829 346.024 185.12"
            stroke="#B3401A"
            stroke-width="10"
            stroke-linecap="round"
            id="mask-p-1"
          />
          <path
            className="mask"
            d="M335 59.3653C335 42.058 367.689 37.58 380.178 39.3641C391.856 41.0325 407.953 48.6343 409.9 61.8131C412.26 77.7879 390.067 88.211 378.01 91.605C373.77 92.7984 345.141 100.145 344.511 90.6959C344.024 83.3869 352.946 78.2525 358.638 76.5692C380.961 69.9667 401.176 97.4336 418.082 108.459"
            stroke="#B3401A"
            stroke-width="10"
            stroke-linecap="round"
            id="mask-p-2"
          />
        </g>
        <path
          className="mask"
          d="M474 78.6958C474 69.5395 482.88 57.3486 492.812 56.107C497.429 55.5299 501.648 98.4629 504.282 95.8297C509.804 90.3076 517.272 49.5596 531.906 56.8763C546.391 64.119 533.309 91.2839 554.564 91.2839"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-e"
        />{" "}
        <path
          className="mask"
          d="M426.367 63.5274C435.477 63.5274 466.027 64.643 456.159 48.7013C449.177 37.424 438.746 44.9995 433.919 53.1771C429.214 61.1498 420.296 74.9524 425.667 84.9273C430.191 93.3286 445.624 92.8696 453.431 92.3403C464.739 91.5737 469.948 84.4281 474.202 74.8567"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-n-2"
        />
        <path
          className="mask"
          d="M94.0134 133.45C94.0134 114.871 58.3592 135.453 52.7521 140.863C33.8815 159.069 48.4887 170.537 66.4593 180.725C84.0241 190.683 110.431 204.518 107.161 228.98C103.877 253.548 69.0178 263.707 49.1156 267.024C35.6823 269.263 -1.46574 268.948 9.39288 244.365C15.092 231.463 44.5833 221.363 55.8293 232.477C70.4708 246.946 34.3736 268.88 26.0373 274.437"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-s"
        />
        <path
          className="mask"
          d="M169.906 249.126C181.455 249.126 157.861 260.21 155.639 260.875C133.986 267.356 122.092 256.608 120.113 234.44C118.037 211.193 145.053 195.242 166.409 202.969C177.75 207.073 189.635 217.93 190.746 230.524C192.417 249.457 171.144 259.692 158.577 269.267"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-o-2"
        />
        <path
          className="mask"
          d="M215.623 216.347C215.623 212.31 213.839 213.939 211.288 216.767C204.663 224.112 198 233.42 198 243.622C198 263.909 221.822 264.49 233.667 251.385C239.745 244.66 242.817 236.136 244.017 227.257C244.577 223.112 244.576 218.912 244.576 214.739C244.576 212.897 245.878 207.912 244.576 209.214C240.943 212.848 239.977 227.643 239.821 232.432C239.536 241.141 243.558 248.969 247.094 256.63"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-u"
        />
        <path
          className="mask"
          d="M267.786 217.423C267.786 209.827 267.786 235.031 267.786 236.655C267.786 238.634 263.779 261.312 264.01 252.53C264.729 225.193 294.015 209.219 318.139 219.940"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-r"
        />
        <path
          className="mask"
          d="M359.427 211.073C357.724 203.409 338.359 212.254 334.88 214.22C326.4 219.013 319.565 228.844 318.166 238.488C316.202 252.012 332.131 257.948 343.202 258.769C360.021 260.014 367.226 257.727 378.309 245.061"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-c"
        />
        <path
          className="mask"
          d="M390.793 230.047C401.018 230.047 421.308 228.113 428.278 219.207C434.712 210.986 418.623 205.673 413.452 205.15C396.091 203.394 388.462 217.315 385.408 233.054C383.342 243.703 389.309 250.762 398.906 255.083C423.409 266.116 450.771 255.25 475.134 250.188"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-e-2"
        />
        <g>
          <path
            className="mask"
            d="M51.2136 341.154C36.9961 341.154 42.4019 391.919 42.4019 402.137C42.4019 435.519 42.4019 468.901 42.4019 502.283"
            stroke="#B3401A"
            stroke-width="10"
            stroke-linecap="round"
            id="mask-p-2-1"
          />
          <path
            className="mask"
            d="M24.7784 415.425C16.1158 399.281 8.67975 380.839 11.7706 361.995C16.1943 335.025 50.0891 326.444 72.6135 322.832C89.1019 320.187 110.99 316.634 126.743 324.51C136.419 329.349 143.274 341.917 137.932 352.344C126.336 374.979 86.9037 379.055 65.0606 382.696"
            stroke="#B3401A"
            stroke-width="10"
            stroke-linecap="round"
            id="mask-p-2-2"
          />
        </g>{" "}
        <path
          className="mask"
          d="M157.331 341.294C157.331 359.654 156.575 414.417 153.834 396.262C151.865 383.215 153.01 363.654 161.317 352.903C167.735 344.598 180.5 335 191.319 335"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-r-2"
        />
        <path
          className="mask"
          d="M236.538 389.927C247.814 392.425 222.381 398.145 220.068 398.314C197.526 399.959 188.237 386.894 191.098 364.822C194.098 341.676 223.924 331.944 243.104 344.107C253.289 350.565 262.546 363.735 260.907 376.271C258.445 395.118 235.461 400.511 221.121 407.142"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-o-3"
        />
        <g>
          <path
            className="mask"
            d="M286.837 351.812C285.186 366.676 283.335 380.928 285.159 396.43C287.764 418.577 295.432 439.96 299.425 461.888C302.328 477.826 305.922 494.397 300.684 510.283C296.32 523.521 281.665 529.151 268.654 530.004C253.629 530.99 240.301 519.693 235.366 505.947C223.358 472.508 259.871 448.416 281.802 429.858"
            stroke="#B3401A"
            stroke-width="10"
            stroke-linecap="round"
            id="mask-j-1"
          />
          <path
            className="mask"
            d="M300.684 343C289.277 343 255.435 347.668 266.836 348.035C282.358 348.536 297.972 346.445 313.272 344.259"
            stroke="#B3401A"
            stroke-width="10"
            stroke-linecap="round"
            id="mask-j-2"
          />
          <path
            className="mask"
            d="M294.165 297.096C295.856 297.265 297.559 297.944 299.201 298.355"
            stroke="#B3401A"
            stroke-width="10"
            stroke-linecap="round"
            id="mask-j-3"
          />
        </g>
        <path
          className="mask"
          d="M313 366.936C318.289 372.981 349.21 363.293 353.702 356.306C361.345 344.416 351.733 335.693 339.715 338.543C318.056 343.679 311.635 386.12 320.553 402.323C325.595 411.483 337.827 415.017 347.687 413.653C359.015 412.085 365.653 401.62 372.164 393.372"
          stroke="#B3401A"
          stroke-width="10"
          stroke-linecap="round"
          id="mask-e-3"
        />
        <g>
          <path
            className="mask"
            d="M422.345 355.661C420.73 349.741 413.799 346.277 408.078 347.409C392.069 350.578 385 374.53 385 388.111C385 405.311 397.85 413.586 414.093 413.777C436.403 414.039 444.67 390.07 448.5 372.026C451.886 356.074 452.914 339.726 456.333 323.771C459.296 309.946 451.385 338.442 450.808 340.346C446.001 356.223 442.708 388.376 461.998 396.643C486.031 406.943 505.67 383.469 516.756 365.732"
            stroke="#B3401A"
            stroke-width="10"
            stroke-linecap="round"
            id="mask-c-t-1"
          />
          <path
            className="mask"
            d="M389.836 339.896C394.79 346.502 420.386 340.852 426.131 340.315C444.275 338.622 462.327 336.372 480.47 334.86"
            stroke="#B3401A"
            stroke-width="10"
            stroke-linecap="round"
            id="mask-c-t-2"
          />
        </g>
      </svg>
    </div>
  );
}

export default Title;
