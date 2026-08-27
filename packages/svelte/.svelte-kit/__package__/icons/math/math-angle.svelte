<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 20H6.473c-2.106 0-3.16 0-3.421-.617-.262-.618.482-1.344 1.972-2.797L17.924 4M8 14c1.774 1.066 3 3.352 3 6\"/>";
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
