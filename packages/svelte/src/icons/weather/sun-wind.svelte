<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.468 10a4 4 0 1 0-5.466 5.46M2 12h1m8-9v1m0 16v1M4.6 5.6l.7.7m12.1-.7-.7.7M5.3 17.7l-.7.7M15 13h5a2 2 0 0 0 0-4m-8 7h5.967a1.999 1.999 0 0 1 1.447 3.414A2 2 0 0 1 18 20h-.286\"/>";
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
