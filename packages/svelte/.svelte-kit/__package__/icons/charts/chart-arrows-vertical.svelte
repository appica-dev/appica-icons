<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18 21V7m0 0-3 3m3-3 3 3M9 15l3-3m0 0 3 3m-3-3v9m-9 0h18M3 6l3-3m0 0 3 3M6 3v18\"/>";
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
