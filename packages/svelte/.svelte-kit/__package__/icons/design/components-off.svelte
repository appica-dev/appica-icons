<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18.5 14.5 21 12l-3-3-2.5 2.5m-3.001-2.999L15 6l-3-3-2.5 2.5M3 3l18 18M3 12l3 3 3-3-3-3zm6 6 3 3 3-3-3-3z\"/>";
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
