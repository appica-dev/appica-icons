<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 8.997v.01M20 4v.01M15 4v.01M9 4v.01m0 15.98V20M4 4v.01m0 4.987v.01m0 5.986v.01m0 4.987V20m15-7.006h-5a1 1 0 0 0-1 1v4.997a1 1 0 0 0 1 .999h5a1 1 0 0 0 1-1v-4.996a1 1 0 0 0-1-1\"/>";
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
