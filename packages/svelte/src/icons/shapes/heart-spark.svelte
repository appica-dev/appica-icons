<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m11.544 19.544-7.032-6.966a4.997 4.997 0 1 1 7.495-6.562 4.997 4.997 0 0 1 8.207 5.69M19.002 22.5a4.75 4.75 0 0 1 3.498-3.498 4.75 4.75 0 0 1-3.498-3.498 4.75 4.75 0 0 1-3.497 3.498 4.75 4.75 0 0 1 3.497 3.498\"/>";
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
