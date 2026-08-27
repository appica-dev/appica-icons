<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0h7.5M6 17V3H4m2 2 14 1-.858 6.004M16.5 13H6m13 3-2 3h4l-2 3\"/>";
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
