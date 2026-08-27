<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.59 12.59C11.82 14.008 10.055 15 8 15c-2.761 0-5-1.79-5-4a8 8 0 0 0 13.643 5.67m1.64-2.357A8 8 0 0 0 19 11a3 3 0 0 0-5.545-1.59M16 8c0-2 2-4 4-4M3 3l18 18\"/>";
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
