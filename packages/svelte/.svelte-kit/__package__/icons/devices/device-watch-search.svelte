<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 18H9m0 0a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m0 12v3h3M9 6h6M9 6V3h6v3m0 0a3 3 0 0 1 3 3v2m2.2 9.2L22 22m-7-4a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
