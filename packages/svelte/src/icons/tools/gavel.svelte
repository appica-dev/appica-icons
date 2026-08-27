<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m13 10 7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 0 1-2.976 0L10 13m3-3L9 6m4 4 .5.5 2.293-2.293a1 1 0 0 0 0-1.414l-3.586-3.586a1 1 0 0 0-1.414 0L8.5 5.5 9 6m4 4-3 3m0 0L6 9m4 4 .5.5-2.293 2.293a1 1 0 0 1-1.414 0l-3.586-3.586a1 1 0 0 1 0-1.414L5.5 8.5 6 9m0 0 3-3M3 21h7\"/>";
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
