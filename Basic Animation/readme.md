## GSAP Timeline

**Definition:**  
A feature in the GreenSock Animation Platform (GSAP) that allows for precise control over sequences of animations.

**Purpose:**  
To organize and control multiple tweens (animations) and their timing in a coordinated manner.

**Key Features:**
- **Sequence Control:** Easily chain multiple tweens together.
- **Relative Positioning:** Place animations in relation to each other.
- **Callbacks:** Add functions that run at specific points in the timeline.
- **Nested Timelines:** Include timelines within timelines for complex animations.

**Common Methods:**
- `add()`: Add tweens or other timelines to the timeline.
- `to()`: Define the properties to animate to a certain state.
- `from()`: Animate properties from a certain state.
- `fromTo()`: Animate properties from one state to another.
- `play()`, `pause()`, `reverse()`: Control the playback of the timeline.

**Example Usage:**
```javascript
var tl = gsap.timeline();
tl.to(".box", {duration: 1, x: 100})
  .to(".box", {duration: 1, rotation: 360, delay: 0.5});
