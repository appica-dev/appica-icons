<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.227 14c.917 4 4.497 7 8.773 7 4.277 0 7.858-3 8.773-7m.007-4A9 9 0 0 0 12 3a8.985 8.985 0 0 0-8.782 7M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
