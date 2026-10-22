/** Deterministic, finite HyperFrames adaptations of user-supplied React Bits effects.
 * Append synchronously to a registered GSAP timeline. No clocks, event handlers,
 * physics simulation, random values, infinite loops, network calls or media control.
 * These adapters reproduce the motion idea; originals remain under ../react/.
 */
(function (global) {
  'use strict';
  function nodes(root, selector, required = true) {
    const result = Array.from(root.querySelectorAll(selector));
    if (required && !result.length) throw new Error(`MotionLibrary: missing ${selector}`);
    return result;
  }
  function time(value) {
    if (!Number.isFinite(value) || value < 0) throw new Error('MotionLibrary: at must be a finite nonnegative second');
    return value;
  }
  function folderFloat(tl, root, {at = 0, duration = 1.2, lift = 65, spread = 55, flapAngle = 24} = {}) {
    at = time(at);
    const paper = nodes(root, '[data-ml-paper]');
    const flap = nodes(root, '[data-ml-flap]', false);
    const items = nodes(root, '[data-ml-item]', false);
    tl.fromTo(paper, {y: lift}, {y: 0, duration, ease: 'sine.inOut', immediateRender: false}, at);
    if (flap.length) tl.fromTo(flap, {rotationX: 0}, {rotationX: -flapAngle, transformOrigin: '50% 100%', duration, ease: 'sine.inOut', immediateRender: false}, at);
    items.forEach((el, i) => tl.fromTo(el, {x: 0, y: lift, opacity: 0}, {x: (i - (items.length - 1) / 2) * spread, y: 0, opacity: 1, duration: duration * .75, ease: 'power2.out', immediateRender: false}, at + .18 + i * .1));
    return {name: 'FolderFloat', at, end: at + duration + items.length * .1};
  }
  function flipCard(tl, root, {at = 0, duration = 1.1, axis = 'y'} = {}) {
    at = time(at);
    const inner = nodes(root, '[data-ml-flip]');
    const key = axis === 'x' ? 'rotationX' : 'rotationY';
    tl.fromTo(inner, {[key]: 0}, {[key]: 180, duration, ease: 'sine.inOut', immediateRender: false}, at);
    return {name: 'FlipCard', at, end: at + duration};
  }
  function branchedMenu(tl, root, {at = 0, duration = .65, stagger = .16} = {}) {
    at = time(at);
    const paths = nodes(root, '[data-ml-branch]');
    const labels = nodes(root, '[data-ml-label]', false);
    // Normalize pathLength in markup to 1 and set stroke-dasharray:1.
    paths.forEach((el, i) => tl.fromTo(el, {strokeDashoffset: 1}, {strokeDashoffset: 0, duration, ease: 'power2.out', immediateRender: false}, at + i * stagger));
    labels.forEach((el, i) => tl.fromTo(el, {clipPath: 'inset(0% 100% 0% 0%)'}, {clipPath: 'inset(0% 0% 0% 0%)', duration: .32, ease: 'power2.out', immediateRender: false}, at + i * stagger + duration * .55));
    return {name: 'BranchedMenu', at, end: at + duration + paths.length * stagger};
  }
  function starBorder(tl, root, {at = 0, duration = 2.4, laps = 1} = {}) {
    at = time(at);
    if (!Number.isInteger(laps) || laps < 1 || laps > 6) throw new Error('MotionLibrary: laps must be an integer from 1 to 6');
    const trail = nodes(root, '[data-ml-trail]');
    tl.fromTo(trail, {strokeDashoffset: 0}, {strokeDashoffset: -laps, duration: duration * laps, ease: 'none', immediateRender: false}, at);
    return {name: 'StarBorder', at, end: at + duration * laps};
  }
  function shredder(tl, root, {at = 0, feedDuration = 1.3, fallDuration = .85, fall = 180} = {}) {
    at = time(at);
    const page = nodes(root, '[data-ml-feed]');
    const strips = nodes(root, '[data-ml-strip]');
    tl.fromTo(page, {y: 0}, {y: 155, duration: feedDuration, ease: 'power1.in', immediateRender: false}, at);
    strips.forEach((el, i) => tl.fromTo(el, {y: 0, rotation: 0, opacity: 0}, {y: fall, rotation: ((i * 7) % 11) - 5, opacity: 1, duration: fallDuration, ease: 'power2.in', immediateRender: false}, at + feedDuration * .6 + i * .025));
    return {name: 'Shredder', at, end: at + feedDuration * .6 + (strips.length - 1) * .025 + fallDuration};
  }
  global.MotionLibrary = Object.freeze({folderFloat, flipCard, branchedMenu, starBorder, shredder});
})(typeof window === 'undefined' ? globalThis : window);
