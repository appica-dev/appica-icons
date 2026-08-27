<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 10h4m-4 0v4m0-4L6.5 6.5M14 10v4m0-4 3.5-3.5M14 14h-4m4 0 3.5 3.5M10 14l-3.5 3.5M9.96 6A3.5 3.5 0 1 0 6 9.96m12 0A3.5 3.5 0 1 0 14.04 6m0 12A3.5 3.5 0 1 0 18 14.04m-12 0A3.5 3.5 0 1 0 9.96 18\"/>";
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
