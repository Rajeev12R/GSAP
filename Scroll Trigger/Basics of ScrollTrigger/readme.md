# ScrollTrigger Animation using GSAP

This project demonstrates the basics of using the GSAP (GreenSock Animation Platform) ScrollTrigger plugin to create scroll-based animations. The example includes animations applied to different containers and elements, showcasing how ScrollTrigger can be used to control animations based on the scroll position.

## Project Structure

- **index.html:** The main HTML file containing the structure of the webpage with multiple containers and elements to be animated.
- **style.css:** The CSS file defining the styles for the containers and elements.
- **script.js:** The JavaScript file where the GSAP animations and ScrollTrigger configurations are implemented.

## Key Concepts

### GSAP (GreenSock Animation Platform)

GSAP is a powerful JavaScript library for creating high-performance animations. It allows developers to create complex sequences and synchronized animations with ease. The ScrollTrigger plugin extends GSAP's capabilities by enabling animations to be triggered and controlled based on the user's scroll position.

### ScrollTrigger

ScrollTrigger is a plugin for GSAP that lets you create scroll-based animations. It provides a wide range of features to control animations when elements enter or leave the viewport, making it perfect for adding engaging scroll-driven effects to your web pages.

## Features Demonstrated

### Basic Animations:

- Animations such as scaling, rotating, and changing border-radius are applied to elements within containers.
- Delays and durations are configured to control the timing of the animations.

### Scroll-Triggered Animations:

- Elements are animated based on their scroll position.
- Different trigger points and scroll positions are set to control when animations start and end.
- Options such as `scrub` and `pin` are used to enhance the scroll-based animation effects.

## Usage

To use this project, simply open the `index.html` file in a web browser. The animations will be triggered as you scroll through the page, showcasing the effects defined in the `script.js` file.

### Installation

To set up the project, include the following CDN links in your HTML file for GSAP and ScrollTrigger:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" crossorigin="anonymous"></script>```