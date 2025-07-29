const ATOM_TEMPLATE = document.createElement("template");
ATOM_TEMPLATE.innerHTML = /* HTML */ `
  <style>
    #atom {
      --_circle-1-color: var(--circle-1-color, orangered);
      --_circle-2-color: var(--circle-2-color, orange);
      --_circle-3-color: var(--circle-3-color, yellow);
      --_circle-4-color: var(--circle-4-color, yellowgreen);

      --_circle-1-radius: var(--circle-1-radius, 100%);
      --_circle-2-radius: var(--circle-2-radius, 75%);
      --_circle-3-radius: var(--circle-3-radius, 50%);
      --_circle-4-radius: var(--circle-4-radius, 25%);

      --_circle-rotation-duration: var(--circle-rotation-duration, 2s);
      --_circle-1-rotation-duration: var(
        --circle-1-rotation-duration,
        var(--_circle-rotation-duration)
      );
      --_circle-2-rotation-duration: var(
        --circle-2-rotation-duration,
        calc(var(--_circle-rotation-duration) / 2)
      );
      --_circle-3-rotation-duration: var(
        --circle-3-rotation-duration,
        calc(var(--_circle-rotation-duration) / 4)
      );
      --_circle-4-rotation-duration: var(
        --circle-4-rotation-duration,
        calc(var(--_circle-rotation-duration) / 8)
      );

      --_circle-border-size: var(--circle-border-size, 5px);
      --_circle-1-border-size: var(
        --circle-1-border-size,
        var(--_circle-border-size)
      );
      --_circle-2-border-size: var(
        --circle-2-border-size,
        var(--_circle-border-size)
      );
      --_circle-3-border-size: var(
        --circle-3-border-size,
        var(--_circle-border-size)
      );
      --_circle-4-border-size: var(
        --circle-4-border-size,
        var(--_circle-border-size)
      );

      position: relative;
      display: block;
      width: 100%;
      height: 100%;

      > .circle {
        position: absolute;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        box-sizing: border-box;
        border-radius: 50%;

        &.circle-1 {
          animation: rotate var(--_circle-1-rotation-duration) linear infinite;
          border: var(--_circle-1-border-size) solid var(--_circle-1-color);
          width: var(--_circle-1-radius);
          height: var(--_circle-1-radius);
        }

        &.circle-2 {
          animation: rotate var(--_circle-2-rotation-duration) linear infinite;
          border: var(--_circle-2-border-size) solid var(--_circle-2-color);
          width: var(--_circle-2-radius);
          height: var(--_circle-2-radius);
        }

        &.circle-3 {
          animation: rotate var(--_circle-3-rotation-duration) linear infinite;
          border: var(--_circle-3-border-size) solid var(--_circle-3-color);
          width: var(--_circle-3-radius);
          height: var(--_circle-3-radius);
        }

        &.circle-4 {
          animation: rotate var(--_circle-4-rotation-duration) linear infinite;
          border: var(--_circle-4-border-size) solid var(--_circle-4-color);
          width: var(--_circle-4-radius);
          height: var(--_circle-4-radius);
        }
      }
    }
    @keyframes rotate {
      from {
        transform: rotate3d(1, 1, 1, 0deg);
      }
      to {
        transform: rotate3d(1, 1, 1, 360deg);
      }
    }
  </style>

  <div id="atom">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
    <div class="circle circle-4"></div>
  </div>
`;

class LoadingComponentAtom extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(ATOM_TEMPLATE.content.cloneNode(true));
  }
}

// **************************************************************
// **************************************************************
// **************************************************************

const OUTER_3D_BOX_TEMPLATE = document.createElement("template");
OUTER_3D_BOX_TEMPLATE.innerHTML = /* HTML */ `
  <style>
    :host {
      display: block;
    }

    .outer-3d-box {
      --_perspective: var(--perspective, 400px);

      --_loading-text-font-size: var(--loading-text-font-size, 1.75em);
      --_loading-text-font-color: var(--loading-text-font-color, yellowgreen);
      --_loading-text-pulse-duration: var(--loading-text-pulse-duration, 1s);

      --_atom-orbit-duration: var(--atom-orbit-duration, 1.9s);
      --_atom-size: var(--atom-size, 20%);

      --_atom-tail-color-1: var(--atom-tail-color-1, orange);
      --_atom-tail-color-2: var(--atom-tail-color-2, lightgreen);

      position: relative;
      perspective: var(--_perspective);
      width: 100%;
      height: 100%;

      > .inner-plane {
        position: absolute;
        width: 100%;
        height: 100%;

        &.inner-plane-1 {
          animation: rotate-inner-plane-1 var(--_atom-orbit-duration) linear
            infinite;
          rotate: 0 -1 0 35deg;
        }

        &.inner-plane-2 {
          animation: rotate-inner-plane-2 var(--_atom-orbit-duration) linear
            infinite;
          rotate: 0 1 0 215deg;
        }

        &.inner-plane-3 {
          animation: rotate-inner-plane-3 var(--_atom-orbit-duration) linear
            infinite;
          rotate: 1 0 0 55deg;
        }

        > .inner-sub-plane {
          position: absolute;
          width: calc(var(--_atom-size) * 1.2);
          height: calc(var(--_atom-size) * 1.2);
          left: 50%;
          top: 25%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: conic-gradient(
            from -92deg,
            var(--_atom-tail-color-1) 0deg,
            var(--_atom-tail-color-2) 4deg,
            transparent 8deg
          );
        }

        > loading-component-atom {
          position: absolute;
          width: var(--_atom-size);
          height: var(--_atom-size);
          left: 50%;
          top: 25%;
          translate: -50% -50%;
        }
      }
    }

    @keyframes rotate-inner-plane-1 {
      from {
        transform: rotateZ(135deg);
      }
      to {
        transform: rotateZ(495deg);
      }
    }

    @keyframes rotate-inner-plane-2 {
      from {
        transform: rotateZ(135deg);
      }
      to {
        transform: rotateZ(495deg);
      }
    }

    @keyframes rotate-inner-plane-3 {
      to {
        transform: rotateZ(1turn);
      }
    }

    .loading-text {
      position: absolute;
      color: var(--_loading-text-font-color);
      font-size: var(--_loading-text-font-size);
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, -100px);
      animation: animate-opacity var(--_loading-text-pulse-duration) linear
        alternate infinite;
    }

    @keyframes animate-opacity {
      from {
        opacity: 1;
      }
      to {
        opacity: 0.6;
      }
    }
  </style>

  <div class="outer-3d-box">
    <div class="inner-plane inner-plane-1">
      <div class="inner-sub-plane"></div>
      <loading-component-atom></loading-component-atom>
    </div>
    <div class="inner-plane inner-plane-2">
      <div class="inner-sub-plane"></div>
      <loading-component-atom></loading-component-atom>
    </div>
    <div class="inner-plane inner-plane-3">
      <div class="inner-sub-plane"></div>
      <loading-component-atom></loading-component-atom>
    </div>
    <h2 class="loading-text">loading</h2>
  </div>
`;

class LoadingComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(OUTER_3D_BOX_TEMPLATE.content.cloneNode(true));
  }
}

// **************************************************************
// **************************************************************
// **************************************************************

customElements.define("loading-component-atom", LoadingComponentAtom);
customElements.define("loading-component", LoadingComponent);
