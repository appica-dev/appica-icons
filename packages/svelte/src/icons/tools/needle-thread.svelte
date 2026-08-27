<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17.5 6.486-1 .996m.5-.498C14.667 4.328 13.5 3 12 3s-2 .996-2 1.992c0 3.984 8.161 8.373 6 10.956-1.056 1.263-3.363 1.28-5.75.805m-4.511-1.377C4.346 14.813 2 13.458 2 11.964m17.5-2.49 1.5 1.494m-18 9.96q-1-.995 11.785-16.642a3.5 3.5 0 0 1 2.485-1.278 3.51 3.51 0 0 1 2.63.943A3.49 3.49 0 0 1 21 6.513a3.47 3.47 0 0 1-1.136 2.545Q4.001 21.925 3 20.928\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
