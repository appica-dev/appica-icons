<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.05 11a8.98 8.98 0 0 1 2.54-5.403M7.904 3.9a9 9 0 0 1 12.113 12.112m-1.695 2.312A9 9 0 0 1 3.55 15m-.5 5v-5h5M3 3l18 18\"/>";
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
