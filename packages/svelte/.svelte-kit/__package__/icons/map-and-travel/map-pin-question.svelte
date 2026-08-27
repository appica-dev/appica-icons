<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.997 19.317 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243A8 8 0 1 1 20 11.073M19 22v.01M19 19a2.002 2.002 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
