<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.23 5.233C5.08 5.478 5 5.735 5 6m0 0c0 1.131 1.461 2.117 3.62 2.628M5 6v12c0 1.657 3.134 3 7 3 3.245 0 5.974-.946 6.767-2.23m-5.79-9.799C16.381 8.767 19 7.515 19 6m0 0c0-1.657-3.134-3-7-3-1.645 0-3.158.243-4.353.65M19 6v9M3 3l18 18\"/>";
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
