import { colors } from '@/base/theme'
import { media, createMenuShadow } from '@/helpers'
import { injectGlobal } from 'vue-styled-components'
import {
  NAVIGATION_ID,
  TABBING_CLASSNAME,
  NAVIGATION_BULLET,
} from '@/constants'

const StyledHomepage = injectGlobal`
  html {
    overflow: hidden;

    ${media.minWidth('>medium')`
      &,
      body {
        touch-action: none;
        -webkit-tap-highlight-color: transparent;
      }
    `}

    ${media.between('>medium', 1600)`
      font-size: 1vw;
    `}

    ${media.minWidth(1601)`
      /* max font-size more or less */
      font-size: 16px;
    `}

    ${media.maxWidth('medium')`
      font-size: 9px;
    `}

    &${`.${TABBING_CLASSNAME}`} {
      [data-current-section='cinq'] #logo:focus {
        outline-color: ${colors['electric-blue']};
      }

      #${NAVIGATION_ID} a:focus:after {
        box-shadow: 0 0 0 0.3rem rgba(24, 156, 230, 0.4);
      }
    }
  }

  #app {
    &[data-current-section='footer'] #${NAVIGATION_ID} {
      display: none;
    }

    ${media.minWidth('>medium')`
      &[data-current-section='une'] {
        #contact__menu.shadow {
          box-shadow: ${createMenuShadow('rgba(163, 204, 170, 0.3)')};
        }
      }

      &[data-current-section='deux'],
      &[data-current-section='cinq'],
      &[data-current-section='quatre'] {
        #logo {
          color: ${colors['electric-blue']};
        }
      }

      &[data-current-section='trois'],
      &[data-current-section='footer'] {
        #${NAVIGATION_ID},
        .menu__toggle:not(.x) {
          color: ${colors.lime};
        }
      }
    `}
  }


  ${media.maxWidth('portrait')`
    header[role='banner'] {
      font-size: 1.2rem;

      .menu__toggle {
        color: ${colors.lime};
      }
    }

    footer[data-section='footer'] {
      font-size: 1.5rem;
    }
  `}

  main {
    outline: none;
    -webkit-overflow-scrolling: touch;

    ${media.minWidth('>medium')`
      touch-action: none;
      scroll-snap-type: y mandatory;
    `}
  }


  ${media.minWidth('>medium')`
    .cavalier p { width: 32vw; }

    [data-section][aria-hidden='true'] {
      @media (hover: hover) and (any-pointer: fine) {
        &:not(.scrolled) {
          .cavalier {
            p, h1 { opacity: 0; }

            p {
              transform: translate3d(0, 20px, 0);

              &:nth-of-type(3) {
                transform: translate3d(0, 15px, 0);
              }
            }

            h1 {
              transform: translate3d(0, 50px, 0);
            }
          }
        }

        /* Prevent focusable elements in hidden sections
        from receiving focus via tabbing from an active section. */
        [tabindex],
        input:not([disabled]),
        select:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        ${`a[href]:not(.${NAVIGATION_BULLET})`} {
          &:not([tabindex='-1']) {
            visibility: hidden;
            transition: visibility 400ms;
          }
        }
      }
    }
  `}

  [data-section='footer'] {
    font-size: 1.2em;
  }
`

export default StyledHomepage
