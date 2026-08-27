<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path stroke-miterlimit=\"10\" d=\"M8.719 9.5 7.713 4.617c-.269-1.308.69-2.57 2.024-2.616L9.812 2c.419 0 .81.262 1.142.605.572.59 1.52.59 2.092 0 .332-.343.723-.605 1.142-.605l.075.001c1.334.045 2.293 1.308 2.024 2.616L15.28 9.5m-6.562 0h6.562m-6.562 0L4.5 21.17c1.875 0 1.875.83 3.75.83s1.875-.83 3.75-.83 1.875.83 3.75.83 1.875-.83 3.75-.83L15.281 9.5M7.815 12h8.37\"/>";
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
