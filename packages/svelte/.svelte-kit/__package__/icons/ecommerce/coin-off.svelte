<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.8 9A2 2 0 0 0 13 8h-1V6M9.18 9.171A2 2 0 0 0 11 12h1m2.824 2.822A2 2 0 0 1 13 16h-2a2 2 0 0 1-1.8-1m10.842 1.045A9 9 0 0 0 7.955 3.958M5.637 5.635a9 9 0 1 0 12.725 12.73M12 16v2M3 3l18 18\"/>";
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
