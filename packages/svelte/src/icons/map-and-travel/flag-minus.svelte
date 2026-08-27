<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.373 15.278A4.97 4.97 0 0 1 12 13.972a4.99 4.99 0 0 0-7 0m0 0V4.935a4.99 4.99 0 0 1 7 0 4.99 4.99 0 0 0 7 0v9.037m-14 0V21m11-2.008h6\"/>";
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
