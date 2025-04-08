/**
 *              Copyright (c) 2025 Visa, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 **/
const changeCase = require('change-case'); 
const path = require('path'); 
const replaceAll = require('replaceall'); 
const { readFileSync } = require('fs'); 

const index = (name, description) => (`/**
* @name ${changeCase.capitalCase(name)}
* @description ${description}
*/

@forward './config';
@forward './palette';
@forward './theme';
@forward './typography';
`); 

const config = (
  name, 
  colorPrimary = '#555555', 
  colorSecondary = '#dddddd', 
  colorLightest = '#ffffff', 
  colorDarkest = '#000000', 
  colorPositive = '#6e6e6e', 
  colorWarning = '#636363', 
  colorNegative = '#949494', 
  colorInfo = '#6b6b6b',
  fontSize = 12,
  focusSize = 1,
  focusOffset = 1,
  borderSize = 1,
  borderRadius = 2,
  responsiveFactor = 1.25,
  scaleFactor = 1, 
  colorPrimaryDark = '#dddddd',
  colorSecondaryDark = '#303033',
  colorLightestDark = '#ffffff',
  colorDarkestDark = '#000000',
  colorPositiveDark = '#148a0a',
  colorWarningDark = '#cca002',
  colorNegativeDark = '#b80600',
  colorInfoDark = '#1e78a8'
) => (`// colors 
$primary: ${colorPrimary}; 
$secondary: ${colorSecondary}; 
$lightest: ${colorLightest}; 
$darkest: ${colorDarkest}; 
$positive: ${colorPositive}; 
$warning: ${colorWarning}; 
$negative: ${colorNegative}; 
$info: ${colorInfo}; 

// font base size  
$font-size: ${fontSize}px; 

// focus outline 
$focus-outline-size: ${focusSize}px; 
$focus-outline-offset: ${focusOffset}px; 

// borders 
$border-size: ${borderSize}px;
$border-radius: ${borderRadius}px; 

// responsive sizing factor
$responsive-factor: ${responsiveFactor}; 

// scaled size factor
$scale-factor: ${scaleFactor};

// DARK 
// colors 
$primaryDark: ${colorPrimaryDark}; 
$secondaryDark: ${colorSecondaryDark}; 
$lightestDark: ${colorLightestDark}; 
$darkestDark: ${colorDarkestDark}; 
$positiveDark: ${colorPositiveDark}; 
$warningDark: ${colorWarningDark}; 
$negativeDark: ${colorNegativeDark}; 
$infoDark: ${colorInfoDark}; 


// exceptions
@layer overrides {
  :root,
  ::backdrop,
  .v-alternate {
    // add theme overrides here
  }
}
`); 

const palette = name => (`@use '../../base/color' as *; // @TODO move to separate from base 
@use './config' as *; 

// generate color variations 
$colors: (
  primary: generate-gradient($primary),
  secondary: generate-gradient($secondary),
  grayscale: generate-gradient($lightest, $darkest),
  positive: generate-gradient($positive),
  warning: generate-gradient($warning),
  negative: generate-gradient($negative),
  info: generate-gradient($info)
);

$colorsDark: (
  primary: generate-gradient($primaryDark),
  secondary: generate-gradient($secondaryDark),
  grayscale: generate-gradient($lightestDark, $darkestDark),
  positive: generate-gradient($positiveDark),
  warning: generate-gradient($warningDark),
  negative: generate-gradient($negativeDark),
  info: generate-gradient($infoDark)
);

// define css variables based on available colors 
@layer theme {
  :root,
  ::backdrop {
    --color-transparent: rgba(255, 255, 255, 0);
    --color-primary: #{$primary};
    --color-secondary: #{$secondary};
    --color-lightest: #{$lightest};
    --color-darkest: #{$darkest};
    --color-positive: #{$positive};
    --color-warning: #{$warning};
    --color-negative: #{$negative};
    --color-info: #{$info};

    @each $color, $shades in $colors {
      @each $shade, $value in $shades {
        --color-#{"" + $color}-#{$shade}: #{$value};
      }
    }
  }
}

// define theme palette with color variables 
$palette: (
  default: (
    active: var(--color-primary), 
    active-hover: var(--color-primary-60),
    active-pressed: var(--color-primary-40),
    active-subtle: var(--color-grayscale-60), 
    active-accent: var(--color-secondary), 
    surface-1: var(--color-lightest), 
    surface-2: var(--color-grayscale-110),
    surface-3: var(--color-grayscale-100),
    surface-highlight: var(--color-primary-110),
    surface-lowlight: var(--color-primary-100),
    text: var(--color-darkest), 
    text-subtle: var(--color-grayscale-40),
    text-on-active: var(--color-grayscale-120), 
    border: var(--color-grayscale-110),
    disabled: var(--color-grayscale-90),
    overlay: var(--color-grayscale-70),
    "transparent": var(--color-transparent)
  ),
  alternate: (
    active: var(--color-secondary), 
    active-hover: var(--color-secondary-80), 
    active-pressed: var(--color-secondary-60), 
    active-subtle: var(--color-grayscale-80), 
    active-accent: var(--color-lightest), 
    surface-1: var(--color-primary), 
    surface-2: var(--color-primary-50),
    surface-3: var(--color-primary-40),
    surface-highlight: var(--color-primary-60),
    surface-lowlight: var(--color-primary-40),
    text: var(--color-lightest), 
    text-subtle: var(--color-grayscale-110),
    text-on-active: var(--color-primary-30),
    border: var(--color-primary-70),
    disabled: var(--color-primary-80),
    overlay: var(--color-grayscale-70),
    "transparent": var(--color-transparent)
  ),
  messaging: (
    // positive
    highlight-positive: var(--color-positive-110), 
    graphics-positive: var(--color-positive), 
    text-positive: var(--color-positive-40), 
    // warning
    highlight-warning: var(--color-warning-110), 
    graphics-warning: var(--color-warning), 
    text-warning: var(--color-warning-40), 
    // negative
    highlight-negative: var(--color-negative-110), 
    lowlight-negative: var(--color-negative-100),  
    surface-negative: var(--color-negative-90),
    graphics-negative: var(--color-negative), 
    text-hover-negative: var(--color-negative-60), 
    text-negative: var(--color-negative-50), 
    text-pressed-negative: var(--color-negative-40), 
    // info
    highlight-info: var(--color-info-110), 
    graphics-info: var(--color-info), 
    text-info: var(--color-info-40)
  )
); 


// define theme palette with color variables 
$paletteDark: (
  default: (
    active: var(--color-primary), 
    active-hover: var(--color-primary-100),
    active-pressed: var(--color-primary-60),
    active-subtle: var(--color-grayscale-70), 
    active-accent: var(--color-secondary), 
    surface-1: var(--color-darkest), 
    surface-2: var(--color-grayscale-10),
    surface-3: var(--color-grayscale-20),
    surface-highlight: var(--color-primary-20),
    surface-lowlight: var(--color-primary-30),
    text: var(--color-lightest), 
    text-subtle: var(--color-grayscale-70),
    text-on-active: var(--color-grayscale-20), 
    border: var(--color-grayscale-30),
    disabled: var(--color-grayscale-20),
    overlay: var(--color-grayscale-70),
    "transparent": var(--color-transparent)
  ),
  alternate: (
    active: var(--color-lightest), 
    active-hover: var(--color-grayscale-90), 
    active-pressed: var(--color-grayscale-80), 
    active-subtle: var(--color-secondary-30), 
    active-accent: var(--color-lightest), 
    surface-1: var(--color-darkest), 
    surface-2: var(--color-primary-50),
    surface-3: var(--color-primary-40),
    surface-highlight: var(--color-primary-60),
    surface-lowlight: var(--color-primary-40),
    text: var(--color-lightest), 
    text-subtle: var(--color-grayscale-110),
    text-on-active: var(--color-primary-30),
    border: var(--color-primary-70),
    disabled: var(--color-primary-80),
    overlay: var(--color-grayscale-70),
    "transparent": var(--color-transparent)
  ),
  messaging: (
    // positive
    highlight-positive: var(--color-positive-110), 
    lowlight-positive: var(--color-positive-100),  
    surface-positive: var(--color-positive-50),
    graphics-positive: var(--color-positive), 
    text-hover-positive: var(--color-positive-60), 
    text-positive: var(--color-positive-90), 
    text-pressed-positive: var(--color-positive-40), 
    // warning
    highlight-warning: var(--color-warning-40), 
    graphics-warning: var(--color-warning), 
    text-warning: var(--color-warning-90), 
    // negative
    highlight-negative: var(--color-negative-110), 
    lowlight-negative: var(--color-negative-100),  
    surface-negative: var(--color-negative-40),
    graphics-negative: var(--color-negative), 
    text-hover-negative: var(--color-negative-90), 
    text-negative: var(--color-negative-80), 
    text-pressed-negative: var(--color-negative-90), 
    // info
    highlight-info: var(--color-info-40), 
    graphics-info: var(--color-info), 
    text-info: var(--color-info-90)
  )
); 

@layer theme {
  :root,
  ::backdrop {
    @each $scheme, $tokens in $palette {
      @each $token, $value in $tokens {
        --palette-#{$scheme}-#{$token}: #{$value};
      }
    }
  }

  .v-alternate {
    @each $default-token, $default-value in map-get($palette, "default") {
      @each $alternate-token, $alternate-value in map-get($palette, "alternate") {
        @if $default-token == $alternate-token {
          --palette-default-#{$default-token}: var(--palette-alternate-#{$alternate-token});
        }
      }
    }
  }

  [data-theme="dark"],
  .v-dark {
    @each $scheme, $tokens in $paletteDark {
      @each $token, $value in $tokens {
        --palette-#{$scheme}-#{$token}: #{$value};
      }
    }
  }

  [data-theme="dark"] .v-alternate,
  .v-dark .v-alternate {
    @each $default-token, $default-value in map-get($paletteDark, "default") {
      @each $alternate-token, $alternate-value in map-get($palette, "alternate") {
        @if $default-token == $alternate-token {
          --palette-default-#{$default-token}: var(--palette-alternate-#{$alternate-token});
        }
      }
    }

  }

  @media (prefers-color-scheme: dark) {
    :root,
    ::backdrop {
      @each $scheme, $tokens in $paletteDark {
        @each $token, $value in $tokens {
          --palette-#{$scheme}-#{$token}: #{$value};
        }
      }
    }

    .v-alternate {
      @each $default-token, $default-value in map-get($palette, "default") {
        @each $alternate-token, $alternate-value in map-get($paletteDark, "alternate") {
          @if $default-token == $alternate-token {
            --palette-default-#{$default-token}: var(--palette-alternate-#{$alternate-token});
          }
        }
      }
    }
  }
}
`); 

const theme = name => (`
@use './config' as *; 
@use './palette' as *;

$theme: (
  // colors 
  primary: $primary,
  secondary: $secondary,
  lightest: $lightest,
  darkest: $darkest,
  success: $positive,
  warning: $warning,
  error: $negative,
  info: $info,

  // font base size 
  font-size: $font-size,

  // focus outline 
  focus-outline-size: $focus-outline-size, 
  focus-outline-offset: $focus-outline-offset,

  // borders 
  border-size: $border-size, 
  border-radius: $border-radius, 

  // responsive sizing ratio  
  responsive-factor: $responsive-factor,

  // scaled size ratio 
  scale-factor: $scale-factor
);

@layer theme {
  :root,
  ::backdrop{
    // generate Theme's css variables 
    @each $prop, $value in $theme{
      --theme-#{$prop}: #{$value};
    }
  }


  html[data-theme="dark"],
  .v-dark {
    // @TODO add dark definitions here 

    .v-alternate {
      // @TODO add dark alternate definitions here
    }
  }

  @media (prefers-color-scheme: dark) {
    :root,
    ::backdrop {
      // @TODO add dark definitions here 
  
      .v-alternate {
        // @TODO add dark alternate definitions here
      }
    }
  }

}
`); 

const typography = name => (`
@use 'sass:math'; 
@use './config' as *; 

// px to rem 
@function to-rem($px) {
  @if unit($px) == 'px' {
    @return math.div($px, $font-size) * 1rem;
  } @else {
    @error 'Property #{$px} must be a pixel value.';
  }
} 

/** 
  * @name Typography
  * @description lorem ipsum
  * 
  * @section Visa Default
  */
$typography: (
  display-1: (
    font-family: sans-serif,
    font-size: to-rem(60px),
    font-weight: 600,
    letter-spacing: to-rem(0px),
    line-height: to-rem(78px),
    text-decoration: none,
    text-transform: none
  ),
  display-2: (
    font-family: sans-serif,
    font-size: to-rem(49px),
    font-weight: 600,
    letter-spacing: to-rem(0px),
    line-height: to-rem(62px),
    text-decoration: none,
    text-transform: none
  ),
  headline-1: (
    font-family: sans-serif,
    font-size: to-rem(32px),
    font-weight: 600,
    letter-spacing: to-rem(0.5px),
    line-height: to-rem(42px),
    text-decoration: none,
    text-transform: none
  ),
  headline-2: (
    font-family: sans-serif,
    font-size: to-rem(25px),
    font-weight: 500,
    letter-spacing: to-rem(0px),
    line-height: to-rem(33px),
    text-decoration: none,
    text-transform: none
  ),
  headline-3: (
    font-family: sans-serif,
    font-size: to-rem(20px),
    font-weight: 600,
    letter-spacing: to-rem(0px),
    line-height: to-rem(26px),
    text-decoration: none,
    text-transform: none
  ),
  headline-4: (
    font-family: sans-serif,
    font-size: to-rem(18px),
    font-weight: 600,
    letter-spacing: to-rem(0px),
    line-height: to-rem(24px),
    text-decoration: none,
    text-transform: none
  ),
  subtitle-1: (
    font-family: sans-serif,
    font-size: to-rem(16px),
    font-weight: 600,
    letter-spacing: to-rem(0px),
    line-height: to-rem(21px),
    text-decoration: none,
    text-transform: none
  ),
  subtitle-2: (
    font-family: sans-serif,
    font-size: to-rem(16px),
    font-weight: 500,
    letter-spacing: to-rem(0px),
    line-height: to-rem(21px),
    text-decoration: none,
    text-transform: none
  ),
  subtitle-3: (
    font-family: sans-serif,
    font-size: to-rem(14px),
    font-weight: 600,
    letter-spacing: to-rem(0px),
    line-height: to-rem(18px),
    text-decoration: none,
    text-transform: none
  ),
  overline: (
    font-family: sans-serif,
    font-size: to-rem(10px),
    font-weight: 600,
    letter-spacing: to-rem(1px),
    line-height: to-rem(13px),
    text-decoration: none,
    text-transform: uppercase
  ),
  body-1: (
    font-family: sans-serif,
    font-size: to-rem(16px),
    font-weight: 400,
    letter-spacing: to-rem(0px),
    line-height: to-rem(24px),
    text-decoration: none,
    text-transform: none
  ),
  body-2: (
    font-family: sans-serif,
    font-size: to-rem(14px),
    font-weight: 400,
    letter-spacing: to-rem(0px),
    line-height: to-rem(22px),
    text-decoration: none,
    text-transform: none
  ),
  body-2-bold: (
    font-family: sans-serif,
    font-size: to-rem(14px),
    font-weight: 600,
    letter-spacing: to-rem(0px),
    line-height: to-rem(22px),
    text-decoration: none,
    text-transform: none
  ),
  body-2-link: (
    font-family: sans-serif,
    font-size: to-rem(14px),
    font-weight: 500,
    letter-spacing: to-rem(0px),
    line-height: to-rem(22px),
    text-decoration: underline,
    text-transform: none
  ),
  body-2-medium: (
    font-family: sans-serif,
    font-size: to-rem(14px),
    font-weight: 500,
    letter-spacing: to-rem(0px),
    line-height: to-rem(22px),
    text-decoration: none,
    text-transform: none
  ),
  body-3: (
    font-family: sans-serif,
    font-size: to-rem(12px),
    font-weight: 400,
    letter-spacing: to-rem(0px),
    line-height: to-rem(18px),
    text-decoration: none,
    text-transform: none
  ),
  button-large: (
    font-family: sans-serif,
    font-size: to-rem(14px),
    font-weight: 600,
    letter-spacing: to-rem(0.25px),
    line-height: to-rem(18px),
    text-decoration: none,
    text-transform: none
  ),
  button-medium: (
    font-family: sans-serif,
    font-size: to-rem(12px),
    font-weight: 600,
    letter-spacing: to-rem(0.25px),
    line-height: to-rem(16px),
    text-decoration: none,
    text-transform: none
  ),
  button-small: (
    font-family: sans-serif,
    font-size: to-rem(12px),
    font-weight: 500,
    letter-spacing: to-rem(0.25px),
    line-height: to-rem(16px),
    text-decoration: none,
    text-transform: none
  ),
  label-large: (
    font-family: sans-serif,
    font-size: to-rem(14px),
    font-weight: 400,
    letter-spacing: to-rem(0px),
    line-height: to-rem(18px),
    text-decoration: none,
    text-transform: none
  ),
  label-large-active: (
    font-family: sans-serif,
    font-size: to-rem(14px),
    font-weight: 500,
    letter-spacing: to-rem(0px),
    line-height: to-rem(18px),
    text-decoration: none,
    text-transform: none
  ),
  label: (
    font-family: sans-serif,
    font-size: to-rem(12px),
    font-weight: 400,
    letter-spacing: to-rem(0px),
    line-height: 16px,
    text-decoration: none,
    text-transform: none
  ),
  label-active: (
    font-family: sans-serif,
    font-size: to-rem(12px),
    font-weight: 500,
    letter-spacing: to-rem(0px),
    line-height: to-rem(16px),
    text-decoration: none,
    text-transform: none
  ),
  label-small: (
    font-family: sans-serif,
    font-size: to-rem(11px),
    font-weight: 400,
    letter-spacing: to-rem(0px),
    line-height: to-rem(14px),
    text-decoration: none,
    text-transform: none
  )
);

@layer theme {
  // generate available colors css variables 
  :root,
  ::backdrop {
    @each $typograph, $group in $typography {
      @each $style, $value in $group {
        --typography-#{"" + $typograph}-#{$style}: #{$value};
      }
    }
  }

  html[data-theme="dark"],
  .v-dark {
    // @TODO add dark definitions here 

    .v-alternate {
      // @TODO add dark alternate definitions here
    }
  }

  @media (prefers-color-scheme: dark) {
    :root,
    ::backdrop {
      // @TODO add dark definitions here 
  
      .v-alternate {
        // @TODO add dark alternate definitions here
      }
    }
  }
}
`); 

const package = (name, description, version, keywords, project, library) => `{
  "name": "nova-styles/themes/${changeCase.paramCase(name)}",
  "version": "${version}",
  "description": "${description}",
  "keywords": [${keywords.map(x => `"${x}"`)}],
  "project": "${project}",
  "library": "${library}"
}`; 

module.exports = [
  {
    content: index, 
    path: 'index.scss'
  }, 
  {
    content: config, 
    path: '_config.scss'
  }, 
  {
    content: palette, 
    path: '_palette.scss'
  }, 
  {
    content: theme, 
    path: '_theme.scss'
  }, 
  {
    content: typography, 
    path: '_typography.scss'
  },
  {
    content: package, 
    path: 'package.json'
  }
];