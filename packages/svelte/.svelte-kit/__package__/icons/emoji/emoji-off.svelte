<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.634 5.638a9 9 0 1 0 12.732 12.724m1.68-2.322A9 9 0 0 0 7.965 3.954M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0M3 3l18 18\"/>";
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
