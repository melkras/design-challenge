
# Design challenge

This is mini-project which purpose was to use a figma desgin and convert it to a re-usable design system and react components.  
The project is documented in StoryBook.


## Tech Stack

**Client:** React, TypeScript, React Hook Form, Zod, Sass, StoryBook.  
**Tools:** Vite 



## How to install

Inside the project root folder

```bash
  npm install

```
## How to run on dev

To run project on dev server port 3000

```bash
  npm run start
```

To run sass on dev

```bash
  npm run sass:watch
```
    

## How to run StoryBook

Run StoryBook on dev server port 6006

```bash
  npm run storybook
```
    

## Project file structure
src  
|-- assets  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- fonts  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- DMSans.ttf  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- graphics  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- bg.svg  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- logo.svg  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- icons  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- chevron-down.svg  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- close.svg  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- dark-mode.svg  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- done.svg  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- light-mode.svg  
|-- components  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- ui  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- button.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- checkbox-group.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- checkbox.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- form.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- input.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- container.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- content.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- page-actions.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- page-title.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- top-bar.tsx  
|-- hooks  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- use-formState.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- use-theme.tsx  
|-- pages  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- sign-up-in.tsx  
|-- sass  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- abstracts  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _mixins.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _variables.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- base  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _base.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _colors.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _themes.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _typography.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _utils.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- components  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _buttons.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _checkbox-group.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _checkbox.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _form.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _input.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- layout  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _container.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _content.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _top-bar.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- pages  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- _sign-in-up.scss  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- main.scss  
|-- stores  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- Button.stories.ts  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- Checkbox-group.stories.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- Checkbox.stories.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- Input.stories.tsx  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- Page.stories.ts  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- Page.tsx  
|-- utils  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- index.tsx  
|-- App.tsx  
|-- main.tsx  
|-- style.css  
|-- style.css.map  
|-- types.d.ts  
|-- vite-env.d.ts


## Style guide

The following .scss files have all the style logic:  
**Important information is commented within code**

**abstracts/_mixins.scss** - helper functions.  
**base/_base.scss** - base html setup and "clearing".  
**base/_colors.scs** - color variables.  
**base/_themes.scss** - light and dark theme mode variables.  
**base/_typography.scss** - typography variables and classes.
## Author

- [@melkras](https://www.github.com/melkras)

