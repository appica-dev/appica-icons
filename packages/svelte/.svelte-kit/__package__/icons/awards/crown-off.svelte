<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18 18H5L3.135 8.673a.25.25 0 0 1 .4-.244L8 12l1.6-2.4m1.596-2.394L12 6l4 6 4.464-3.571a.25.25 0 0 1 .401.244l-1.363 6.818M3 3l18 18\"/>";
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
