<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.925 13.163A8.997 8.997 0 0 0 12 3a9 9 0 1 0 0 18M9 10h.01M15 10h.01M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1m.5 4 2 2 4-4\"/>";
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
