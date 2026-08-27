<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16 3h5m0 0v5m0-5-7.536 7.536A5 5 0 0 0 12 14.07V21M8 3H3v5m3-1.99V6m2 2.02v-.01M10 10v.01\"/>";
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
