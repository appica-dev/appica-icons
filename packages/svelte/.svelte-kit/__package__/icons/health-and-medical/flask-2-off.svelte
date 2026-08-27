<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.1 15H15m2.742 2.741A6 6 0 0 1 15.318 21H8.683A6 6 0 0 1 10 10.34v-.326M10 6V3h4v7m.613.598a6 6 0 0 1 2.801 2.817M9 3h6M3 3l18 18\"/>";
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
