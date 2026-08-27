<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m10 10-7 7v4h4l7-7m.5-8.5 4 4M7 3l5 5 4-4a2.828 2.828 0 0 1 4 4l-4 4 5 5M5 5 3 7l5 5M7 8 5.5 9.5M19 19l-2 2-5-5m4 1-1.5 1.5M3 3l18 18\"/>";
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
