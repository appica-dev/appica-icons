<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.949 4.58a8.07 8.07 0 0 1 6.158.06 8.03 8.03 0 0 1 4.31 4.382 8 8 0 0 1-.06 6.134 8.03 8.03 0 0 1-4.397 4.295m0-4.441V20h5.009M5.573 7.185v.01M4 11.018v.01m.571 4.082v.01m2.535 3.253v.01m3.847 1.557v.01\"/>";
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
