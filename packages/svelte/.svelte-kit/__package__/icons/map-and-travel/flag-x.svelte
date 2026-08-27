<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.533 15.001A5 5 0 0 1 12 13.97a4.99 4.99 0 0 0-7 0m0 0V4.935a4.99 4.99 0 0 1 7 0 4.99 4.99 0 0 0 7 0v8.532M5 13.97v7.027M22 22l-5-5.02M17 22l5-5.02\"/>";
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
